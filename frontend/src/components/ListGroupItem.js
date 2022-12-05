import React, { useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import MyVerticallyCenteredModal from './Modal';

const ListGroupItem = (props) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <ListGroup.Item className='mb-2'>{props.children}<Button variant="primary" className='ml-5 position-absolute top-50 start-100 translate-middle' onClick={() => setModalShow(true)}>View</Button> <MyVerticallyCenteredModal header={props.children}
                show={modalShow}
                onHide={() => setModalShow(false)}
            /></ListGroup.Item>
        </div>
    )
}

export default ListGroupItem