import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

// Companies.propTypes = {
//     fetchCompanies: PropTypes.func.isRequired,
//     companies: PropTypes.array.isRequired,
//     newCompany: PropTypes.object
// };

const mapStateToProps = state => ({
    companies: state.companies.companyItems,
    newCompany: state.companies.companyItem
});

export default connect()(Companies);