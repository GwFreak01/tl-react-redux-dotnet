import React, { Component } from 'react';
import './Events.css';
import connect from "react-redux/es/connect/connect";

export class Events extends Component {
    render() {
        return (
            <p>EVENTS PAGE</p>
        );
    }
}

export default connect()(Events);
