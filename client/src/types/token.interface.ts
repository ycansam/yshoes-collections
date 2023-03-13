export default interface Token {
    iat: number,
    exp: number,
    role: string,
    id: string,
    username: string
}