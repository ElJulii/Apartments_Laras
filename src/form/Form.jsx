import style from "./form.module.css"
import {useState} from "react";
import axios from 'axios'
function FormData() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit=(e)=> {
        e.preventDefault();
        const data={
            Client: name,
            Phone: phone
        }
        axios.post('https://sheet.best/api/sheets/7139ebff-c2e0-4242-8f43-1096912006c4', data).then((response) =>{
                setName('');
                setPhone('');
            }
        )
    }

   return (

       <div id="form-section" className={style.form_container}>

           <h2 className={style.form_description}>
               Por favor, ingrese sus datos y nos comunicaremos
               con usted lo mas antes posible.
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
               <button className={style.button_form} type="submit">Enviar</button>
           </form>
       </div>

   )
}

export default FormData;