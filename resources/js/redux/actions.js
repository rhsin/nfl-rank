// Only added axios because Laravel came with axios CSRF support 
import axios from 'axios';

export const FETCH_TEAMS = 'FETCH_TEAMS';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

const url = 'http://nfl.test/';

// const url = 'http://eblaravel-env.eba-qsnkmu83.us-west-2.elasticbeanstalk.com/';

export function fetchTeams() {
    return function(dispatch) {
        fetch(url + 'teams')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_TEAMS,
            teams: data
        }))
        .catch(err => {
            console.error('Error: ', err);
        });
    };
}

export function fetchUsers(id) {
    return function(dispatch) {
        fetch(url + 'users/' + id)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USERS,
            users: data
        }))
        .catch(err => {
            console.error('Error: ', err);
        });
    };
}

export function fetchUserList() {
    return function(dispatch) {
        fetch(url + 'users')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USER_LIST,
            userList: data
        }))
        .catch(err => {
            console.error('Error: ', err);
        });
    };
}

export function createRank(rank, week, team) {
    axios.post(url + 'ranks', {
            rank: parseInt(rank, 10),
            week: week,
            team_id: team
    })
    .catch(err => {
        console.log(err)
    });
}

export function upvote(rank) {
    axios.post(url + 'ranks/up/' + rank)
    .catch(err => {
        console.log(err)
    });
}

export function downvote(rank) {
    axios.post(url + 'ranks/down/' + rank)
    .catch(err => {
        console.log(err)
    });
}

export function deleteRank(rank) {
    axios.delete(url + 'ranks/' + rank)
    .catch(err => {
        console.log(err)
    });
}


