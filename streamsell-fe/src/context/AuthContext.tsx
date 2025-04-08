import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService } from '../services/auth.service';

interface AuthResponse {
    user: {
        id: number;
        username: string;
        email: string;
    };
    token: string;
    message?: string;
}

interface AuthContextType {
    user: AuthResponse['user'] | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    signup: (username: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<AuthResponse['user'] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const savedUser = authService.getCurrentUser();
            if (savedUser && savedUser.user && savedUser.token) {
                setUser(savedUser.user);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Error initializing auth state:', error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await authService.login({ email, password });
            if (response.user && response.token) {
                setUser(response.user);
                localStorage.setItem('user', JSON.stringify(response)); // Store both user and token
                return response;
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (error) {
            console.error('Login error in context:', error);
            throw error;
        }
    };

    const signup = async (username: string, email: string, password: string) => {
        const response = await authService.signup({ username, email, password });
        setUser(response.user);
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 