import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './custom.css';
import { Card, Accordion, Button, Image, Modal, Form } from 'react-bootstrap';
import { createRank, fetchTeams } from '../redux/actions';

function TeamGrid(props) {
    const [show, setShow] = useState(false);
    const [rank, setRank] = useState(1);
    const [team, setTeam] = useState(null);

    const week = useSelector(state => state.week);
    const dispatch = useDispatch();

    // Array from 1 to 32 (32 teams in NFL league), for dropdown form
    const rankArray = [...Array(33).keys()].slice(1);

    const selectTeam = (id) => {
        setShow(true);
        setTeam(id)
    };

    const submitForm = (e) => {
        e.preventDefault();
        createRank(rank, week, team);
        resetForm();
        dispatch(fetchTeams());
    };

    const resetForm = () => {
        setShow(false);
        setRank(null);
        setTeam(1);
    };

    return (
        <>
            {props.teamArray.map(item => 
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
                                <div className='card-text'>
                                    Power Rank: {item.rank.rank ?
                                    item.rank.rank : ' -'}
                                </div>
                                <Button
                                    variant='primary'
                                    className='m-1'
                                    size='sm'
                                    onClick={()=> selectTeam(item.id)}
                                >
                                    Add Ranking
                                </Button>
                                <div className='card-text'>
                                    Site Average: {item.avg_rank ?
                                    item.avg_rank : ' -'}
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            )}
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

export default TeamGrid;


