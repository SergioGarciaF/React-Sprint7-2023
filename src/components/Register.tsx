import axios from "axios";
import { setUser } from "../store/slices";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const initialState = {
        email: '',
        username: '',
        password: ''
    };

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/users', formData, {
                headers: { 'Content-type': 'application/json' }
            });
            console.log(response.data);
            dispatch(setUser(formData))
            alert('Registrado correctamente')
            navigate('/home')
            setFormData(initialState);
        } catch (error) {
            alert('Email ya registrado, intenta con otro email')
            setFormData(initialState);
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
                    <h1 className="text-3xl font-roboto mb-5 text-accent">Formulario de Registro</h1>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm text-accent font-roboto" htmlFor="email">Email</label>
                        <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Email" value={formData.email} onChange={e => handleChange(e)} />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm text-accent font-roboto" htmlFor="username">Nombre de usuario</label>
                        <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="Nombre de usuario" value={formData.username} onChange={e => handleChange(e)} />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm text-accent font-roboto" htmlFor="password">Contraseña</label>
                        <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Contraseña" value={formData.password} onChange={e => handleChange(e)} />
                    </div>
                    <input className="w-full px-4 py-2  font-roboto bg-secondary rounded-full hover:bg-accent focus:outline-none focus:shadow-outline" type="submit" value="Sign Up"></input>
                </form>
            </div>
        </>
    )
}



export default Register