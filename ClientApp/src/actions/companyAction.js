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
    console.log('CREATE_COMPANY: ', companyData);
    fetch('api/Company/Create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(companyData)
    })
        .then(response => {
            response.json();
        })
        .then(company => {
            console.log('NEW_COMPANIES_ACTION: ', company);
            dispatch({
                type: NEW_COMPANY,
                payload: company
            });
        })
        .catch(error => {
            console.log(error);
        });
};