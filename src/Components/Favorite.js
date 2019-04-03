import React from "react"
import Episodes from "./Episodes"
import SingleEpisode from "./SingleEpisode"

const Favorite = (props) => {
  const favoriteEps = props.favoriteEpisode.map(favEpisode => {
    console.log(favEpisode);
    return(
      <SingleEpisode
        key = {favEpisode.id}
        title = {favEpisode.title}
        video = {favEpisode.video}
        air = {favEpisode.air}
        episode = {favEpisode.episode}
      />
    )
  })
  return(
    <div className="favorites">
      {favoriteEps}
    </div>
  )
}

export default Favorite
