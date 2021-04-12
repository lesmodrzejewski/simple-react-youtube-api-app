import React from 'react'


// const VideoDetail = ({ video }) => {
//     return (
//         <div>
//            <div>VideoDetail</div> 
//            {/* <div>{video.id.videoId}</div> */}
//         </div>
        
//     )
// }


const VideoDetail = ({ video }) => {

    if(!video)
        return <div>Loading...</div>

    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe 
                    title="video player"
                    src={videoSource}>
                </iframe>
            </div>
            <div>{video.snippet.title}</div>
        </div>
    )
}


export default VideoDetail