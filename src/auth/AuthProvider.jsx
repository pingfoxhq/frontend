import { createContext, useCallback, useEffect, useState } from "react";
import {
    loginRequest,
    logoutRequest,
    meRequest,
} from "./api.js";
import { config } from "../config.js";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadUser = useCallback(async () => {
        setLoading(true);
        try {
            if (config.devMode){
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            const res = await meRequest();
            setUser(res.data);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    const login = async (username, password) => {
        await loginRequest(username, password);
        await loadUser();
    };

    const logout = async () => {
        await logoutRequest();
        setUser(null);
    };

    useEffect(() => {
        loadUser();
    }, [loadUser]);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                isAuthenticated: !!user,
                login,
                logout,
                refreshUser: loadUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
