import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CompanyForm.css';
import connect from "react-redux/es/connect/connect";
import { createCompany } from "../../actions/companyAction";

export class CompanyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            street1: '',
            street2: '',
            city: '',
            state: '',
            zipcode: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    render() {
        return (
            <div>
                <h1>Company Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Company Name:
                        <input
                            type="text"
                            name="companyName"
                            onChange={this.handleInputChange}
                            value={this.state.companyName}/>
                    </label>
                    <br />
                    <label>
                        Street 1:
                        <input
                            type="text"
                            name="street1"
                            onChange={this.handleInputChange}
                            value={this.state.street1}/>
                    </label>
                    <br />
                    <label>
                        Street 2:
                        <input
                            type="text"
                            name="street2"
                            onChange={this.handleInputChange}
                            value={this.state.street2}/>
                    </label>
                    <br />
                    <label>
                        City:
                        <input 
                            type="text"
                            name="city"
                            onChange={this.handleInputChange}
                            value={this.state.city}/>
                    </label>
                    <br />
                    <label>
                        State:
                        <input
                            type="text"
                            name="state"
                            onChange={this.handleInputChange}
                            value={this.state.state}/>
                    </label>
                    <br />
                    <label>
                        Zipcode:
                        <input
                            type="integer"
                            name="zipcode"
                            onChange={this.handleInputChange}
                            value={this.state.zipcode}/>
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
        // this.props.dispatch(updateCompanyForm(updates));
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const company = {
            companyName: this.state.companyName,
            street1: this.state.street1,
            street2: this.state.street2,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode
        };
        this.props.createCompany(company)

    }
}

CompanyForm.propTypes = {
    createCompany: PropTypes.func.isRequired
}

export default connect(null, { createCompany })(CompanyForm);
