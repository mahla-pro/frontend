import axios from 'axios';
import React, {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cars = () => {
    const [cars,setCars] = useState([]);

    useEffect(() => {

    
        fetchAllCars()
    } ,[])

    const handleDelete = async(id) =>{
        try{
          const res =  await axios.delete("http://localhost:5000/cars" + id)
          toast.success(res.data , {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "light"
        })
        fetchAllCars()
           
        }catch(err) {
            console.log(err);
        }
    }


    const fetchAllCars = async() => {
        const res = await axios.get("http://localhost:5000/cars");
       setCars(res.data)

    }

    return (
        <div className='home-page'>
            <h1> فروشگاه ماشین</h1>
            <div id='car'>
              {
                  cars.map((car) =>{
                    return(
                        <div className='car'  key={car.id}>
                        <img src={car.cover}   alt="" />
                        <h2>
                          {car.title}
                        </h2>
                       <p>{car.description}</p>
                       <span>{car.price}</span>
                       <div className='btn-group'>
                           <button id="update" className='car-btn'>ویرایش</button>
                           <button id='remove' className='car-btn' onClick={handleDelete(car.id)}> حذف</button>
    
                       </div>
    
                    </div>
                    )
                  })
              }

            </div>

            <button className='home-btn' ><Link  to="/add" >افزودن ماشین جدید</Link> </button>
            
        </div>
    );
}

export default Cars;
