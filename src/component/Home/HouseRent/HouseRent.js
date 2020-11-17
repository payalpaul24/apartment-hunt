import React, { useState } from 'react';
import fakeData from '../../../fakedata';

// import houseOne from '../../../images/houseOne.png';
// import houseSix from '../../../images/houseSix.png';
// import houseFive from '../../../images/houseFive.png';
// import houseFour from '../../../images/houseFour.png';
// import houseTwo from '../../../images/houseTwo.png';
// import houseThree from '../../../images/HouseThree.png';
import HouseList from '../HouseList/HouseList';


const HouseRent = () => {
    const houseData = fakeData;

    // const houseData = [
    //     {   
    //         id: 1,
    //         name: 'Washington Avenue',
    //         details: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
    //         img: houseOne,
    //         location: 'kandirpar H/S, Cumilla',
    //         bedrooms: '3 Bedrooms',
    //         bathrooms: '2 bathrooms',
    //         price: '$194'
    //     },
    //     {   
    //         id: 2,
    //         name: 'Family Apartment Three',
    //         details: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    //         img: houseTwo,
    //         location: 'Nasirabad H/S, Chittagong',
    //         bedrooms: '3 Bedrooms',
    //         bathrooms: '2 bathrooms',
    //         price: '$294'
    //     },
    //     {   
    //         id: 3,
    //         name: 'Gorgeous House',
    //         details: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    //         img: houseThree,
    //         location: 'Mirpur H/S, Dhaka',
    //         bedrooms: '3 Bedrooms',
    //         bathrooms: '2 bathrooms',
    //         price: '$394'
    //     },
    //     {   
    //         id: 4,
    //         name: 'Luxury Villa',
    //         details: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    //         img: houseFour,
    //         location: 'Banani H/S, Dhaka',
    //         bedrooms: '3 Bedrooms',
    //         bathrooms: '2 bathrooms',
    //         price: '$334'
    //     },
    //     {   
    //         id: 5,
    //         name: 'Epic Huda Palacio',
    //         details: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    //         img: houseFive,
    //         location: 'Jawtola H/S, Cumilla',
    //         bedrooms: '3 Bedrooms',
    //         bathrooms: '2 bathrooms',
    //         price: '$284'
    //     },
    //     {   
    //         id: 6,
    //         name: 'Resort Avenue',
    //         details: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    //         img: houseSix,
    //         location: 'Gulshan H/S, Dhaka',
    //         bedrooms: '3 Bedrooms',
    //         bathrooms: '2 bathrooms',
    //         price: '$354'
    //     }

    // ]

    const [addhouse, setAddHouse] = useState([]);

    fetch('https://pure-sands-24426.herokuapp.com/addRentHouseShow')
    .then(res => res.json())
    .then(data => setAddHouse(data))



    return (
        <div className='container mb-5 pb-3 pt-3'>
            <div className='house-gallery-intro d-flex align-items-center flex-column'>
                <p style={{color:'$color'}}>House Rent</p>
                <h3 style={{color:'$color'}} className='mb-5 text-center font-weight-bold'>
                    Discover the latest Rent <br/>
                    available today.
                </h3>
            </div>

            <div className='row'>
            {/* {
                houses.map(house => <House house={house} key={house._id}/>)
            } */}
            {
                addhouse.map(housesData => <HouseList housesData={housesData}></HouseList> )
            }
            </div>
        </div>
    );
};

export default HouseRent;