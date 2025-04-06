import axios from 'axios';

const API_URL = 'http://localhost:2025/api/users';

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
        const response = await axios.post<AuthResponse>(`${API_URL}/login`, data);
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
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