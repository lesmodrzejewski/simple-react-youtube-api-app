import React from 'react'

const VideoItem = ({ videos }) => {


    const renderVideoList = videos.map( video => {
        return(
            <div key={video.id.videoId}>
                <img src={video.snippet.thumbnails.medium.url}/>
                {/* <p>{video.snippet.description}</p> */}
            </div>
        )
    })

    return(
        <div>{renderVideoList}</div>
    )
}


export default VideoItem;