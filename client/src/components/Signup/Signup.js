import React from 'react';

function Signup() {

    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const submitPost = () => {
    //     Axios.post('http://localhost:3001/api/signup', {
    //         username: username,
    //         email: email,
    //         password: password,
    //     })
    //     console.log("submited");
    // }

    return (
        <div>
            <h1>Signup</h1>
            <form>
                <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label m-2">username</label>
                    <div class="col-sm-5">
                        <input type="text" class="form-control m-2" id="username" placeholder="username" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label m-2">Email</label>
                    <div class="col-sm-5">
                        <input type="text" class="form-control m-2" id="email" placeholder="email@example.com" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-sm-2 col-form-label m-2">Password</label>
                    <div class="col-sm-5">
                        <input type="password" class="form-control m-2" id="password" placeholder="Password" />
                    </div>
                </div>
                <button type="button" class="btn btn-outline-success">Success</button>
            </form>
        </div>
    )
}

export default Signup;
