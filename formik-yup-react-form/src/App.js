import React from "react";
import img from './img/signUp.png';
import {LoginForm} from './components/LoginForm';

class App extends React.Component {    
   render() {
      return (
         <div className="container mt-3">
             <div className="row">
                <div className="col-md-5">
                   <LoginForm />
                </div>
                <div className="col-md-7">
                     <img src={img} className="img-fluid w-100" alt="BG Image"/>
                </div>
             </div>
         </div>
      );
   }
}
export default App;