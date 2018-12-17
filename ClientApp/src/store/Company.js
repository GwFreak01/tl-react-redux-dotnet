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

export const actionCreators = {
    updateCompanyForm: (updates) => ({
        type: updateCompanyForm,
        updates
    })
};

export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case updateCompanyForm:
            console.log('updateCompanyForm_reducer');
            return {
                companyName: action.updates.companyName,
                street1: action.updates.street1,
                street2: action.updates.street2,
                city: action.updates.city,
                state: action.updates.state,
                zipcode: action.updates.zipcode,
            };
        case submitCompanyForm:
            state = {
                companyName: action.updates.companyName,
                street1: action.updates.street1,
                street2: action.updates.street2,
                city: action.updates.city,
                state: action.updates.state,
                zipcode: action.updates.zipcode,
            };
            
            
    }
    
    return state;
};