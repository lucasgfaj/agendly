import { api } from "./api";

export const register = async (data: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}) => {
    const response = await api.post("/register", data);
    return response.data;
};

export const login = async (data: {
    email: string;
    password: string;
}) => {
    const response = await api.post("/login", data);

    localStorage.setItem("token", response.data.token);

    return response.data;
};

export const logout = async () => {
    await api.post("/logout");

    localStorage.removeItem("token");
};
