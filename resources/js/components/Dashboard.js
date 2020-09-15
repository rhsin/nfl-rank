import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './custom.css';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchTeams, fetchUsers } from '../redux/actions';
import TeamGrid from './TeamGrid';
import Sidebar from './Sidebar';

function Dashboard(props) {
    const teamArray1 = props.teams.slice(0,8);
    const teamArray2 = props.teams.slice(8,16);
    const teamArray3 = props.teams.slice(16,24);
    const teamArray4 = props.teams.slice(24,32);
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


