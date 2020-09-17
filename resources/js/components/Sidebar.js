import React, { useState } from 'react';
import { connect } from 'react-redux';
import './custom.css';
import { Alert, ButtonGroup, Button, Modal } from 'react-bootstrap';
import { upvote, downvote, deleteRank } from '../redux/actions';

function Sidebar(props) {
    const { users, week, refresh } = props;

    const [show, setShow] = useState(false);
    const [rank, setRank] = useState(null);

    const upRank = (rank) => {
        upvote(rank);
        refresh();
    };

    const downRank = (rank) => {
        downvote(rank);
        refresh();
    };

    const selectRank = (id) => {
        setShow(true);
        setRank(id)
    };

    const removeRank = () => {
        deleteRank(rank);
        resetForm();
    }

    const resetForm = () => {
        refresh();
        setShow(false);
        setRank(null);
    };

    return (
        <>
            <div className='sidebar-header'>
                {users.email}
            </div>
            <div className='col-header'>
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
                    <Button
                        variant='outline-dark'
                        size='sm'
                        id='btn-rank'
                        onClick={()=> selectRank(item.id)}
                    >
                        {item.rank}. {item.team_id}
                    </Button>
                </Alert>    
            )}
            <Modal show={show} onHide={()=> resetForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Rank</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant='danger' onClick={()=> removeRank()}>
                        Delete 
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='dark' onClick={()=> resetForm()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
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


