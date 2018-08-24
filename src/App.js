import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
const API_KEY='AIzaSyC43YT2e5wIhcslgTzVdienG4MsERWQgpM'




class App extends Component {
  constructor(props){
    super(props)

    this.state={ videos:[]}

    YTSearch({key:API_KEY,term:'surfboards'},(videos)=>{
          console.log('videos',videos)
          this.setState({videos})
    })
   }
  
  render() {
    return (
      <div className="App">
        
        <SearchBar/>
      </div>
    );
  }
}

export default App;
