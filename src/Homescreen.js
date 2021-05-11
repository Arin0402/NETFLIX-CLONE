import React from "react"
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';
import Nav from './Nav';

function Homescreen() {
    return (
        <div>
             <Nav/>
            <Banner/>
            <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} islargeRow ={true}/>
            <Row title = " TRENDING NOW" fetchUrl ={requests.fetchTrending}/>
            <Row title = " TOP RATED" fetchUrl ={requests.fetchTopRated}/>
            <Row title = " ACTION MOVIES" fetchUrl ={requests.fetchActionMovies}/>
            <Row title = "COMEDY MOVIES" fetchUrl ={requests.fetchComedyMovies}/>
            <Row title = "HORROR MOVIES" fetchUrl ={requests.fetchHorrorMovies}/>
            <Row title = " ROMANCE MOVIES" fetchUrl ={requests.fetchRomanceMovies}/>
            <Row title = " DOCUMENTARIES" fetchUrl ={requests.fetchDocumentaries}/>
            
        </div>
    )
}

export default Homescreen
