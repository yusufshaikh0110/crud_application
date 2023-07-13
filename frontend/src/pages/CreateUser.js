import React, { useState, } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, phone };
    await axios.post('http://localhost:8080/api/v1/createUser', userData)
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))

    //   try {
    //     if (user) {
    //       await axios.put(`http://localhost:8080/api/v1/updateUser/${user.id}`, userData);
    //       console.log('User updated successfully');
    //     } else {
    //       await axios.post('http://localhost:8080/api/v1/createUser', userData);
    //       console.log('User created successfully');
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
  };

  return (
    <div className='container justify-content-center align-items-center'>
      <form onSubmit={handleSubmit}>
        <h1>Add User</h1>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input type="text" className="form-control" id="exampleInputName" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="">Phone</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
