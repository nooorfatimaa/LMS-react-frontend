import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';import './style.css';
import Header from './navbar';
import Footer from './footer';

const View = () => {
    return(
        <div>
            <Header/>
            <br/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default View;