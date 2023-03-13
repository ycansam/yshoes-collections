export default interface Token {
    id: string,
    username: string
    role: string,
    iat: number,
    exp: number,
}