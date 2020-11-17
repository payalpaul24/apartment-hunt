import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const MyRent = () => {

    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;

    return (
        <div className="d-flex col-sm-12">
            <Sidebar></Sidebar>
            <div style={{ marginTop: '120px', height: '700px', width: '100%', background: '#F4F7FC' }} className="service-list-admin admin-content p-3">

                <div className="d-flex justify-content-between">
                    <h5>Add Rent House</h5>
                    <button className="btn btn-dark"> {loggedInUser.name} </button>
                </div>
                <table class="table table-striped bg-white">
                    <thead>
                        <tr style={{ backgroundColor: '#ccc' }}>
                            <th scope="col">No</th>
                            <th scope="col">House name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <th scope="row">1</th>
                            <td>Washington Avenue</td>
                            <td>$194</td>
                            <td className="btn p-1">View Details</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Gorgeous House</td>
                            <td>$394</td>
                            <td className="btn p-1">View Details</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div >
    );
};

export default MyRent;