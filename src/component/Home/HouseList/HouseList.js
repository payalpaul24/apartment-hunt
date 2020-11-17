import React from 'react';
import { Link} from 'react-router-dom';
import bath from '../../../logos/bath.png';
import bed from '../../../logos/bed.png';
import loc from '../../../logos/loc.png';


const HouseList = ({housesData}) => {

    return (
        <div className='col-md-4 card-group mb-4'>
            <div class="card">
                <img src={`data:image/png;base64,${housesData.src}`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{housesData.title}</h5>
                    <p class="card-text">
                        <img
                            height="20px"
                            className='mr-2'
                            src={loc}
                            alt="location-icon" />
                        {housesData.loc}
                    </p>
                    <div className='d-flex mb-2'>
                        <p class="card-text">
                            <img
                                height="20px"
                                className='mr-2'
                                src={bed}
                                alt="bed-icon" />
                            {housesData.bedroom}
                            Bedrooms
                        </p>
                        <p class="card-text ml-5">
                            <img
                                height="20px"
                                className='mr-2'
                                src={bath}
                                alt="bath-icon" />
                            {housesData.bath}
                            Bathrooms
                        </p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2
                            style={{ color: '#275A53' }}
                            className='font-weight-bold'
                        >${housesData.price}</h2>
                        <Link to="/login">
                        <button className='btn text-white px-4 py-2'>
                            View Details
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseList;