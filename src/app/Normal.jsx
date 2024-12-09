import React from 'react'
import './Hero.css'
import people from '../assets/people.png'
import right1 from '../assets/right4.png'
import { MdStart } from "react-icons/md";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
const Normal = () => {
    
  return (
    <div className='hero-out'>
        <div className="hero-left">
            {load && <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                    >
                    {/* <CircularProgress color="inherit" /> */}
                    <div className="pyramid-loader1">
                    <div className="wrapper1">
                        <span className="side1 side11"></span>
                        <span className="side1 side21"></span>
                        <span className="side1 side31"></span>
                        <span className="side1 side41"></span>
                        <span className="shadow1"></span>
                        
                    </div>  
                
                    </div>
                </Backdrop>}
            <h1 className="head">Let&apos;s Protect a Seamless Food Supply Chain Together !</h1>  
            <h2 className="sub-head">
            The food supply chain is a complex network that requires <span className='picc'>meticulous</span> coordination and management. From sourcing and production to distribution and retail, each step plays a crucial role in ensuring the <span className='picc'>quality</span> and <span className='picc'>availability</span> of food products. Leveraging advanced technology and strategic partnerships, we streamline these processes to <span className='picc'>enhance efficiency</span>, reduce waste, and meet consumer demands effectively.
            </h2>
            
            <div className="hero-leftdown">
                    
               
            </div>  
            <div className='hero-leftmid'>
                <img src={people} alt="alt" />
                <h6> More than <span className='picc'>16,000</span> people have accessed our scanner in last 24 hours</h6>
            </div>      
        </div> 
        <div className="hero-right">
            
            <img src={right1} alt="alt" />
            
        </div>
    </div>
  )
}

export default Normal