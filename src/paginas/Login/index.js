import React, { Component} from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import "../../Estilos.css";


class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: "",
      senha: ""
    }

    this.acessar = this.acessar.bind(this);
  }

  async acessar(){

    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).then(() => {
      window.location.href = "./principal";
    })
    .catch((erro) => {
      console.log(erro)
            alert("Usuário não cadastrado ou dados inválidos!")
    });
  }

  render(){
    return(
      <div>

        <h1>Login</h1>

          <form className="formLogin">

          <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} /> <br/>
          
          <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value})} /> <br/>
        
        </form>

        <button onClick={this.acessar}>Acessar</button>

        <Link to="/cadastro"><button>Cadastro</button></Link>

      </div>

      
    )
  }
}


export default Login;