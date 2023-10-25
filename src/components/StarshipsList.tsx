import { useEffect, useState } from "react"


const StarshipsList = () => {
    //useState para meter en array listado de starships
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/starships/")
            .then((response) => response.json())
            .then((data) => setStarships(data.results))
    }, [])
    return (
        <>
            <ul>
                {starships.map((el, index) => {
                    return (
                        <li key={index}>
                            <div className="card w-96 bg-success text-base-100 mx-auto mt-2">
                                <div className="card-body items-start px-1 py-1 mx-2">
                                    <h2 className="card-title text-start">{el.name}</h2>
                                    <p className="">{el.model}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default StarshipsList