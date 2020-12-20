import React from 'react';
import data from '../../fakeData/MovieData'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
const Home = () => {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/getMovie')
            .then(res => res.json())
            .then(data => {
                setMovieList(data)
                sessionStorage.setItem('movie', JSON.stringify(data))
            })
    }, [movieList])
    return (
        <div className="container">
            {
                movieList.map(movie => {
                    return (
                        <div className="row mt-2" key={movie.id}>
                            <div className="col-md-4">
                                <Link to={`booking/${movie.id}`}>
                                    <img className="" style={{ width: '100%', height: '330px' }} src={movie.img} alt="" />
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <p className="text-danger">Title: {movie.title}</p>
                                <p>Director: {movie.director}</p>
                                <p>Cast: {movie.cast}</p>
                                <p>Release Date & Time: {movie.release} ({movie.time})</p>
                                <p> Description: {movie.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Home;