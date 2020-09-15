import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TeamGrid from './TeamGrid';
import './custom.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { fetchTeams, fetchUsers } from '../redux/actions';

function Dashboard(props) {
    const teamArray1 = props.teams.slice(0,8);
    const teamArray2 = props.teams.slice(8,16);
    const teamArray3 = props.teams.slice(16,24);
    const teamArray4 = props.teams.slice(24,32);
    const [ranks, setRanks] = useState([]);

    useEffect(()=> {
        props.dispatch(fetchTeams());
        props.dispatch(fetchUsers());
        // setRanks(props.users.ranks);
    },[]);

    return (
        <Container id='container'>
            <Row>
                <Col>
                    {ranks.length > 0 && ranks.map(item => 
                        <Alert variant='info' key={item.id}>
                            {item.rank}. {item.team_id}
                        </Alert>    
                    )}
                    {props.users.email}
                </Col>
                <Col>
                    <TeamGrid teamArray={teamArray1}/>
                </Col>
                <Col>
                    <TeamGrid teamArray={teamArray2}/>
                </Col>
                <Col>
                    <TeamGrid teamArray={teamArray3}/>
                </Col>
                <Col>
                    <TeamGrid teamArray={teamArray4}/>
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


