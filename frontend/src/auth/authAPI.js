import { REFRESH_TOKEN_API } from "./API_List";
import { getAccessToken, getRefreshToken, removeAccessToken, removeRefreshToken, setAccessToken } from "./loginAuth";

const reloadAccessToken = async () => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
        return null;
    }

    const response = await fetch(REFRESH_TOKEN_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken }),
    });

    if (response.ok) {
        const data = await response.json();
        setAccessToken(data.access);
        return data.access;
    }
    
    return null;
};

const handleExpiredRefreshToken = () => {
    removeAccessToken()
    removeRefreshToken()
};

const fetchWithAuth = async (url, options = {}) => {
    let accessToken = getAccessToken();
    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
    };

    if (accessToken) {
        headers['Authorization'] = 'Bearer ' + accessToken;
    }

    let response = await fetch(url, { ...options, headers });
    if (response.status === 401) {
        // Access token có thể đã hết hạn hoặc không hợp lệ, thử làm mới nó
        accessToken = await reloadAccessToken();
        if (accessToken) {
            headers['Authorization'] = 'Bearer ' + accessToken;
            response = await fetch(url, { ...options, headers });
        } else {
            // Refresh token hết hạn hoặc không hợp lệ, buộc người dùng đăng nhập lại
            handleExpiredRefreshToken();
            const errorJSON = {
                status: response.status,
                error: 1,
            }
            return errorJSON;
        }
    }

    return response.json();
};

export default fetchWithAuth;
