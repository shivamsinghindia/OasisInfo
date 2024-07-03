
import { changePassword } from "../services/changePasswordPage.services.js";
async function handleSubmit(e, formVal, setError, setSuccessMessage, navigate) {
    e.preventDefault();

    try {
        const data = await changePassword(formVal)

        console.log("message:::\n",data);
        if(data?.success === 0){
            setError((prev)=>{
                return {...prev,...data?.errors}
            })
            return
        }
        setSuccessMessage("User registrated succesfully!!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
    } catch (error) {
        console.log(error);
    }
}

function handleChange(e,setError,setFormVal) {

    const name = e.target.name + "Error";

    setError((error)=>{
        return {...error, [name]: "", otherError: "" }
    });
    setFormVal((formVal)=>{
        return { ...formVal, [e.target.name]: e.target.value }
    });
  }

export { handleSubmit,handleChange }