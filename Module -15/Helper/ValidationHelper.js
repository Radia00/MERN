import { toast } from 'react-toastify';

class ValidationHelper {
    isEmpty(value) {
        if (value.trim() === "") {
            return true
        } else {
            return false
        }
    }

    successToast(msg) {
        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    errorToast(msg) {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
}


export const { isEmpty, successToast, errorToast } = new ValidationHelper()