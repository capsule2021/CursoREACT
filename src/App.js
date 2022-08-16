import React from "react";
const Bemvindo = (props) => {
  return (

    <h2>Bem-Vindo(a)  {props.nome}</h2>
  );

}
function App() {
  return (
    <div>
      Ola Redgtech!!
      <Bemvindo  nome="Luan"/>
      <Bemvindo nome="Douglas"/>
      <Bemvindo nome="Maria"/>
      <Bemvindo nome="Mirela"/>
      <Bemvindo nome="Jonatas"/>
      <Bemvindo nome="Jonh"/>
      <Bemvindo nome="Wilson"/>
      <Bemvindo nome="Rasta"/>


      <h1>Curso React</h1>
    </div>

  );
}
export default App;