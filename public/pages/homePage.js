import React from 'react';
import SearchBar from '../components/searchBar';
import VideoPlayer from '../components/videoPlayer';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div>This is { true ? 'indeed a': 'not a' } server side rendering!</div>
                    <SearchBar />
                <div id='player'>
                    <VideoPlayer />
                </div>
            </div>
        );
    }
}

export default HomePage
