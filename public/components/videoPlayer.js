import React from 'react';

var done = false;
let loaded;

export default class VideoPlayer extends React.Component {

    componentDidMount() {
        if( !loaded ) {
            loaded = new Promise((resolve) => {
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                window.onYouTubeIframeAPIReady = () => resolve(window.YT);
            })
        }
        loaded.then((YT) => {
            this.player = new YT.Player("player", {
                height: '390',
                width: '640',
                videoId: '37eEUsd1ASA',
                events: {
                    'onReady': this.onPlayerReady,
                }
            });
        })
    }

    onPlayerReady(event) {
        event.target.playVideo();
    };

    render() {
        return (
            <div>Hello?</div>
        );
    }
}
