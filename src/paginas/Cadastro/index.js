import React, {Component} from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import "../../Estilos.css";


class Cadastro extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: "",
      senha: "",
      nome: "",
      sobrenome: "",
      dataNascimento: ""
    }

    this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
  }

  async cadastrarUsuario(){

    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).then(async (retorno) => {
      await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        dataNascimento: this.state.dataNascimento
      })
    });
  }

  render(){
    return(
      <div>

        <h1>Cadastro</h1>

        <form className="loginForm">

          <input type='text' placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value})} />

          <br/>

          <input type='password' placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})} />

          <br/>

          <input type='text' placeholder='Nome' onChange={(e) => this.setState({nome: e.target.value})} />

          <br/>

          <input type='text' placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome: e.target.value})} />

          <br/>

          <input type='date' placeholder='Data de nascimento' onChange={(e) => this.setState({dataNascimento: e.target.value})} />

        </form>
        
        <br/>

        <button onClick={this.cadastrarUsuario}>Cadastrar</button>
        
        <Link to="/login"><button>Login</button></Link>

      </div>
    )
  }


}


export default Cadastro;