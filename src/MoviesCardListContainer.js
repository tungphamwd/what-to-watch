import { useState, useEffect } from "react"
import axios from "axios"
import MoviesCardList from "./MoviesCardList"
const MoviesCardListContainer = () => {
    const [movies, setMovies] = useState({})
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}`)
        .then((respone) => {
            setMovies(respone.data.results)
        })
    }, [])
    return (
        <MoviesCardList movies={movies} />
    )
}

export default MoviesCardListContainer;