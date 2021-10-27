import React, {Fragment} from 'react';
import {useDispatch} from 'react-redux';
import {login, logout} from '../features/user';
function Login() {
    const dispatch = useDispatch();
    return (
        <Fragment>
            <div>
                <button onClick={() => {
                    dispatch(login({
                        name:"Sailaja",
                        age:40,
                        email:"sailaja@gmail.com"
                    }));
                }}>Login</button>
                <button onClick={() => {
                    dispatch(logout());
                }}>Logout</button>
            </div>
        </Fragment>
    );
}

export default Login;
