import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useCookies } from 'react-cookie';
import Loader from '../components/common/Loader';
import DialogModel from '../components/common/DialogModel';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [cookies, setCookie, removeCookie] = useCookies();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const navigate = useNavigate();

    const getDecodedToken = useCallback((token) => {
        try {
            return jwtDecode(token);
        } catch {
            return null;
        }
    }, []);

    const getAccessToken = useCallback(() => cookies.accessToken, [cookies.accessToken]);

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
            logoutLocal();
            setShowLoginModal(true); // Show modal when token is expired
        } else {
            setIsAuthenticated(true);
        }

        setIsLoading(false);
    }, [getAccessToken, getDecodedToken]);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    const loginLocal = useCallback((token) => {
        setCookie('accessToken', token, { path: '/', secure: true, sameSite: 'strict' });
        setIsAuthenticated(true);
        setShowLoginModal(false);
    }, [setCookie]);


    const logoutLocal = () => {
        removeCookie('accessToken');
        setIsAuthenticated(false);
    };

    const handleNavigateToLogin = () => {
        setShowLoginModal(false);
        logoutLocal();
        navigate('/login', { replace: true });
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, logoutLocal, loginLocal, getAccessToken }}>
            {children}
            {showLoginModal && (
                <DialogModel open={showLoginModal} onClose={() => setShowLoginModal(false)}>
                    <div style={{ textAlign: 'center' }}>
                        <h2>Session Expired</h2>
                        <p>Please log in again to continue.</p>
                        <button onClick={handleNavigateToLogin}>Re-Login</button>
                    </div>
                </DialogModel>
            )}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
