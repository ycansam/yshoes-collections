
import router from "@/utils/service-router";


class UsersService {

    create(data: any) {
        return router.post("/users/", data);
    }

}

const usersService = new UsersService();
export default usersService;