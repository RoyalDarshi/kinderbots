import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simulate fetching authentication status (replace with real logic)
    useEffect(() => {
        // Simulate an async operation
        const storedRole = localStorage.getItem('role'); // Example: get role from local storage
        if (storedRole) {
            setIsAuthenticated(true);
            setRole(storedRole);
        }
        setLoading(false);
        // setTimeout(() => {
        // }, 1000); // Simulat
        //e network delay
    }, []);

    const login = (email, password, userRole) => {
        setIsAuthenticated(true);
        setRole(userRole);
        localStorage.setItem('role', userRole); // Store role for persistence
    };

    const logout = () => {
        setIsAuthenticated(false);
        setRole(null);
        localStorage.removeItem('role'); // Clear stored role
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, role, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
