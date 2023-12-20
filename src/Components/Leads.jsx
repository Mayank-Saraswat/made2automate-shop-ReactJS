import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

const Leads = () => {
    return (
        <Fragment>
            <div className=' marginLeft25 width95'>
                <Link to="/"><button className='backBtn'>&#8592;</button></Link>
                <text className='marginLeft45 bold fontSize20'>Leads</text>
            </div>
            <div className='marginLeft25 margin2 width95 padding1 boxShadow'>
                <text className='fontSize15 bold'>Rakesh Verma</text>
                <text className='fontSize13 alignRight'>Contact No: <b>+919898989898</b></text>
                <p className='fontSize13'>I need metal sensor. Is it availabe now. Please contact me.<br />
                    Quantity : <text className='blueColor bold'>120</text> pieces
                </p>
            </div>
            <div className='marginLeft25 margin2 width95 padding1 boxShadow'>
                <text className='fontSize15 bold'>Mayank Saraswat</text>
                <text className='fontSize13 alignRight'>Contact No: <b>+919898989898</b></text>
                <p className='fontSize13'>I want magnetic sensors for demonstration of one of my project. If it is available then please contact me.<br />
                    Quantity : <text className='blueColor bold'>140</text> pieces
                </p>
            </div>
            <div className='marginLeft25 margin2 width95 padding1 boxShadow'>
                <text className='fontSize15 bold'>Ankit Verma</text>
                <text className='fontSize13 alignRight'>Contact No: <b>+919898989898</b></text>
                <p className='fontSize13'>I want magnetic sensors for demonstration of one of my project. If it is available then please contact me.<br />
                    Quantity : <text className='blueColor bold'>100</text> pieces
                </p>
            </div>
            <div className='marginLeft25 margin2 width95 padding1 boxShadow'>
                <text className='fontSize15 bold'>Vinay Tripathi</text>
                <text className='fontSize13 alignRight'>Contact No: <b>+919898989898</b></text>
                <p className='fontSize13'>I want magnetic sensors for demonstration of one of my project. If it is available then please contact me.<br />
                    Quantity : <text className='blueColor bold'>150</text> pieces
                </p>
            </div>
        </Fragment>
    )
}

export default Leads