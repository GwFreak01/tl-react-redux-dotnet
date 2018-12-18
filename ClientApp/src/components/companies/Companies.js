import React, { Component } from 'react';
import './Companies.css';
import { connect } from 'react-redux';
import CompanyForm from "../companyForm/CompanyForm";
import CompaniesList from "../companiesList/CompaniesList";

export class Companies extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.newCompany) {
        //     console.log('AUTOUPDATE_COMPANYLIST', nextProps.newCompany);
        //     this.props.companies.unshift(nextProps.newCompany);
        // }
    }
    render() {
        return (
            <div>
                <CompanyForm />
                <CompaniesList />
            </div>
            
            
            
        );
    }
}

export default connect()(Companies);