import React, { useState } from "react";

import api from '../../api/api'
import './postar.css'

function Postar() {
    const [imagem, setImagem] = useState("")
    const [titulo, setTitulo] = useState("")
    const [description, setDescription] = useState("")

    const submit = async () => {
        const dados = { foto: imagem, titulo: titulo, description: description}
        try {           
            return await api.postForm(dados); 

        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div className="postar">
            <img src="https://images.pexels.com/photos/3512847/pexels-photo-3512847.jpeg?cs=srgb&dl=pexels-angelo-duranti-3512847.jpg&fm=jpg" className="postarImagem"/>
            <form className="postarFormulario">
                <div className="postarFormularioGrupo">
                    <label htmlFor="fileInput" >
                        <i className="postarIcon fas fa-plus-circle"></i>
                    </label>
                    <input type="file" id='fileInput' className="fileEstilo" onChange = {(event) => setImagem(event.target.files[0])} />
                    <input type="text" placeholder="Titulo" className="textEstilo" autofocus={true} onChange = {(event) => setTitulo(event.target.value)}/>
                    
                </div>
                <div className="postarFormularioGrupo">
                    <textarea  className="textEstilo postarText" type="text" placeholder="Escreva aqui sua experiência..." onChange = {(event) => setDescription(event.target.value)} >
                    </textarea>

                </div>
                <button className="postarSubmit" onClick = {submit}>
                    POSTAR
                </button>
            </form>
        </div>
    )
}

export default Postar
