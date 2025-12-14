import api from "../api/client";

export const loginRequest = (username, password) =>
    api.post("/api/auth/login/", { username, password });

export const refreshRequest = () =>
    api.post("/api/auth/refresh/");

export const logoutRequest = () =>
    api.post("/api/auth/logout/");

export const meRequest = () =>
    api.get("/api/auth/me/");
