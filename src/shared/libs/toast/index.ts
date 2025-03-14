import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const customToastError = (str: string) => {
  return toast.error(str, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  })
}

export default customToastError
