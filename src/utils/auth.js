import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Import fix
import { useCookies } from 'react-cookie';
import Loader from '../components/common/Loader';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [cookies, setCookie, removeCookie] = useCookies();

    // Function to decode token and check expiration
    const getDecodedToken = useCallback((token) => {
        try {
            return jwtDecode(token);
        } catch {
            return null;
        }
    }, []);

    // Function to get access token from cookies
    const getAccessToken = useCallback(() => cookies.accessToken, [cookies.accessToken]);

    // Function to check if token is expired and handle logout
    const checkAuth = useCallback(() => {
        const token = getAccessToken();
        if (!token) {
            setIsAuthenticated(false);
            setIsLoading(false);
            return;
        }

        const decodedToken = getDecodedToken(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken?.exp < currentTime) {
            logoutLocal(); // Token expired, logout
        } else {
            setIsAuthenticated(true);
        }

        setIsLoading(false);
    }, [getAccessToken, getDecodedToken]);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // Functions for login and logout
    const loginLocal = useCallback((token) => {
        setCookie('accessToken', token, { path: '/', secure: true, sameSite: 'strict' });
        setIsAuthenticated(true);
    }, [setCookie]);

    const logoutLocal = useCallback(() => {
        removeCookie('accessToken');
        setIsAuthenticated(false);
    }, [removeCookie]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, loginLocal, logoutLocal, getAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
