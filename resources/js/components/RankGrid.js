import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './custom.css';
import { Container, Row, Col, Navbar, Button, Modal } from 'react-bootstrap';
import { fetchUsers, fetchUserList, SHOW_MODAL, HIDE_MODAL } from '../redux/actions';
import Ranks from './Ranks';
import Chat from './Chat';

function RankGrid(props) {
    const { dispatch, showModal, users, userList } = props;

    // Authenticated user-id is passed as html tag attribute in laravel view template
    const userId = document.getElementById('rankings').getAttribute('data-user-id');
    const user = users.name != null ?
        users.name : 'Guest';
    
    const list = userList.slice(0,4);

    useEffect(()=> {
        dispatch(fetchUsers(userId));
        dispatch(fetchUserList());
    },[]); 
        
    const showChat = () => {
        dispatch({type: SHOW_MODAL});
    };

    const hideChat = () => {
        dispatch({type: HIDE_MODAL});
    };

    return (
        <Container id='container'>
            <Row className='page-header'>
                Site Rankings
            </Row>
            <Row>
                {list.map(item => 
                    <Col id='col-rankings' key={item.id}>
                        <Ranks userCol={item} />
                    </Col>
                )}
            </Row>
            <Navbar fixed='bottom' className='justify-content-end'>
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
        users: state.users,
        userList: state.userList,
        showModal: state.showModal,
        week: state.week
    };
}

export default connect(mapStateToProps)(RankGrid);


