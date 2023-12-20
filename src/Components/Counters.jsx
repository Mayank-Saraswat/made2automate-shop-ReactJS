import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

const Counters = () => {
    return (
        <Fragment>
            <div className='flexRow textCenter'>
                <div className='width13 margin2 boxShadow bold'><h1 className='fontSize4 blueColor'>112</h1>Total Orders</div>
                <div className='width13 margin2 boxShadow bold'><h1 className='fontSize4 orangeColor'>152</h1>New Stocks</div>
                <div className='width13 margin2 boxShadow bold'><h1 className='fontSize4 greenColor'>100</h1>Dead Stocks</div>
                <div className='width13 margin2 boxShadow bold'><h1 className='fontSize4'>112</h1>Total Leads</div>
                <div className='width13 margin2 boxShadow bold'><h1 className='fontSize3 greyColor'>1,12,000</h1>Total Revenue</div>
            </div>

            {/*///////////////////// Orders Section ///////////////////////*/}
            <div className='marginLeft25 width95 padding1 boxShadow'>
                <div className='bold'>Total Orders <Link to="/orders"><button className='alignRight viewAllBtn'>View All</button></Link></div>
                <p className='fontSize13'>A summary of your orders</p>
                <div>
                    <text className='fontSize15 bold'>IR Sensor</text>
                    <p className='fontSize13'>Beam sensor is a through beam sensor which has TX and RX. <br />
                        Quantity : <text className='blueColor bold'>150</text> pieces
                    </p>
                </div>
                <div>
                    <text className='fontSize15 bold'>Metal Sensor</text>
                    <p className='fontSize13'>Inductive Sensor which detects all types of Metallic target. Sensor sensing range varies with Amount of Ferrous Content in Metal.<br />
                        Quantity : <text className='blueColor bold'>140</text> pieces
                    </p>
                </div>
            </div>

            {/*///////////////////// Leads Section ///////////////////////*/}
            <div className='marginLeft25 margin2 width95 padding1 boxShadow'>
                <div className='bold'>Total Leads <Link to="/leads"><button className='alignRight viewAllBtn'>View All</button></Link></div>
                <p className='fontSize13'>A summary of your leads received</p>
                <div>
                    <text className='fontSize15 bold'>Rakesh Verma</text>
                    <text className='fontSize13 alignRight'>Contact No: <b>+919898989898</b></text>
                    <p className='fontSize13'>I need metal sensor. Is it availabe now. Please contact me.<br />
                        Quantity : <text className='blueColor bold'>120</text> pieces
                    </p>
                </div>
                <div>
                    <text className='fontSize15 bold'>Mayank Saraswat</text>
                    <text className='fontSize13 alignRight'>Contact No: <b>+919898989899</b></text>
                    <p className='fontSize13'>I want magnetic sensors for demonstration of one of my project. If it is available then please contact me.<br />
                        Quantity : <text className='blueColor bold'>140</text> pieces
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Counters