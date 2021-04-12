import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from './youtube';


class App extends React.Component {

    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onTermSubmit('building')
    }

    onTermSubmit = async (term) => {

        const response = await youtube.get("/search", {
            params: {
                q: term,
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[3]});

        console.log(this.state.videos)
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video})
        console.log(this.state.selectedVideo)

    }

    render() {
        return(
            <div>
                <SearchBar onHitSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                <VideoDetail video={this.state.selectedVideo}/>
            </div>
        )
    }
}

export default App;