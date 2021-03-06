import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetails'
import {API_KEY} from './components/constants'
import _ from 'lodash'



class App extends Component {
  constructor(props){
    super(props)

    this.state={ videos:[],
                selectedVideo:null}

    this.videoSearch('surfboards')

   }

   videoSearch(term){

    YTSearch({key:API_KEY,term:term},(videos)=>{
      console.log('videos',videos)
      this.setState({videos,selectedVideo:videos[0]})
})
   }
  
  render() {
    const {videos} =this.state
    //called every 300millisecond
    const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300)

    return (
      <div className="container">
        
        <SearchBar onSearchTermChange={videoSearch}/>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList  videos={videos} onVideoSelect={selectedVideo=>this.setState({selectedVideo})}/>
        </div>
      </div>
    );
  }
}

export default App;
