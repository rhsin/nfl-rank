import React from 'react';
import { connect } from 'react-redux';
import './custom.css';
import { Alert } from 'react-bootstrap';

function RankColumn(props) {
    const { users, week, userCol } = props;

    const variant = users.id == userCol.id ?
        'success' : 'danger';

    return (
        <>
            <div className='col-header'>
                {userCol.name}
            </div>
            <div className='col-header'>
                Week {week}
            </div>
            {userCol.ranks != null && userCol.ranks.map(item => 
                <Alert variant={variant} key={item.id} id='rank-col'>
                    {item.rank}. {item.team_id}
                </Alert>    
            )}
        </>
    );
}

function mapStateToProps(state) {
    return {
        users: state.users,
        week: state.week
    };
}

export default connect(mapStateToProps)(RankColumn);


