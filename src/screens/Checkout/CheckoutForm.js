import {useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Checkout from "./Checkout";



const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState ('')
    const navigate = useNavigate()

    const finalizar = () => {navigate("/checkout")}

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm (userData)
    }

    return (
        <div>
            <form onSubmit= {handleConfirm}>
                <label>
                 Nombre 
                 <input className="shadow-lg shadow-rose-600/50 w-auto h-auto rounded border-2 border-rose-300/50" required type="text"
                 value= {name}
                 onChange={({target})=> setName(target.value)}
                 />
                </label>

                <label>
                 Telefono 
                 <input className="shadow-lg shadow-rose-600/50 w-auto h-auto rounded border-2 border-rose-300/50" required type="text"
                 value= {phone}
                 onChange={({target})=> setPhone(target.value)}
                 />
                </label>

                <label>
                 Email 
                 <input className="shadow-lg shadow-rose-600/50 w-auto h-auto rounded border-2 border-rose-300/50" required type="text"
                 value= {email}
                 onChange={({target})=> setEmail(target.value)}
                 />
                </label>
                <br /><br />
                <div>
                    <Link to="/checkout"  className='shadow-lg shadow-rose-400/50 p-3 bg-rose-200 text-slate-800 font-semibold  uppercase rounded-lg'>Finalizar Compra</Link>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;