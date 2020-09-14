
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
        fetch(url + 'users')
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

// export function createReport(note, score, med, user) {
//     fetch(url + 'api/reports', {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             'Authorization': 'Bearer ' + accessToken
//         },
//         body: JSON.stringify({
//             note: note,
//             score: score,
//             med_id: med,
//             user_id: user
//         })
//     });
// }

// export function editReport(report , note, score, med, user) {
//     fetch(url + 'api/reports/' + report, {
//         method: 'PUT',
//         headers: {
//             "Content-Type": "application/json",
//             'Authorization': 'Bearer ' + accessToken
//         },
//         body: JSON.stringify({
//             note: note,
//             score: score,
//             med_id: med,
//             user_id: user
//         })
//     });
// }

// export function deleteReport(report) {
//     fetch(url + 'api/reports/' + report, {
//         method: 'DELETE',
//         headers: {'Authorization': 'Bearer ' + accessToken}
//     });
// }
