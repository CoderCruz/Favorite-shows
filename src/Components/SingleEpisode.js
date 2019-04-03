import React from "react"

const SingleEpisode = (props) => {
  const episodeObj = {
    title: props.title,
    video: props.video,
    air: props.air,
    episode: props.episode
  }
  return(
    <div className = "individual-episode">
      <img className = "images" src="https://iblos3om.files.wordpress.com/2009/11/anime-naruto_team-7.jpg" />
      <a href={props.video}><h2>{props.title}</h2></a>
      <h3>Aired: {props.air}</h3>
      <h3>Episode Number:{props.episode}</h3>
      <button onClick={() => props.addFavorite(episodeObj)}>Favorite</button>
    </div>
  )
}

export default SingleEpisode
