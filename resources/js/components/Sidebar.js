import React  from 'react';
import { connect } from 'react-redux';
import './custom.css';
import { Alert } from 'react-bootstrap';

function Sidebar(props) {
    const ranks = props.users.ranks;

    return (
        <>
            <div id='sidebar-header'>{props.users.email}</div>
            {ranks != null && ranks.map(item => 
                <Alert variant='info' key={item.id} id='rank'>
                    {item.rank}. {item.team_id}
                </Alert>    
            )}
        </>
    );
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(Sidebar);


