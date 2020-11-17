import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logos/Logo.png';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="container-fluid mb-2">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand ml-3" href="/"><img style={{ width: '100px', height: '50px' }} src={logo} alt="" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-5 ml-auto">
                        <li class="nav-item active mr-3">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link text-dark" href="/">About</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link text-dark" href="/">Service</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link text-dark" href="/">Concerns</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link text-dark" href="/">Event</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link text-dark" href="/">Contact</a>
                        </li>
                        <Link className="nav-link" to="/login">
                        <li className="nav-item mr-3">
                            <button className="btn">Login</button>
                        </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;