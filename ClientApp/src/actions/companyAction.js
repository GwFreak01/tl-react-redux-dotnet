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

