import React, { useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import MyVerticallyCenteredModal from './Modal';

const ListGroupItem = (props) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <ListGroup.Item>{props.children}<Button variant="primary" onClick={() => setModalShow(true)}>Secondary</Button> <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /></ListGroup.Item>
        </div>
    )
}

export default ListGroupItem