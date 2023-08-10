import './CampoTexto.css'

const CampoTexto = (props) => {

    // const placeholderModificada = `${props.placeholder}...` // (Isso aqui é para colocar uma escrita fixa depois do que foi escrito, deve sempre estar dentro de CRASE)

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto