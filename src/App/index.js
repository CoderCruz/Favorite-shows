import React, { Component } from "react"
import "./style.css"
import Nav from "../Components/Nav"
import Episodes from "../Components/Episodes"
import Favorite from "../Components/Favorite"
import Footer from "../Components/Footer"
import axios from "axios"
import { Route } from 'react-router-dom'
const URL = "https://api.jikan.moe/v3/anime/20/episodes"



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      episodes: [],
      favorites: []
    }

  }

  getDataUsingAxios = async () => {
    const response = await axios.get(URL)
    const episodes = response.data.episodes
    this.setState({
      episodes: episodes
    })
  }

addFavorite = (obj) => {
  this.setState({
    favorites: [...this.state.favorites, obj]
  })

}

componentDidMount() {
  this.getDataUsingAxios()
}


render() {
  console.log(this.state.favorites);
    return(
      <div className="App">
        <Nav />
        <Route exact path='/' render={() =>
           <Episodes
             addFavorite = {this.addFavorite}
             episodeList = {this.state.episodes}
           />}
        />
        <Route path ="/Favorite" render ={() =>
          <Favorite
            favoriteEpisode = {this.state.favorites}
          />}
        />
        <Footer />
      </div>
    )
  }
}

export default App
