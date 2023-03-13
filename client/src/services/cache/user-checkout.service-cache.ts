
import UserCheckout from "@/models/user-checkout.interface";
import LOCAL_STORAGE_VARIABLES from "@/utils/constants/local-storage.constants";
class UserCheckoutCacheService {

    public storeCheckout(data: any): void {
        this.storeItem(data);
    }

    public storeUserCheckoutInformation(userInfo: any): void | null {
        const cartData = this.getStorageData();
        if (!cartData) return null;
        const data = { ...JSON.parse(cartData), userInfo }
        this.storeItem(data);
    }

    private storeItem(data: object): void {
        localStorage.setItem(LOCAL_STORAGE_VARIABLES.USER_CHECKOUT, JSON.stringify(data))
    }

    public getCheckout(): UserCheckout | null {
        const cartData = this.getStorageData();
        if (!cartData) return null;
        return JSON.parse(cartData);
    }

    private getStorageData() {
        return localStorage.getItem(LOCAL_STORAGE_VARIABLES.USER_CHECKOUT);
    }
}

const userCheckoutCacheService = new UserCheckoutCacheService();
export default userCheckoutCacheService;