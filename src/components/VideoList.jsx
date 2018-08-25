import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList=(props)=>{
    const videos=props.videos
   const videoItems= videos.map((video)=>{
        return(
             <VideoListItem video={video} key={video.etag} onVideoSelect={props.onVideoSelect}/>
        )
       })

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
            
        </ul>
    )

}
export default VideoList