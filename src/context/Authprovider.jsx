import React from "react";
import { createContext, useState } from "react";
import { request } from "../services/request";
const defaultProvider = {
    loading: true,
    setLoading: () => Boolean,
    register: () => Promise.resolve()
};
const AuthContext = createContext(defaultProvider)
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(defaultProvider?.loading)

    const handleRegister = async (submitData) => {
    try {
        setLoading(true);
        const response = await request.post("/auth/signup", submitData);
        const { tokens, user } = response.data.data;

        localStorage.setItem("testUserToken", tokens.accessToken);
        return { tokens, user };
    } catch (err) {
        console.error(err);
        throw new Error("Registration failed");
    } finally {
        setLoading(false);
    }
};
    const handleLogin = async (submitData) => {
          setLoading(true)
          try {
            const response = await request.post("/auth/signin", submitData)
            const { tokens, user } = response.data.data
            localStorage.setItem("testUserToken", tokens.accessToken)
            return { tokens, user }
          } catch (err) {
            console.error(err)
            throw new Error("Login failed")
          } finally {
            setLoading(false)
          }
}

    const values = {
        loading,
        register: handleRegister,
        login: handleLogin
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }