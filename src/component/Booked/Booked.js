import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../fakeData/MovieData';
import AirlineSeatLegroomReducedIcon from '@material-ui/icons/AirlineSeatLegroomReduced';
import { useState } from 'react';
import { useEffect } from 'react';
import img from '../../image/1.jpg'
const Booked = () => {
    const { id } = useParams();
    // const [movieList, setMovieList] = useState([])
    const movie = JSON.parse(sessionStorage.getItem('movie'))
    // useEffect(() => {
    //     fetch('http://localhost:4000/getMovie')
    //         .then(res => res.json())
    //         .then(data => setMovieList(data))
    // }, [0])
    console.log(movie)
    let selectMovie = movie.find(movie => movie.id == id)
    console.log(selectMovie)
    const recurse = (count) => {
        if (count === 10) {
            return;
        }
        recurse(count + 1)
        console.log('Helo')
        return;
    }

    const handleChange = (id) => {
        fetch('http://localhost:4000/seatId', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ seatid: id, _id: selectMovie._id })
        })
        console.log(id)
    }

    return (
        <div className="container">
            <div className="row mt-2" key={selectMovie.id}>
                <div className="col-md-4">
                    <img className="" style={{ width: '100%', height: '330px' }} src={img} alt="" />
                </div>
                <div className="col-md-6">
                    <p className="text-danger">Name: {selectMovie.title}</p>
                    <p>Director: {selectMovie.director}</p>
                    <p>Cast: {selectMovie.cast}</p>
                    <p>Release Date & Time: {selectMovie.release} ({selectMovie.time})</p>
                    <p>Description: {selectMovie.description}</p>
                </div>
            </div>

            <div className="row w-50">
                {
                    selectMovie.seat.map(seat => 
                        {
                        return (
                            <div className={`col-md-2 mt-2`}
                                key={seat.seatNo}>
                                <button
                                    className="btn btn-danger "
                                    onClick={() => handleChange(seat.seatNo)}
                                // disabled={seat.count - 1}
                                ><AirlineSeatLegroomReducedIcon />
                                </button>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
};

export default Booked;