import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Starships from '../components/Starships'
import StarshipsDetails from '../components/StarshipsDetails'


const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/starships/:name' element={<StarshipsDetails/>}/>
                <Route path='/starships' element={<Starships />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>

    )
}

export default MyRouter