import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const animeObject = this.props.anime; 

    console.log(this.props.anime);
    console.log(animeObject);

    return <div className="anime-list">
      {/* Map the anime list recieved through props and pass the details to the Animecard component*/}
      {animeObject.map(
        (data, index) => (<AnimeCard key={index} anime={data}/>)
      )}
      
    </div>;
  }
}

export default AnimeList;
