import React, { Component } from 'react';
import './CompanyForm.css';
import connect from "react-redux/es/connect/connect";
import {Events} from "../events/Events";

export class CompanyForm extends Component {
    render() {
        return (
<div>
    <h1>Company Form</h1>
    <form>
    <label>
        Company Name:
        <input type="text" name="companyName" />
    </label>
    <br />
    <label>
        Street 1:
        <input type="text" name="street1" />
    </label>
    <br />
    <label>
        Street 2:
        <input type="text" name="street2" />
    </label>
    <br />
    <label>
        City:
        <input type="text" name="city" />
    </label>
    <br />
    <label>
        State:
        <input type="text" name="state" />
    </label>
    <br />
    <label>
        Zipcode:
        <input type="integer" name="zipcode" />
    </label>
    <input type="submit" value="Submit" />
    <br />
    <br />
    </form>
</div>
        );
    }
}

export default connect(
    state => state.company
)(CompanyForm);
