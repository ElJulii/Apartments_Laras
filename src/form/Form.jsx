import style from "./form.module.css"
function FormData() {
   return (
       <div id="form-section" className={style.form_container}>
           <h2 className={style.form_description}>
               Por favor, ingrese sus datos y nos comunicaremos
               con usted lo mas antes posible.
           </h2>
           <form className={style.form} method="GET">
               <p> Su nombre: </p>
               <input type="text" className={style.input_data} placeholder="nombre"/>
               <p>Su número de contacto:</p>
               <input type="text" className={style.input_data} placeholder="telefono"/>
               <button className={style.button_form}>Enviar</button>
           </form>
       </div>

   )
}

export default FormData;