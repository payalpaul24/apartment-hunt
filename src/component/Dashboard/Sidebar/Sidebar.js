import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logos/Logo.png';
import bed from '../../../logos/bed.png';
import plus from '../../../logos/plus.png';
import home from '../../../logos/home.png';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar w-25 h-100 p-4">
	
			<Link to="/">
				<img src={logo} alt="" style={{ width: '100px', height: '50px' }} />
			</Link>
			<div className="sidebar-buttons pt-5">
				<Link to="/bookingList" className="btnn">
					<img style={{ width: '20px', height: '20px' }} src={bed} alt=""/>
					<span>Booking List</span>
				</Link>
				<Link to="/addRentHouse" className="btnn mt-3">
					<img style={{ width: '20px', height: '20px' }} src={plus} alt=""/>
					<span>Add Rent House</span>
				</Link>
				<Link to="myRent" className="btnn mt-3">
                <img style={{ width: '20px', height: '20px' }} src={home} alt=""/>
					<span>My Rent</span>
				</Link>
			</div>
		</div>
    );
};

export default Sidebar;