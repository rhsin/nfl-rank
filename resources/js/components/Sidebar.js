import React from 'react';
import { connect } from 'react-redux';
import './custom.css';
import { Alert, ButtonGroup, Button } from 'react-bootstrap';
import { upvote, downvote, fetchUsers, fetchRanks } from '../redux/actions';

function Sidebar(props) {
    const ranks = props.users.ranks;

    const upRank = (rank) => {
        upvote(rank);
        props.dispatch(fetchRanks());
        props.dispatch(fetchUsers());
    };

    const downRank = (rank) => {
        downvote(rank);
        props.dispatch(fetchRanks());
        props.dispatch(fetchUsers());
    };

    return (
        <>
            <div className='sidebar-header'>{props.users.email}</div>
            <div className='sidebar-header'>Week {props.week}</div>
            {ranks != null && ranks.map(item => 
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
        users: state.users
    };
}

export default connect(mapStateToProps)(Sidebar);


