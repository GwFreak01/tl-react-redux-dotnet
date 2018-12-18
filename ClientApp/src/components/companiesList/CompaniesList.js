import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CompaniesList.css';
import { connect } from 'react-redux';
import { fetchCompanies } from "../../actions/companyAction";

export class CompaniesList extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentWillMount() {
        this.props.fetchCompanies();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newCompany) {
            console.log('AUTOUPDATE_COMPANYLIST', nextProps.newCompany);
            this.props.companies.unshift(nextProps.newCompany);
        }
    }
    render() {
        const contents = this.props.companies.map(company => (
            <tr key={company.companyId}>
                <td>{company.companyName}</td>
                <td>{company.street1}</td>
                <td>{company.street2}</td>
                <td>{company.city}</td>
                <td>{company.state}</td>
                <td>{company.zipcode}</td>
            </tr>
        ));
        return (
            <div>
                <table className='companyTable'>
                    <thead>
                    <tr>
                        <th>CompanyId</th>
                        <th>Name</th>
                        <th>Street1</th>
                        <th>Street2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zipcode</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contents}
                    </tbody>
                </table>
                
            </div>
            
        );
    }
    
}

CompaniesList.propTypes = {
    fetchCompanies: PropTypes.func.isRequired,
    companies: PropTypes.array.isRequired,
    newCompany: PropTypes.object
};

const mapStateToProps = state => ({
    companies: state.companies.companyItems,
    newCompany: state.companies.companyItem
});

export default connect(mapStateToProps, { fetchCompanies })(CompaniesList);