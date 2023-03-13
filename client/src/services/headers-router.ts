
import usersLocalStorageService from "@/services/tokenStorage.service";

const headers = () => {

    const token = usersLocalStorageService.getToken();

    return {
        headers: {
            'x-access-token': token,
            'Authorization': `Bearer ${token}`,
        }
    }
}
export default headers;