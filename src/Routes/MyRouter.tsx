import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Starships from '../components/Starships'
import StarshipsDetails from '../components/StarshipsDetails'
import Welcome from '../components/welcome'


const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/starships/:name' element={<StarshipsDetails/>}/>
                <Route path='/starships' element={<Starships />} />
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Welcome /> } />
            </Routes>
        </BrowserRouter>

    )
}

export default MyRouter