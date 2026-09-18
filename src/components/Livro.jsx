function Livro(props) {
  return (
    <li className="livro">
      <strong>{props.titulo}</strong> — {props.autor} — {props.ano} — {props.genero}
    </li>
  )
}

export default Livro