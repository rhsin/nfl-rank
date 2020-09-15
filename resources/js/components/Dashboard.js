import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './custom.css';
import { Container, Row, Col, Navbar, Button, Modal } from 'react-bootstrap';
import { fetchTeams, fetchUsers } from '../redux/actions';
import TeamGrid from './TeamGrid';
import Sidebar from './Sidebar';
import Chat from './Chat';

function Dashboard(props) {
    const [show, setShow] = useState(false);
    const teamArray1 = props.teams.slice(0,8);
    const teamArray2 = props.teams.slice(8,16);
    const teamArray3 = props.teams.slice(16,24);
    const teamArray4 = props.teams.slice(24,32);
    const user = props.users.name != null ?
        props.users.name : 'Guest';
    const week = 2;

    useEffect(()=> {
        props.dispatch(fetchTeams());
        props.dispatch(fetchUsers());
    },[]);

    return (
        <Container id='container'>
            <Row>
                <Col id='col-sidebar'>
                    <Sidebar week={week}/>
                </Col>
                <Col>
                    <TeamGrid teamArray={teamArray1} week={week}/>
                </Col>
                <Col>
                    <TeamGrid teamArray={teamArray2} week={week}/>
                </Col>
                <Col>
                    <TeamGrid teamArray={teamArray3} week={week}/>
                </Col>
                <Col>
                    <TeamGrid teamArray={teamArray4} week={week}/>
                </Col>
            </Row>
            <Navbar fixed="bottom" className="justify-content-end">
                <Button
                    variant="outline-success"
                    onClick={()=> setShow(true)}
                >
                    Chat
                </Button> 
            </Navbar>
            <Modal show={show} onHide={()=> setShow(false)}>
                <Chat user={user}/>
            </Modal>
        </Container> 
    );
}

function mapStateToProps(state) {
    return {
        teams: state.teams,
        users: state.users
    };
}

export default connect(mapStateToProps)(Dashboard);


