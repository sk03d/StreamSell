import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService } from '../services/auth.service';

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

interface AuthContextType {
    user: AuthResponse['user'] | null;
    loading: boolean;
    login: (email: string, password: string, userType: 'user' | 'organization') => Promise<void>;
    signup: (username: string, email: string, password: string, userType: 'user' | 'organization') => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthResponse['user'] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const userData = authService.getCurrentUser();
                console.log('Initial user data:', userData);
                if (userData?.user) {
                    console.log('Setting user:', userData.user);
                    setUser(userData.user);
                }
            } catch (error) {
                console.error('Error initializing auth:', error);
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    const login = async (email: string, password: string, userType: 'user' | 'organization') => {
        try {
            console.log('Login attempt with userType:', userType);
            const response = await authService.login({ email, password, userType });
            console.log('Login response:', response);
            setUser(response.user);
            return response;
        } catch (error: any) {
            console.error('Login error:', error);
            throw new Error(error.message || 'Failed to login. Please check your credentials.');
        }
    };

    const signup = async (username: string, email: string, password: string, userType: 'user' | 'organization') => {
        try {
            console.log('Signup attempt with userType:', userType);
            const response = await authService.signup({ username, email, password, userType });
            console.log('Signup response:', response);
            setUser(response.user);
            return response;
        } catch (error: any) {
            console.error('Signup error:', error);
            throw new Error(error.message || 'Failed to create account. Please try again.');
        }
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