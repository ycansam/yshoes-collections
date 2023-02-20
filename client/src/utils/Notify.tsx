'use client'
import { toast } from 'react-toastify';
const ToastTypes = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    WARNING: 'WARNING'
}
const Notify = (message: string, type: string) => {
    switch (type) {
        case ToastTypes.SUCCESS:
            console.log("a")
            toast.success(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
            });
            break;
        case ToastTypes.ERROR:
            toast.error(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
            });
            break;
        case ToastTypes.WARNING:
            toast.warning(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
            });
            break;
        default:
            break;
    }
}
const notify = { Toast: Notify, ToastTypes }
export default notify;