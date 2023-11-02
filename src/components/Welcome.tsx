

import { Link } from 'react-router-dom'
import Header from './Header'

const Welcome = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col items-center mt-20'>
                <div className='text-accent justify-center  font-roboto'> <h1><strong>¡Bienvenidos a Star Wars, la galaxia épica que todos amamos! Explora personajes icónicos, emocionantes batallas y secretos de la Fuerza. ¡Únete a la aventura!</strong></h1></div>
                <Link to="/starships"><button className="btn btn-secondary mt-6">ENTRAR</button></Link>
            </div>
        </>
    )
}

export default Welcome