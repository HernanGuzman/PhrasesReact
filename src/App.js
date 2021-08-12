import './App.css';
import { Phrases } from './phrases/phrases'

function tituloSolo() {
  return <p className="upperParagraph">Esto es un titulo</p>
}
function Titulo(props) {
  //return <p className="upperParagraph">Esto es un titulo</p>
  //const titulo1 = "Esto es"
  //const titulo2 = "un titulo diferente"

  //return <p className="upperParagraph">{`${titulo1} ${titulo2}`}</p>

  //const partes = ["Esto es un titulo", "por partes"];
  //const clase = "upperParagraph";
  return <p className={props.estilo}>{props.frase}</p>
}
function App() {
  return (
    <div>
      <tituloSolo />
      <Titulo frase="Esto es un Titulo Nuevo" estilo="upperParagraph" />
      <Titulo frase="Esto es un Subtitulo Nuevo" estilo="upperParagraph2" />
      <hr />
      <Phrases />
    </div>
  );
}

export default App;
