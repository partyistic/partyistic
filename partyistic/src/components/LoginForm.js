import { useAuth } from "../Auth"

export default function LoginForm(props) {
    const { login } = useAuth();
    function onLogin(event) {
        event.preventDefault();
        let username = event.target.username.value
        let password = event.target.password.value
        login(username, password)
    }

    return (

        <form onSubmit={onLogin} className="grid justify-center w-1/3 grid-rows-3 p-5 mx-auto font-semibold text-center border-2 border-solid rounded-lg m-9 my-7">
            <div className="grid grid-rows-2 ">
                <label >Username</label>
                <input type="text" name="username"  required className=""/>
            </div>
            <div className="grid grid-rows-2 ">
                <label >Password</label>
                <input type="password" name="password" required className="w-full" />
            </div>
            <div>
                <button className="w-full p-2 mt-5 rounded">Login</button>
            </div>
        </form>
    )
}
