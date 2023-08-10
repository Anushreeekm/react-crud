import React, { useState } from "react";
import Fireapp from "../../Config/firebaseConfig";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

function Register(props) {
    const [reg,setReg] = useState({
        name: "",
        user: "",
        pass: ""
    })
    const navigate = useNavigate() // navigate to other component

    const readValue = (event) => {
        const { name, value } = event.target
        setReg({...reg, [name]:value })
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(`new register =`, reg);
        await Fireapp.auth().createUserWithEmailAndPassword(reg.user,reg.pass)
        .then(res => {
            let ref = Fireapp.database().ref().child('users')
            const data = {
                id: res.uid,
                name: reg.name,
                email: reg.user,
                image: res.user.photoURL
            };

            ref.child(res.uid).set(data)
                .then(out => {
                    toast.success('User registered successfully')
                    navigate('/login')
                }).catch(err => toast.error(err.message))
            }).catch(err => {
                    let errCode = err.code;
                    let errMsg = err.message;

                    if(errCode === 'auth/weak-password') {
                        toast.warning(`The password is too weak.`);
                    } else if(errCode === 'auth/email-aldready-in-use') {
                        toast.warning(`This ${reg.user} is aldready registered`)
                    } else {
                        toast.error(errMsg)
                    }
        })
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-primary">Register</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" name="name" id="name"value={reg.name} onChange={readValue}  className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="user">Username</label>
                                    <input type="email" name="user" value={reg.user} onChange={readValue}  id="user" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" name="pass" id="pass" value={reg.pass} onChange={readValue} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Register" className="btn btn-warning" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register