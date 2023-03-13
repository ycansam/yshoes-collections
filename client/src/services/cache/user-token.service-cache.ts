
import LOCAL_STORAGE_VARIABLES from "@/utils/constants/local-storage.constants";
import Token from "@/models/token.interface";
class UserTokenCacheService {

    public storageToken(token: string): void {
        localStorage.setItem(LOCAL_STORAGE_VARIABLES.USER_TOKEN, token)
    }

    public getToken(): Token | null {
        const token = this.getStoredToken();
        if (!token) return null;

        const decodedToken = this.decodeToken(token);
        if (this.isExpired(decodedToken)) return null;
        return decodedToken;
    }

    private getStoredToken(): string {
        return localStorage.getItem(LOCAL_STORAGE_VARIABLES.USER_TOKEN) as string;
    }

    private decodeToken(token: string): Token {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    private isExpired(token: Token): boolean {

        if (Date.now() >= token.exp * 1000)
            return true;
        return false;
    }


}

const userTokenCacheService = new UserTokenCacheService();
export default userTokenCacheService;