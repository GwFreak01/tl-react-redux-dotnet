import React, { Component } from 'react';
import './CompaniesList.css';

export class CompaniesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyList: []
        };

        fetch('api/Company/Index')
            .then(response => response.json())
            .then(data => {
                console.log('GET ALL COMPANIES: ', data);
                this.setState({
                    companyList: data
                });
            });
        
        this.renderCompanyTable = this.renderCompanyTable.bind(this);
    }
    render() {
        let contents = this.renderCompanyTable(this.state.companyList);
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

