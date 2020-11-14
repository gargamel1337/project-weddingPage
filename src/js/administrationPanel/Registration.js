import React, {useState} from 'react';
import foto from "../../images/kwiat.jpg";
import fakeAPI from "./API/fakeAPI";
import MainPanel from "./MainPanel";


const Registration = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(false);
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const temErrors = [];

        if (username.length <= 2) {
            temErrors.push("Email must be at least 3 characters");
        }
        if (password.length <= 4) {
            temErrors.push("Password must be at least 5 characters")
        }
        if (temErrors.length > 0) {
            setErrors(temErrors);
            return false;
        }


        fakeAPI.login({
            username,
            password
        }).then((data) => {
            setUser(data);
            setErrors([]);
        }).catch((error) => {
            setErrors([error])
        })
    }

    if (user) {
        return (
            <MainPanel/>
        )
    }


    return (
        <div className="container_registration" style={{backgroundImage: `url(${foto})`}}>
            <form className="first_container_registration" onSubmit={handleSubmit}>
                <div className="form-group registration">
                    <label htmlFor="exampleInput">User</label>
                    <input type="text" className="form-control" id="exampleInput"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}/>

                </div>
                <div className="form-group registration Password1">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="form-group form-check registration">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {errors.map((error) => <div key={error} className="alert alert-danger">{error}</div>)}
        </div>
    );
};

export default Registration;