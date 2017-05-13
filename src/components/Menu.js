import React, { Component } from 'react';
export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Menu</h1>
                <p>Select</p>
                <nav>
                    <ul>
                        <li><a href="http://localhost:3000/">Login</a></li>
                        <li><a href="http://localhost:3000/requesters">View Requesters</a></li>
                        <li><a href="http://localhost:3000/regions">View all regions</a></li>
                        <li><a href="http://localhost:3000/appraisals">View appraisals</a></li>
                        <li><a href="http://localhost:3000/addrequesters">Add a requester</a></li>
                        <li><a href="http://localhost:3000/turntimes">Add a Turn Time</a></li>
                        <li><a href="http://localhost:3000/addrequesters">Add a requester</a></li>
                        <li><a href="http://localhost:3000/addappraisals">Add an appraisal</a></li>
                        <li><a href="http://localhost:3000/addregions">Add a Region</a></li>
                    </ul>
                </nav>
</div>
        );
    }

}

