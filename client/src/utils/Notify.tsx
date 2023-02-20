'use client'
import { toast } from 'react-toastify';
const ToastTypes = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    WARNING: 'WARNING'
}
const toastStyle: any = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}
const Notify = (message: string, type: string) => {
    switch (type) {
        case ToastTypes.SUCCESS:
            toast.success(message, toastStyle);
            break;
        case ToastTypes.ERROR:
            toast.error(message, toastStyle);
            break;
        case ToastTypes.WARNING:
            toast.warning(message, toastStyle);
            break;
        default:
            break;
    }
}
const notify = { Toast: Notify, ToastTypes }
export default notify;