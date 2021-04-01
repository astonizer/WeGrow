import React from 'react';

function Signup() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitPost = () => {
        Axios.post('http://localhost:3001/api/signup', {
            username: username,
            email: email,
            password: password,
        })
        console.log("submited");
    }

    return (
        <div>
            <h1>Signup</h1>
            <form>
            <div class="form-group row">
                <label for="username" class="col-sm-2 col-form-label">username</label>
                <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="username" value="username">
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
            </div>
            </form>            
        </div>
    )
}

export default Signup;
