import React from "react";
const Bemvindo = (props) => {
  return (
  <div>
    <h2>Bem-Vindo(a)  {props.nome}</h2>
    <h3>Tenho {props.anos} anos</h3>
    </div>
 );

}
function App() {
  return (
    <div>
      Ola Redgtech!!
      <Bemvindo  nome="Luan" anos="26"/>
      <Bemvindo nome="Douglas"anos="28"/>
      <Bemvindo nome="Maria"anos="27"/>
      <Bemvindo nome="Mirela"anos="25"/>
      <Bemvindo nome="Jonatas"anos="24"/>
      <Bemvindo nome="Jonh"anos="23"/>
      <Bemvindo nome="Wilson"anos="22"/>
      <Bemvindo nome="Rasta"anos="21"/>


      <h1>Curso React</h1>
    </div>

  );
}
export default App;