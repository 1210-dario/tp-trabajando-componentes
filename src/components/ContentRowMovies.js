import React from 'react';
import SmallCard from './SmallCard';

const data = [
    {
        color: 'primary',
        title: 'Movies in Data Base',
        valor: 21,
        icono: 'fa-film',
    },
    {
        color: 'success',
        title: 'Total awards',
        valor: 79,
        icono: 'fa-award',
    },
    {
        color: 'warning',
        title: 'Actors quantity',
        valor: 49,
        icono: 'fa-user',
    }
]

function ContentRowMovies() {
    return (

        <div className="row">

            {data.map((item, i) => {

                return <SmallCard {...item} key={i} />

            })}

        </div>
    )
}

export default ContentRowMovies;