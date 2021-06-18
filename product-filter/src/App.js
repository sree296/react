import React, {lazy, Suspense} from "react";
import Nav from './components/Nav';
import Search from './components/Search';
// import ProductList from './components/ProductList';
import './App.css';

const ProductList = lazy(()=> import ('./components/ProductList'));
class App extends React.Component {  
   constructor(props){
      super(props);
      this.state = {
         searchText : ''
      }
      this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
   }
   handleSearchTextChange(_newVal){
      this.setState({
         searchText : _newVal
      });
   };

   render() {
      return (
         <section>
            <Nav />
            <div className="container">
               <Search 
                  searchText = {this.state.searchText}
                  onSearchTextChange = {this.handleSearchTextChange}
               />
               <Suspense fallback={<div>Loading...</div>}>
                     <ProductList 
                     products={this.props.products}
                     searchText = {this.state.searchText}
                     />
               </Suspense>
               
            </div>

         </section>
      );
   }
}
export default App;