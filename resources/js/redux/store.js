import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    teams: [],
    users: [],
    userList: [],
    showModal : false,
    modalType: null,
    week: 2
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
        case 'FETCH_USER_LIST':
            return {
                ...state,
                userList: action.userList
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