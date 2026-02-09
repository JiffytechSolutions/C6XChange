import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Static credentials
const STATIC_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

interface AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, password: string) => boolean;
    logout: () => void;
    isLoading: boolean;
    username: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [username, setUsername] = useState<string | null>(null);

    // Check if user is already logged in (from localStorage)
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const storedUsername = localStorage.getItem('username');
        if (token && storedUsername) {
            setIsAuthenticated(true);
            setUsername(storedUsername);
        }
        setIsLoading(false);
    }, []);

    const login = (email: string, password: string): boolean => {
        // Validate against static credentials
        if (email === STATIC_CREDENTIALS.username && password === STATIC_CREDENTIALS.password) {
            const mockToken = 'mock-jwt-token-' + Date.now();
            localStorage.setItem('authToken', mockToken);
            localStorage.setItem('username', email);
            localStorage.setItem('loginTime', new Date().toISOString());
            
            setIsAuthenticated(true);
            setUsername(email);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        localStorage.removeItem('loginTime');
        setIsAuthenticated(false);
        setUsername(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading, username }}>
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
