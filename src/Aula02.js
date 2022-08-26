import React from 'react';
const Equipe = (props) => {
    return(
        <div>
            <Sobre username={props.nome} cargo={props.cargo}
            idade={props.idade} />
        </div>
    );
   
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Ola sou o(a) {props.username}</h2>
             <h3>Cargo: {props.cargo}</h3>
             <h3>Idade: {props.idade} anos</h3>
        </div>
    );
   
}
function Aula02(){
    return(
        <div>
            <h1>Conheca nossa equipe:</h1>
            <Equipe nome="Jonh" cargo="Programador" idade="29"/>
        </div>
    )
}
export default Aula02;