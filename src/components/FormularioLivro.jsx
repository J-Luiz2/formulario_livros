import { useState } from "react";
import CampoTexto from './CampoTexto'
import Livro from './Livro'
import './FormularioLivro.css'

function FormularioLivro(){
    const [titulo,setTitulo] = useState('')
    const [autor,setAutor] = useState('')
    const [ano,setAno] = useState('')
    const [genero,setGenero] = useState('')
    const [livros,setLivros] = useState([])

    function handleSubmit(evento) {
        evento.preventDefault()

        const novoLivro = { titulo, autor, ano, genero }
        setLivros([...livros, novoLivro])

        setTitulo('')
        setAutor('')
        setAno('')
        setGenero('')
  }


    return (<section className="formulario-livro">
      <h1>Cadastro de Livros</h1>

      <form onSubmit={handleSubmit}>
        <CampoTexto
          label="Titulo do livro"
          name="titulo"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          placeholder="Ex: O Senhor dos Anéis"
        />

        <CampoTexto
          label="Autor"
          name="autor"
          value={autor}
          onChange={(evento) => setAutor(evento.target.value)}
          placeholder="Ex: J.R.R Tolkien"
        />

        <CampoTexto
          label="Ano de publicação"
          name="ano"
          value={ano}
          onChange={(evento) => setAno(evento.target.value)}
          placeholder="Ex: 1954"
        />

        <CampoTexto
          label="Gênero do livro"
          name="genero"
          value={genero}
          onChange={(evento) => setGenero(evento.target.value)}
          placeholder="Ex: Fantasia"
        />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="formulario-livro-lista">
        <h2>Livros cadastrados</h2>

        {livros.length === 0 && <p>Nenhum livro cadastrado ainda.</p>}

        <ul>
          {livros.map((livro) => (
            <Livro 
              titulo={livro.titulo} 
              autor={livro.autor} 
              ano={livro.ano} 
              genero={livro.genero}/>
          ))}
        </ul>
      </div>
    </section>)
}

export default FormularioLivro;