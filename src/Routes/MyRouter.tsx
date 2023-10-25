import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Starships from '../components/Starships'

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/starships' element={<Starships />} />
            </Routes>
        </BrowserRouter>

    )
}

export default MyRouter