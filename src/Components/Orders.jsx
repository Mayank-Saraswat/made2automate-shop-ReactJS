import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

const Orders = () => {
    return (
        <Fragment>
            <div className=' marginLeft25 width95'>
                <Link to="/"><button className='backBtn'>&#8592;</button></Link>
                <text className='marginLeft45 bold fontSize20'>Orders</text>
            </div>
            <div className='marginLeft25 margin2 width95 padding1 boxShadow'>
                <text className='fontSize15 bold'>IR Sensor</text>
                <p className='fontSize13'>Beam sensor is a through beam sensor which has TX and RX.<br />
                    Quantity : <text className='blueColor bold'>150</text> pieces
                </p>
            </div>
            <div className='marginLeft25 margin2 width95 padding1 boxShadow'>
                <text className='fontSize15 bold'>Metal Sensor</text>
                <p className='fontSize13'>Metal sensor is a through beam sensor which has TX and RX.<br />
                    Quantity : <text className='blueColor bold'>140</text> pieces
                </p>
            </div>
            <div className='marginLeft25 margin2 width95 padding1 boxShadow'>
                <text className='fontSize15 bold'>Analog Sensor</text>
                <p className='fontSize13'>Analog Sensor gives varying signal for change in distance and the output signal generated is 0-10VDC and 4-20mA. Analog sensor is available in the Inductive type which detects a metallic target.<br />
                    Quantity : <text className='blueColor bold'>100</text> pieces
                </p>
            </div>
            <div className='marginLeft25 margin2 width95 padding1 boxShadow'>
                <text className='fontSize15 bold'>Magnetic Sensor</text>
                <p className='fontSize13'>A magnetic sensor, also known as a magnetometer, is a device used to measure and detect magnetic fields. It operates on the principle that when a magnetic field is present, it induces a response in the sensor that can be measured and quantified.<br />
                    Quantity : <text className='blueColor bold'>150</text> pieces
                </p>
            </div>
        </Fragment>
    )
}

export default Orders