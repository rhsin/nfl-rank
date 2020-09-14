import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './custom.css';
import { Container, Card, Accordion, Button } from 'react-bootstrap';
import { fetchTeams } from '../redux/actions';

function Dashboard(props) {

    useEffect(()=> {
        props.dispatch(fetchTeams());
    },[]);

    return (
        <Container>
            {props.teams.map(item => 
            <Accordion defaultActiveKey=''>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle
                            as={Button}
                            variant='link'
                            eventKey='0'
                        >
                            {item.name}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                            {item.division}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            )}
        </Container>
    );
}

function mapStateToProps(state) {
    return {
        teams: state.teams
    };
}

export default connect(mapStateToProps)(Dashboard);


