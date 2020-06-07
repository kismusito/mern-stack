
export const authService = {
    login,
    verifyToken
}

async function login(user) {

    const configuration = {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }

    const request = await fetch('http://localhost:3001/singin', configuration);
    const requestJson = await request.json();

    return requestJson;

}

async function verifyToken(token) {
    const configuration = {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({token: token})
    }

    const verifyToken = await fetch('http://localhost:3001/verify' , configuration);
    const verifyToJSON = await verifyToken.json();
    return verifyToJSON;
}