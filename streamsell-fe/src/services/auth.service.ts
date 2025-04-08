import axios from 'axios';

const API_URL = 'http://localhost:2025/api/users';

// Add axios interceptor to include token in requests
axios.interceptors.request.use(
    (config) => {
        try {
            const userStr = localStorage.getItem('user');
            if (userStr) {
                const user = JSON.parse(userStr);
                if (user.token) {
                    config.headers.Authorization = `Bearer ${user.token}`;
                }
            }
            return config;
        } catch (error) {
            console.error('Error in axios interceptor:', error);
            return config;
        }
    },
    (error) => {
        console.error('Axios interceptor error:', error);
        return Promise.reject(error);
    }
);

interface SignupData {
    username: string;
    email: string;
    password: string;
}

interface LoginData {
    email: string;
    password: string;
}

interface AuthResponse {
    user: {
        id: number;
        username: string;
        email: string;
    };
    token: string;
    message?: string;
}

export const authService = {
    async signup(data: SignupData): Promise<AuthResponse> {
        const response = await axios.post<AuthResponse>(`${API_URL}/signup`, data);
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    },

    async login(data: LoginData): Promise<AuthResponse> {
        try {
            const response = await axios.post<AuthResponse>(`${API_URL}/login`, data);
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            } else {
                throw new Error('No token received from server');
            }
            return response.data;
        } catch (error: any) {
            console.error('Auth service login error:', error);
            if (error.response?.data?.error) {
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    },

    logout() {
        localStorage.removeItem('user');
    },

    getCurrentUser(): AuthResponse | null {
        const userStr = localStorage.getItem('user');
        if (userStr) return JSON.parse(userStr);
        return null;
    }
}; 