import axios from 'axios';

const API_URL = 'http://localhost:2025/api/users';

interface SignupData {
    username: string;
    email: string;
    password: string;
    userType: 'user' | 'organization';
}

interface LoginData {
    email: string;
    password: string;
    userType: 'user' | 'organization';
}

interface AuthResponse {
    user: {
        id: number;
        username: string;
        email: string;
        userType: 'user' | 'organization';
    };
    token: string;
    message?: string;
}

export const authService = {
    async signup(data: SignupData): Promise<AuthResponse> {
        try {
            console.log('Sending signup request with data:', data);
            const response = await axios.post(`${API_URL}/signup`, data);
            console.log('Signup response:', response.data);
            if (response.data.token) {
                const userData = {
                    user: {
                        ...response.data.user,
                        userType: data.userType // Ensure userType is set from the request
                    },
                    token: response.data.token
                };
                localStorage.setItem('user', JSON.stringify(userData));
                return userData;
            }
            return response.data;
        } catch (error: any) {
            console.error('Signup error:', error.response?.data || error);
            throw new Error(error.response?.data?.message || 'Failed to create account');
        }
    },

    async login(data: LoginData): Promise<AuthResponse> {
        try {
            console.log('Sending login request with data:', data);
            const response = await axios.post(`${API_URL}/login`, data);
            console.log('Login response:', response.data);
            if (response.data.token) {
                const userData = {
                    user: {
                        ...response.data.user,
                        userType: data.userType // Ensure userType is set from the request
                    },
                    token: response.data.token
                };
                localStorage.setItem('user', JSON.stringify(userData));
                return userData;
            }
            return response.data;
        } catch (error: any) {
            console.error('Login error:', error.response?.data || error);
            throw new Error(error.response?.data?.message || 'Failed to login');
        }
    },

    logout() {
        localStorage.removeItem('user');
    },

    getCurrentUser() {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            const userData = JSON.parse(userStr);
            console.log('Retrieved user data:', userData);
            return userData;
        }
        return null;
    }
}; 