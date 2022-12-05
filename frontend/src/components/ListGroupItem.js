import React, { useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import MyVerticallyCenteredModal from './Modal';

const ListGroupItem = ({ children, todo }) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <ListGroup.Item className='mb-2'>{children}<Button variant="primary" className='ml-5 position-absolute top-50 start-100 translate-middle' onClick={() => setModalShow(true)}>View</Button> <MyVerticallyCenteredModal todo={todo}
                show={modalShow}
                onHide={() => setModalShow(false)}
            /></ListGroup.Item>
        </div>
    )
}

export default ListGroupItem