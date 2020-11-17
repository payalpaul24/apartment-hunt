import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import fakeData from '../../../fakedata';
import Navbar from '../Navbar/Navbar';
import './Housedetails.scss';


const HouseDetails = () => {
    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;

    const history = useHistory();
    const { id } = useParams();

    const houseList = fakeData.find((name) => name.id);
    const { name, img, price } = houseList;

    const { register, handleSubmit, errors } = useForm();
    const formRef = useRef();

    const onSubmit = data => {
        fetch('https://pure-sands-24426.herokuapp.com/addHouseBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                history.push("/myRent");
            }
        })
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="houseDetails">
                <div className="text text-white text-center">
                    <h3 className="mt-5">{name} </h3>
                </div>
            </div>

            <div className="row container mt-5 d-flex justify-content-center house pb-5">
                <div className="col-md-7">
                    <img className="w-100" src={img} alt="" />
                    <div className="d-flex justify-content-between color mt-2">
                        <h4>{name} </h4>
                        <h4>{price} </h4>
                    </div>
                    <div className="mt-4">
                        <div className>
                            <h4 className="color">Price Details -</h4>
                            <div className="text-secondary mt-3">
                                <p>Rent/Month:$550(negotiable)</p>
                                <p>service Charge: 8000/= tk per month, subject to change</p>
                                <p>security deposit: 3 months rent Flat</p>
                                <p>Release Policy: 3 months earlier notice required</p>
                            </div>
                        </div>
                        <div>
                        <h4 className="color">Property Details </h4>
                        <div className="mt-3 text-secondary">
                        <p>Address & Area: Rangs Malancha, House-68, Road-6A(Dead End Road) </p>
                        <p>Flat Size: 300 Sq Feet</p>
                        <p>Floor: A5(5th Floor)</p>
                        <p>Room category: 3 large bedRooms with varandas</p>
                        <p>Drawing, Dining & family living room, Highly Decirated Kitchen</p>
                        <p>facilities: 1 modern lift,All Modern Amenities & Semi Furnished</p>
                        <p>Additional facilities: Electricity with generator</p>
                        <p>Cc Camera</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <form style={{ backgroundColor: '#ccc' }} className=" p-3 ml-5" ref={formRef} onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group">
                            <div className="">
                                <input type="text" ref={register({ required: true })} name="name" className="form-control w-100" placeholder="Full Name" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>

                        <div className="form-group">

                            <div className="">
                                <input type="number" ref={register({ required: true })} name="phone" className="form-control w-100" placeholder="Phone No." />
                                {errors.phone && <span className="text-danger">This field is required</span>}

                            </div>
                        </div>

                        <div className="form-group">

                            <div className="">
                                <input type="email" ref={register({ required: true })} name="email" className="form-control w-100" placeholder="Email Address" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>


                        <div className="form-group">

                            <div className="">
                                <textarea type="text" ref={register({ required: true })} name="msg" className="form-control w-100" cols="22" rows="4" placeholder="Message"></textarea>
                                {errors.msg && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>


                        <div className="">
                            <button type="submit" class="btn btn-success w-100" >Request Booking</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default HouseDetails;