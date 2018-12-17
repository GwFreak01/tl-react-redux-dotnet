import React, { Component } from 'react';
import './CompanyForm.css';
import connect from "react-redux/es/connect/connect";
import {Events} from "../events/Events";
import {actionCreators} from "../../store/Company";
import {bindActionCreators} from "redux";

export class CompanyForm extends Component {

    constructor(props) {
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Company Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Company Name:
                        <input type="text" name="companyName" onChange={this.handleInputChange}/>
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

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.props.dispatch(updateCompanyForm(updates));
        
        
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
    }
}

export default connect(
    state => state.company,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(CompanyForm);
