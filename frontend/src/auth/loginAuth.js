import { TOKEN_API } from "./API_List";

export const login = async (email, password) => {
    try {
        const response = await fetch(TOKEN_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.access && data.refresh) {
            setAccessToken(data.access)
            setRefreshToken(data.refresh)
        }
        return true;
    } catch (error) {
        console.error("There was an error!", error);
        return false;
    }
};

export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};

export const getRefreshToken = () => {
    return localStorage.getItem('refreshToken');
};

export const setAccessToken = (token) => {
    localStorage.setItem('accessToken', token);
};

export const setRefreshToken = (token) => {
    localStorage.setItem('refreshToken', token);
};

export const removeAccessToken = () => {
    localStorage.removeItem('accessToken');
}

export const removeRefreshToken = () => {
    localStorage.removeItem('refreshToken');
}

export const isAuthenticated = () => {
    return !!getAccessToken();
};
