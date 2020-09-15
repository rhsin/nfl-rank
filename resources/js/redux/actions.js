
export const FETCH_TEAMS = 'FETCH_TEAMS';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_RANKS = 'FETCH_RANKS';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

const url = 'http://nfl.test/';

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

export function fetchUsers() {
    return function(dispatch) {
        fetch(url + 'users/1')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USERS,
            users: data
        }));
    };
}

export function fetchRanks() {
    return function(dispatch) {
        fetch(url + 'ranks')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_RANKS,
            ranks: data
        }));
    };
}

export function createRank(rank, week, team) {
    fetch(url + 'ranks', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            rank: parseInt(rank, 10),
            week: week,
            team_id: team,
        })
    });
}

export function upvote(rank) {
    fetch(url + 'ranks/up/' + rank, {
        method: 'GET',
    });
}

export function downvote(rank) {
    fetch(url + 'ranks/down/' + rank, {
        method: 'GET',
    });
}

