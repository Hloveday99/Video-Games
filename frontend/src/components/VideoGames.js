import React, { Component } from 'react'
import CreateVideoGame from './CreateVideoGame';
import VideoGame from './VideoGame';

const API_URL = process.env.REACT_APP_API_URL;

export default class extends Component {
    state = {
        videoGames: []
    }
    getVideoGames = () => {
        fetch(`${API_URL}/video-games`) //URL -> URL/video-games
            .then(response => response.json())
            .then(videoGames => this.setState({videoGames}))
    }
    componentDidMount(){
        this.getVideoGames()
    }
    render() {
        const displayGames = this.state.videoGames.map(game => <VideoGame game={game}/>)

        return (
            <div id="HelloThere">
                <h1>Video Games</h1>
                <CreateVideoGame/>
                {displayGames}
                </div>
        )
    }
}