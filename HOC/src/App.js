import React from "react";
import './App.css';
import Button from './components/Button';
import Hover from './components/Hover';
import Nav from './components/Nav';

class App extends React.Component {    
   render() {
      return (
         <section>
            <Nav />
            <div className="container text-center">
               <Hover />
               <Button />
            </div>
         </section>
      );
   }
}
export default App;