const keyName = "jwtToken";

function getToken() {
    return localStorage.getItem(keyName);
}
function storeToken(token) {
    return localStorage.setItem(keyName, token);
}
function removeToken() {
    return localStorage.removeItem(keyName);
}

export default {
    getToken, storeToken, removeToken
}