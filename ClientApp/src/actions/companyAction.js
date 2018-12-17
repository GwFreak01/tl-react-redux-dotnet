import { FETCH_COMPANIES, NEW_COMPANY } from "./types";

export const fetchCompanies = () => dispatch => {
    fetch('api/Company/Index')
        .then(response => response.json())
        .then(companies => {
            console.log('FETCH_COMPANIES_ACTION: ', companies);
            dispatch({
                type: FETCH_COMPANIES,
                payload: companies
            });
        });
};

export const createCompany = (companyData) => dispatch => {
    let companyDataSanitized = {
        CompanyName: companyData.companyName,
        Street1: companyData.street1,
        Street2: companyData.street2,
        City: companyData.city,
        State: companyData.state,
        Zipcode: parseInt(companyData.zipcode)
    };
    console.log('companyData: ', companyDataSanitized);
    fetch('api/Company/Create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(companyDataSanitized)
    })
        .then(response => {
            console.log(response);
            // response.json()
        })
        .then(company => {
            console.log('NEW_COMPANIES_ACTION: ', company);
            dispatch({
                type: NEW_COMPANY,
                payload: company
            });
        });
};