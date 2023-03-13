
import router from "@/services/service-router";

export default class CheckoutsService {

    static addCheckout(data: any) {
        return router.post(`/checkout/`, data);
    }
}