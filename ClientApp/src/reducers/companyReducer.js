import { FETCH_COMPANIES, NEW_COMPANY } from "../actions/types";

const initialState = {
    companyItems: [],
    companyItem: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_COMPANIES:
            console.log('FETCH_COMPANY_REDUCER');
            return {
                ...state,
                companyItems: action.payload
            };
        default:
            return state;
    }
}