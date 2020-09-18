// Only added axios because Laravel came with axios CSRF support 
import axios from 'axios';

export const FETCH_TEAMS = 'FETCH_TEAMS';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

// const url = 'http://nfl.test/';

const url = 'nfl-rank.chsxtvbmmuc2.us-west-2.rds.amazonaws.com/';

export function fetchTeams() {
    return function(dispatch) {
        fetch(url + 'teams')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_TEAMS,
            teams: data
        }));
    };
}

export function fetchUsers(id) {
    return function(dispatch) {
        fetch(url + 'users/' + id)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USERS,
            users: data
        }));
    };
}

export function fetchUserList() {
    return function(dispatch) {
        fetch(url + 'users')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USER_LIST,
            userList: data
        }));
    };
}

export function createRank(rank, week, team) {
    axios.post(url + 'ranks', {
            rank: parseInt(rank, 10),
            week: week,
            team_id: team
    });
}

export function upvote(rank) {
    axios.post(url + 'ranks/up/' + rank);
}

export function downvote(rank) {
    axios.post(url + 'ranks/down/' + rank);
}

export function deleteRank(rank) {
    axios.delete(url + 'ranks/' + rank);
}


