import React, { Component } from "react"
import SingleEpisode from "./SingleEpisode"

class Episodes extends Component {
  render() {
    const renderInfo = this.props.episodeList.map(episode => {
      return(
        <SingleEpisode
          key = {episode.id}
          id = {episode.episode_id}
          title = {episode.title}
          video = {episode.video_url}
          air = {episode.aired.string}
          episode = {episode.episode_id}
          addFavorite = {this.props.addFavorite}
        />
      )
    })
    return(
      <React.Fragment>
        <div className = "episode-container">
          {renderInfo}
        </div>
      </React.Fragment>
    )
  }
}

export default Episodes
