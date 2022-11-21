import './App.css';
import { Component } from 'react';
import palindrome from './palindrome';

class App extends Component {

  state = {
    message: "no string added.",
    search: "",
    answer: ""
  };
  
  searchHandler = (event) => {
    this.setState({ search: event.target.value});
    console.log(event.target.value);
  }

  clickHandler = (event) => {
    event.preventDefault();
    
    let results = "";
    if (palindrome(this.state.search)) {
      results = `Yay this is a palindrome `;
    }
    else{
      results = `Sorry no palindrome here`;
    }
    
    
    


    this.setState({
      message: results,
    });
  }
  
  render(){
    console.log(`message: ${this.state.message}`);
    return (
      <div>
          <h1>Is it a palindrome</h1>
          <div className='search'>
          <h3>Enter a string to see if it is a palindrome</h3>
            <input type="text" name="search" onChange={this.searchHandler}></input>
            <button onClick={this.clickHandler}>Check for palindrome</button>
          </div>        
          <h2>Message: {this.state.message}</h2>       
        </div >
    );
  }   
}

export default App;