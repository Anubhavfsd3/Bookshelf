import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    async function registerUser(ev) {
        ev.preventDefault();
        try{
            await axios.post('/register',{
                name,
                email,
                password,
            });
            alert('Registration successful. Now you can log in');
        } catch (e) {
            alert('Registration failed. Please try again later')
        }
    }
    return (
        <div className="mt-7 flex grow items-center justify-around p-4 mr-1">
            <div className="mb-6 mt-18 ml-12 p-9 bg-black rounded-3xl mt-3 py-7">
                <h1 className="text-5xl bg-gold p-2 text-black items-center font-bold rounded-2xl text-center ml-8 mb-5 mt-3 mr-9">Create Acccount</h1>
                <form className="max-w-md mx-auto mb-2" onSubmit={registerUser}>
                   <input type="text" 
                      placeholder='Anubhav Gajbhiye' 
                      value={name}
                      onChange={ev => setName(ev.target.value)} />
                   <input type="email" 
                      placeholder='your@email.com' 
                       value={email}
                       onChange={ev => setEmail(ev.target.value)} />
                   <input type="password" 
                      placeholder="password" 
                       value={password}
                       onChange={ev => setPassword(ev.target.value)} />
                   <button className="primary mb-3 text-xl">Register</button>
                    <div className="text-center text-1xl py-2 text-white">
                       already a member? <Link className ="underline text" to={'/login'}>Login</Link>
                    </div>
                </form>   
            </div>
        </div> 
    );
}