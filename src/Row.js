import React,{useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer"
const base_url = "https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl,islargeRow}) {

    const[movies,setMovies] =useState([]);
    const [trailerUrl,setTrailerUrl] =useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request; 
        }
        fetchData();
    }, [fetchUrl ]);    

    const opts ={
        height : "390",
        width :  "100%",
        playerVars:{
            autoplay: 1,
        }
    }

    console.table(movies);

    // const handleClick =(movie) =>{
    //     if(trailerUrl){
    //         setTrailerUrl('');
    //     }
    //     else{ 
    //         movieTrailer(movie?.name || "")  
    //         .then( (url) => {
    //             const urlParams = new URLSearchParams(new URL(url).search);
    //             setTrailerUrl(urlParams.get('v'));
    //         })
    //         .catch((error)  =>console.log(error));
    //     }

    // };
    const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          let detail = await axios.get(
            `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
          );
          setTrailerUrl(detail.data.results[0]?.key);
        }
      };
    

    return (
        <div className ="row">
            <h2>{title}</h2>
            <div className ="row_posters">
                {/*movie is an object*/}
                {movies.map(movie=>(
                    <img 
                    key ={movie.id}
                    onClick = {() => handleClick(movie)} 
                    className  ={`row_poster ${ islargeRow && "row_posterLarge"}`}
                    src ={`${base_url}${islargeRow? movie.poster_path: movie.poster_path}`}
                    alt ={movie.name}/>
                ))}
            </div>
            {trailerUrl && <Youtube videoId= {trailerUrl} opts ={opts}/>}
        </div>
    )
}

export default Row
