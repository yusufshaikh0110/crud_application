import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {

    const { id } = useParams()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/getUser/${id}`)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setPhone(result.data.phone)
            }).catch(err => console.log(err))
    }, [])

    const Update = async (e) => {
        e.preventDefault();
        const userData = { name, email, phone };
        await axios.put(`http://localhost:8080/api/v1/updateUser/${id}`, userData)
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container justify-content-center align-items-center'>
            <form onSubmit={Update}>
                <h1>Add User</h1>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} className="form-control" id="exampleInputName" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} className="form-control" id="exampleInputEmail1" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <input type="text" value={phone} className="form-control" id="exampleInputPassword1" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-warning">Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;
