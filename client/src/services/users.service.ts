
import router from "@/utils/service-router";
import headers from "@/utils/headers-router";

class UsersService {

    create(data: any) {
        return router.post("/users/", data);
    }

    login(data: any) {
        
        return router.post("/users/login", data, headers());
    }

}

const usersService = new UsersService();
export default usersService;