import React, { useState, useEffect } from 'react';
import { database } from './firebase';
import './custom.css';
import { Card, Alert, Form, Button } from 'react-bootstrap';

function Chat(props) {
    const [log, setLog] = useState([]);
    const [message, setMessage] = useState('');
    
    const date = new Date(Date.now()).toUTCString();
    const user = props.user;

    useEffect(()=> {
        database.ref('log').on('value', snapshot => {
            const log = [];
            snapshot.forEach(item => {
                log.push(item.val());
            });
            setLog(log);
        });
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.length > 0) {
            database.ref('log').push({
                message: message,
                timestamp: date,
                user: user
            });
        } 
        setMessage('');
    };
    
    return (
        <Card id='chat-card'>
            <Card.Header>
                <strong>Chat App</strong>
            </Card.Header>
            <Card.Body>
                {log.map((item, index) => 
                    <Alert variant='success' key={index}>
                        <span>
                            <strong>{item.user}</strong>
                        </span>
                        <span>:  {item.message}</span>
                        <div>{item.timestamp}</div>
                    </Alert>    
                )}
                <Form onSubmit={e => handleSubmit(e)} inline>
                    <Form.Control
                        type='text'
                        placeholder='Enter Message'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <Button type='submit' variant='success' className='submit'>
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Chat;