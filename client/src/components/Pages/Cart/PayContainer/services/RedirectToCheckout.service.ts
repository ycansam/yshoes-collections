import UserCheckoutCacheService from "@/services/cache/user-checkout.service-cache";
import PATHS from "@/utils/PAGE_PATHS";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import PayContainerProps from "../models/PayContainerProps.interface";
const redirectToCheckout = (router: AppRouterInstance, { cart, currency, subtotal }: PayContainerProps) => {

    const data = { cart, currency, amount: subtotal, saved_at: new Date() };
    UserCheckoutCacheService.storeCheckout(data)

    router.push(PATHS.USER.CHECKOUT);
}

export default redirectToCheckout;