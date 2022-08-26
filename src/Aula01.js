import React from "react";
const Bemvindo = (props) => {
  return (
  <div>
    <h2>Bem-Vindo(a)  {props.nome}</h2>
    <h3>Tenho {props.anos} anos</h3>
    </div>
 );

}
function Aula01() {
  return (
    <div>
      Ola Redgtech!!
      <Bemvindo  nome="Luan" anos="26"/>
      <Bemvindo nome="Douglas"anos="28"/>
      <Bemvindo nome="Maria"anos="27"/>
      
    </div>

  );
}
export default Aula01;