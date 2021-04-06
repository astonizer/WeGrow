import React from 'react';

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
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
            </form>
        </div>
    )
}

export default Login;
