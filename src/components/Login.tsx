
import Header from './Header'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();

  const initialState = {
    email: '',
    password: ''
  }

  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/login', formData, {
        headers: { 'Content-type': 'application/json' }
      });
      console.log(response.data);
      dispatch(setUser(response.data.user))
      alert(`¡Bienvenido!`)
      navigate('/home')
      setFormData(initialState)
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <form className="p-10 bg-success rounded shadow-xl" onSubmit={e => handleSubmit(e)}>
          <div className="mb-5">
            <label className="block mb-2 text-sm text-accent font-roboto" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" value={formData.email} name='email' onChange={e => handleChange(e)} type="email" placeholder="Email" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm text-accent font-roboto" htmlFor="password">Contraseña</label>
            <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" value={formData.password} name='password' onChange={e => handleChange(e)} type="password" placeholder="Contraseña" />
          </div>
          <input className="w-full px-4 py-2  font-roboto bg-secondary rounded-full hover:bg-accent focus:outline-none focus:shadow-outline" type="submit" value="Login"></input>
        </form>
      </div>
    </>
  )
}

export default Login