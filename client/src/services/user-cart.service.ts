
import router from "@/services/service-router";

export default class UserCartService {

    static getByUser(id_user: string) {
        return router.get(`/cart/${id_user}`);
    }
}