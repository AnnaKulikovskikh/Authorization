import {useRef, useContext} from 'react'
import { Context } from '../Context'

export default function Login() {
    const username = useRef(null)
    const password = useRef(null)
    const {login} = useContext(Context)

    function submit(e){
        e.preventDefault()
        if (!username.current.value || !password.current.value) return null
        const userLogin = {login: username.current.value, password: password.current.value}
        login(userLogin)
    }

    return(
        <div>
            <h3>Neto Social</h3>
            <form onSubmit={submit}>
                <input placeholder='Username' type='text' ref={username} />
                <input placeholder='Login' type='text' ref={password} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
