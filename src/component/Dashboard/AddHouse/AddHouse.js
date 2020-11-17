import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddHouse = () => {

    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;

    const formRef = useRef();

    const { register, handleSubmit, errors } = useForm();
    const [file, setFile] = useState(null);

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('file', file)
        formData.append('title', data.title)
        formData.append('price', data.price)
        formData.append('loc', data.loc)
        formData.append('bedroom', data.bedroom)
        formData.append('bath', data.bath)

        fetch('https://pure-sands-24426.herokuapp.com/addRentHouse', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert('Good Job', 'New service created successfully!', 'success')
                }
            })
            .catch(error => {
                alert('Bad Request', 'Something went wrong', 'error');
            })
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    return (
        <div className="d-flex col-sm-12">
            <Sidebar></Sidebar>
            <div className="" style={{ height: '700px', width: '100%', marginTop: '100px' }}>
                <div className="d-flex justify-content-between">
                    <h4 className="">Add Rent House</h4>
                    <button className="btn btn-dark"> {loggedInUser.name} </button>
                </div>
                <div className="d-flex mt-5 p-5" style={{ height: '400px', width: '100%', background: '#F4F7FC' }}>

                    <form className="bg-white h-75 w-100 p-3" ref={formRef} onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group">
                            <div className="form-row">
                                <div className="col">
                                    <label className="text-dark" htmlFor="">Service Title</label>
                                    <input type="text" ref={register({ required: true })} name="title" className="form-control w-100" placeholder="Enter title" />
                                    {errors.title && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="col">
                                    <label className="text-dark" htmlFor="">Price</label>
                                    <input ref={register({ required: true })} className="form-control w-100" placeholder="price" type="number" name="price" id="" />
                                    {errors.price && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-row">
                                <div className="col">
                                    <label className="text-dark" htmlFor="">Location</label>
                                    <input type="text" ref={register({ required: true })} name="loc" className="form-control w-100" placeholder="Enter location" />
                                    {errors.loc && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="col">
                                    <label className="text-dark" htmlFor="">No Of Bedrooms</label>
                                    <input ref={register({ required: true })} className="form-control w-100" placeholder="bedrooms" type="number" name="bedroom" id="" />
                                    {errors.bedroom && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                        </div>


                        <div className="form-group">
                            <div className="form-row">
                                <div className="col">
                                    <label className="text-dark" htmlFor="">No Of Bathroom</label>
                                    <input type="number" ref={register({ required: true })} name="bath" className="form-control w-100" placeholder="bathroom" />
                                    {errors.bath && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="col">
                                    <label className="text-dark" htmlFor="">Thumbnail</label>
                                    <input ref={register({ required: true })} onChange={handleFileChange} className="form-control w-50" style={{ backgroundColor: '#DEFFED' }} placeholder="upload a Project" type="file" name="uplaod" id="" />
                                    {errors.upload && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                        </div>

                        <div style={{ float: 'right' }} className="">
                            <button type="submit" class="btn btn-success" >Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddHouse;