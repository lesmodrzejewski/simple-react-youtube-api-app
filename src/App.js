import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import youtube from './youtube';


class App extends React.Component {

    state = { videos: [] }

    onTermSubmit = async (term) => {

        const response = await youtube.get("/search", {
            params: {
                q: term,
            }
        });

        this.setState({ videos: response.data.items });

        console.log(this.state.videos)

        // this.setState({ video: response.data.results})
    }

    render() {
        return(
            <div>
                <SearchBar onHitSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App;