import React from 'react';
import { connect } from 'react-redux';
import './custom.css';
import { Alert, ButtonGroup, Button } from 'react-bootstrap';
import { upvote, downvote, fetchUsers, fetchRanks } from '../redux/actions';

function Sidebar(props) {
    const { dispatch, users, userId, week } = props;

    const upRank = (rank) => {
        upvote(rank);
        dispatch(fetchRanks());
        dispatch(fetchUsers(userId));
    };

    const downRank = (rank) => {
        downvote(rank);
        dispatch(fetchRanks());
        dispatch(fetchUsers(userId));
    };

    return (
        <>
            <div className='sidebar-header'>
                {users.email}
            </div>
            <div className='sidebar-header'>
                Week {week}
            </div>
            {users.ranks != null && users.ranks.map(item => 
                <Alert variant='info' key={item.id} id='rank'>
                    <ButtonGroup className='mr-1' vertical>
                        <Button
                            variant='dark'
                            size='sm'
                            className='btn-sidebar'
                            onClick={()=> upRank(item.id)}
                        >
                            +
                        </Button>
                        <Button
                            variant='secondary'
                            size='sm'
                            className='btn-sidebar'
                            onClick={()=> downRank(item.id)}
                        >
                            -
                        </Button>
                    </ButtonGroup>
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

export default connect(mapStateToProps)(Sidebar);


