import  { useContext useState } from "react";
import axios from 'axios'
import './postar.css'
import {Context} from "../../context/Context"

function Postar() {
    const [foto, setFoto] = useState(null)
    const [titulo, setTitulo] = useState("")
    const [description, setDescription] = useState("")
    const {user} = useContext(Context)

    const handleSubmit =  async (e) => {
        e.preventDefault()
        const newPost = { 
            username:user.username,
            titulo,
            description
        }
        if(foto){
            const data = formData()
            const fotoNome = Date.now() + foto.name
            data.append("name",fotoNome)
            data.append("foto",foto)
            newPost.foto = fotoNome
            try{
                await axios.post("/upload", data)
            }cath(err){

            }
            try{
                const res = await axios.post("/posts", newPost)
                window.location.replace("/post"+res.data._id)
            }catch(err){

            }
        }
        
        try {           
            return await api.postForm(dados); 

        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div className="postar">
            {foto && (
                <img src={URL.createObjectURL(foto)} className="postarImagem" alt="" />
            )}
            
            <form className="postarFormulario" onSubmit={handleSubmit}>
                <div className="postarFormularioGrupo">
                    <label htmlFor="fileInput" >
                        <i className="postarIcon fas fa-plus-circle"></i>
                    </label>
                    <input type="file" id='fileInput' className="fileEstilo" onChange = {e=>setFoto(e.target.files[0])} />
                    <input type="text" placeholder="Titulo" className="textEstilo" autofocus={true} onChange = {(event) => setTitulo(event.target.value)}/>
                    
                </div>
                <div className="postarFormularioGrupo">
                    <textarea  className="textEstilo postarText" type="text" placeholder="Escreva aqui sua experiência..." onChange = {(event) => setDescription(event.target.value)} >
                    </textarea>

                </div>
                <button className="postarSubmit" type="submit">
                    POSTAR
                </button>
            </form>
        </div>
    )
}

export default Postar
