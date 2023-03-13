
import router from "@/services/service-router";

class UsersService {

    create(data: any) {
        return router.post("/users/", data);
    }

    login(data: any) {
        return router.post("/users/login", data);
    }

}

const usersService = new UsersService();
export default usersService;