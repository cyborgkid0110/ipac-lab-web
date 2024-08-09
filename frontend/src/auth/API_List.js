export const BackendHost = process.env.REACT_APP_BACKEND_URL
export const REFRESH_TOKEN_API = `http://${BackendHost}/api/token/refresh/`
export const TOKEN_API = `http://${BackendHost}/api/token`