import "./CampoTexto.css"

function CampoTexto(props) {
    return (<div className="campo-texto">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            type={props.type} 
            name={props.name} 
            id={props.name} 
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}/>
    </div>)
}

export default CampoTexto;