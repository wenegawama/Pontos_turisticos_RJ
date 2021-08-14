import './postar.css'

function Postar() {
    return (
        <div className="postar">
            <img src="https://images.pexels.com/photos/3512847/pexels-photo-3512847.jpeg?cs=srgb&dl=pexels-angelo-duranti-3512847.jpg&fm=jpg" className="postarImagem"/>
            <form className="postarFormulario">
                <div className="postarFormularioGrupo">
                    <label htmlFor="fileInput" >
                        <i className="postarIcon fas fa-plus-circle"></i>
                    </label>
                    <input type="file" id='fileInput' className="fileEstilo"/>
                    <input type="text" placeholder="Titulo" className="textEstilo" autofocus={true}/>
                </div>
                <div className="postarFormularioGrupo">
                    <textarea  className="textEstilo postarText" type="text" placeholder="Escreva aqui sua experiência..." >
                    </textarea>

                </div>
                <button className="postarSubmit">
                    POSTAR
                </button>
            </form>
        </div>
    )
}

export default Postar
