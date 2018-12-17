import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CompaniesList.css';
import { connect } from 'react-redux';
import { fetchCompanies } from "../../actions/companyAction";

class CompaniesList extends Component {
    constructor(props) {
        super(props);
        
        this.renderCompanyTable = this.renderCompanyTable.bind(this);
    }
    
    componentWillMount() {
        this.props.fetchCompanies();
    }
    render() {
        let contents = this.renderCompanyTable(this.props.companies);
        return (
            <div>
                {contents}
            </div>
            
        );
    }

    renderCompanyTable(companyList) {
        return (
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
                {companyList.map(company => {
                    return (
                        <tr key={company.companyId}>
                            <td>{company.companyName}</td>
                            <td>{company.street1}</td>
                            <td>{company.street2}</td>
                            <td>{company.city}</td>
                            <td>{company.state}</td>
                            <td>{company.zipcode}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        )
    }
}

CompaniesList.propTypes = {
    fetchCompanies: PropTypes.func.isRequired,
    companies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    companies: state.companies.companyItems
})

export default connect(mapStateToProps, { fetchCompanies })(CompaniesList);