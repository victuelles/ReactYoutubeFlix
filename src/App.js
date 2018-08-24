import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import {API_KEY} from './components/constants'




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
    const {videos} =this.state
    return (
      <div className="App">
        
        <SearchBar/>
      
        <VideoList  videos={videos}/>
   
      </div>
    );
  }
}

export default App;
