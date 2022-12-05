import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import ButtonsGroup from './ButtonGroup';
import MyVerticallyCenteredModal from './Modal';

const ListGroupItem = ({ children, todo }) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <ListGroup.Item className='mb-2'>{children}
                <ButtonsGroup setModalShow={setModalShow}/>
                <MyVerticallyCenteredModal todo={todo}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /></ListGroup.Item>
        </div>
    )
}

export default ListGroupItem