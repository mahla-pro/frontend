import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'


const Add = () => {

    const [cars,setCars] = useState({
      title:"",
      description:"",
      price: null,
      cover:""

    });

    const navigate = useNavigate();

    const handleChange =(e) =>{
        setCars((prev) => ({...prev, [e.target.name] : e.target.value}))

    }


    const handleClick = async(e) =>{
        e.preventDefault();
        try{
          const res = await  axios.post("http://localhost:5000/cars" , cars)
          console.log(res)
          navigate("/");
          toast.success(res.data , {
              position: "top-right",
              autoClose: 5000,
              closeOnClick; true,
              pauseOnHover: true,
              theme: "light"
          })
        }
        catch(err){
            console.log(err)

        }

    }

    return (
        <div className='container'>
            <div className='form'>
                <h1>  افزودن ماشین جدید </h1>
                <input type="text"  placeholder='عنوان'  onChange={handleChange}   name='title' />
                <input type="text"  placeholder='درباره'   onChange={handleChange}  name='description'/>
                <input type="number"  placeholder='قیمت'    onChange={handleChange} name='price' />
                <input type="text"  placeholder='لینک عکس'  onChange={handleChange}  name='cover' />
                <button onClick={handleClick}>افزودن ماشین</button>
            </div>
            
        </div>
    );
}

export default Add;
