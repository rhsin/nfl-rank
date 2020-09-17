import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './custom.css';
import { Container, Row, Col, Navbar, Button, Modal } from 'react-bootstrap';
import { fetchTeams, fetchUsers, SHOW_MODAL, HIDE_MODAL } from '../redux/actions';
import TeamGrid from './TeamGrid';
import Sidebar from './Sidebar';
import Chat from './Chat';

function Dashboard(props) {
    const { dispatch, showModal, teams, users } = props;

    const [refresh, setRefresh] = useState(false);

    // Authenticated user-id is passed as html tag attribute in laravel view template
    const userId = document.getElementById('root').getAttribute('data-user-id');
    const user = users.name != null ?
        users.name : 'Guest';

    // The 32 NFL teams are split into 4 columns of each with an 8 team array (teamArray)
    const teamArray1 = teams.slice(0,8);
    const teamArray2 = teams.slice(8,16);
    const teamArray3 = teams.slice(16,24);
    const teamArray4 = teams.slice(24,32);

    useEffect(()=> {
        dispatch(fetchTeams());
        dispatch(fetchUsers(userId));
    },[refresh]);

    const showChat = () => {
        dispatch({type: SHOW_MODAL});
    };

    const hideChat = () => {
        dispatch({type: HIDE_MODAL});
    };

    return (
        <Container id='container'>
            <Row className='page-header'>
                Dashboard
            </Row>
            <Row>
                <Col id='col-sidebar'>
                    <Sidebar refresh={()=> setRefresh(!refresh)} />
                </Col>
                <Col>
                    <TeamGrid
                        teamArray={teamArray1}
                        refresh={()=> setRefresh(!refresh)}
                    />
                </Col>
                <Col>
                    <TeamGrid
                        teamArray={teamArray2}
                        refresh={()=> setRefresh(!refresh)}
                    />
                </Col>
                <Col>
                    <TeamGrid
                        teamArray={teamArray3}
                        refresh={()=> setRefresh(!refresh)}
                    />
                </Col>
                <Col>
                    <TeamGrid
                        teamArray={teamArray4}
                        refresh={()=> setRefresh(!refresh)}
                    />
                </Col>
            </Row>
            <Navbar fixed="bottom" className="justify-content-end">
                <Button
                    variant="success"
                    onClick={()=> showChat()}
                >
                    Chat
                </Button> 
            </Navbar>
            <Modal
                show={showModal}
                id='chat-modal'
                onHide={()=> hideChat()}
            >
                <Chat user={user} />
            </Modal>
        </Container> 
    );
}

function mapStateToProps(state) {
    return {
        teams: state.teams,
        users: state.users,
        showModal: state.showModal
    };
}

export default connect(mapStateToProps)(Dashboard);


