import React, { useEffect, useState } from 'react';
import '../App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/getUsers')
            .then(result => {
                setUsers(result.data)
            }).catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/v1/deleteUser/${id}`)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className='container justify-content-center align-items-center'>
                <h1>User List</h1>
                <Link to="/create" className='btn btn-dark'>Add User</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td> {user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-secondary mr-1'>Edit</Link>
                                    <button className='btn btn-danger' onClick={(e) => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table >
            </div >
        </>
    );
};

export default UserList;

