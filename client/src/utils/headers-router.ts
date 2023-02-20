
import LOCAL_STORAGE_VARIABLES from "./localstoragevariables";


const headers = () => {

    const token = localStorage.getItem(LOCAL_STORAGE_VARIABLES.TOKEN);

    return {
        headers: {
            'x-access-token': token,
            'Authorization': `Bearer ${token}`,
        }
    }
}
export default headers;