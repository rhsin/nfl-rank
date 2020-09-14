import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    teams: [],
    users: [],
    ranks: [],
    showModal : false,
    modalType: ''
};

function reducer(state = initialState, action) {
    console.log('reducer', state, action);

    switch(action.type) {
        case 'FETCH_TEAMS':
            return {
                ...state,
                teams: action.teams
            };
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.users
            };
        case 'FETCH_RANKS':
            return {
                ...state,
                ranks: action.ranks
            };
        case 'SHOW_MODAL':
            return {
                ...state,
                showModal: true,
                modalType: action.modalType
            };
        case 'HIDE_MODAL':
            return {
                ...state,
                showModal: false
            };
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;