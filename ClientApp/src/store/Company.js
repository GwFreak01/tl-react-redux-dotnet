const updateCompanyForm = 'UPDATE_COMPANY_FORM';
const submitCompanyForm = 'SUBMIT_COMPANY_FORM';
const initialState = {
    companyName: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipcode: ''
};

export const actionCreators = {};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === updateCompanyForm) {
        console.log('updateCompanyForm_reducer');
        return {
            ...state,
            
        }
    }
    
    return state;
};