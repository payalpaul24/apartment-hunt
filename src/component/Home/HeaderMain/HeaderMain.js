import React from 'react';
import './HeaderMain.scss';

const HeaderMain = () => {
    return (
        <main className="header-main pt-5 mt-2">
            <div className="text">
                <div className="" style={{marginTop:'150px'}}>
                    <h1 className="mb-4 text-white text-center">FIND YOUR HOUSE RENT</h1>
                    <div className="form-group d-flex justify-content-center mt-3">
                        <input style={{width:'400px',height:'45px'}} type="search" placeholder="Search ... " className="form-control" />
                        <button className="btn ml-2" type="button" id="button-addon2">
                            Find Now
						</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;