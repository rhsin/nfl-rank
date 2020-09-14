import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './custom.css';
import { Container, Card, Accordion, Button, Image, Modal, Form } from 'react-bootstrap';
import { fetchTeams, createRank } from '../redux/actions';

function Dashboard(props) {
    const [show, setShow] = useState(false);
    const [rank, setRank] = useState(1);
    const [team, setTeam] = useState(null);
    const rankArray = [...Array(33).keys()].slice(1);
    const week = 2;

    useEffect(()=> {
        props.dispatch(fetchTeams());
    },[]);

    const selectTeam = (id) => {
        setShow(true);
        setTeam(id)
    };

    const submitForm = (e) => {
        e.preventDefault();
        createRank(rank, week, team);
        resetForm();
    };

    const resetForm = () => {
        setShow(false);
        setRank(null);
        setTeam(1);
    };

    return (
        <>
            <Container id='container'>
                {props.teams.map(item => 
                    <Accordion
                        defaultActiveKey='0'
                        key={item.id} 
                        id='accordion-card'
                    >
                        <Card>
                            <Card.Header id='card-header'>
                                <Accordion.Toggle
                                    as={Button}
                                    variant='link'
                                    eventKey='0'
                                >
                                    {item.name}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey='0'>
                                <Card.Body id='card-body'>
                                    <Image src={item.logo}></Image>
                                    <div className='card-text'>{item.division}</div>
                                    <Button
                                        variant='primary'
                                        className='mt-2'
                                        size='sm'
                                        onClick={()=> selectTeam(item.id)}
                                    >
                                        Add Weekly Rank
                                    </Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                )}
            </Container>
            <Modal show={show} onHide={()=> resetForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>Power Ranking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => submitForm(e)}>
                        <Form.Group id='select-form-del'>
                            <Form.Label>Ranking</Form.Label>
                            <Form.Control
                                onChange={e => setRank(e.target.value)}
                                as='select'
                            >
                                {rankArray.map(item =>
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                )}
                            </Form.Control>
                        </Form.Group>
                        <Button type='submit'variant='success'>
                            Submit
                        </Button>
                    </Form>
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
        teams: state.teams
    };
}

export default connect(mapStateToProps)(Dashboard);


