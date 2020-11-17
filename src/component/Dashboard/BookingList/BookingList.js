import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {

    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('https://pure-sands-24426.herokuapp.com/getHouseBooking', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [])

    return (
        <div className="d-flex col-sm-12">
            <Sidebar></Sidebar>
            
            <div style={{ marginTop: '120px', height: '700px', width: '100%', background: '#F4F7FC' }} className="service-list-admin admin-content p-3">
            <button className="btn float-right"> {loggedInUser.name} </button>
                    <h5>Service List</h5>
                <table className="table table-striped">
                    <thead>
                        <tr className="" style={{backgroundColor:'#ccc'}}>
                            <th className="name">Name</th>
                            <th className="email">Email ID</th>
                            <th className="title">Phone No</th>
                            <th className="description">Message</th>
                            <th className="status">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {booking.map((bookings) => (
                            <tr key={bookings._id}>
                                <td className="name">{bookings.name}</td>
                                <td className="email">{bookings.email}</td>
                                <td className="title">{bookings.phone}</td>
                                <td className="description">{bookings.msg}</td>
                                <td className="status">
                                    <select className="border-0 text-danger" name="status">
                                        <option value="pending">Pending</option>
                                        <option value="done">Done</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default BookingList;