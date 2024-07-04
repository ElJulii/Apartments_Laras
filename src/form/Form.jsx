import style from "./form.module.css"
import {useState} from "react";
import axios from 'axios'
function FormData() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?\d+$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit=(e)=> {
        e.preventDefault();

        if (!validatePhone(phone)) {
            setErrorMessage('Por favor, ingrese un número de teléfono válido SIN espacios, puede empezar con +.');
            return;
        }

        const data={
            Client: name,
            Phone: phone
        }
        axios.post('https://sheet.best/api/sheets/7139ebff-c2e0-4242-8f43-1096912006c4', data).then((response) =>{
            setName('');
            setPhone('');
            setErrorMessage('');
            alert('¡La información se ha enviado exitosamente!')
            })
            .catch((error) => {
            setErrorMessage('Hubo un error al enviar la información. Por favor, inténtelo de nuevo.');
        });
    }

   return (

       <div id="form-section" className={style.form_container}>

           <h2 className={style.form_description}>
               Por favor, ingrese sus datos y nos comunicaremos con usted lo más pronto posible.
           </h2>

           <form autoComplete="off" className={style.formClient} onSubmit={handleSubmit}>

               <label>Su nombre:</label>
               <input
                   type="text" className={style.input_client} placeholder="Nombre"
                   onChange={(e)=>setName(e.target.value)} value={name} required
               />

               <label>Su número de contacto:</label>
               <input
                   type="text" className={style.input_phone} placeholder="Telefono"
                   onChange={(e)=>setPhone(e.target.value)} value={phone} required
               />

               {errorMessage && <p className={style.error_message}>{errorMessage}</p>}

               <button className={style.button_form} type="submit">Enviar</button>
           </form>
       </div>

   )
}

export default FormData;