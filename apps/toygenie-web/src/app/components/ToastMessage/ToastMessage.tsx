import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastMessage({type, msg}:{type: string; msg: string}) {

    console.log("[TOAST] ", type, msg);
    const showToast = (type: string, msg: string) => {
        if (type === "success") {
          toast.success(msg, {
            className: "primaryColor",
          });
        } else if (type === "error") {
          toast.error(msg, {
            autoClose: 2000,
            className: "primaryColor",
          });
        }
      };

    return (
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
}
export default ToastMessage;