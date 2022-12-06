import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ButtonsGroup from './ButtonGroup';
import MyVerticallyCenteredModal from './Modal';

const ListGroupItem = ({ children, todo }) => {
    const [modalShow, setModalShow] = useState(false);
    // const [title, setTitle] = useState("");
    // console.log(title)

    const dispatch = useDispatch()

    const todoDetails = useSelector((state) => state.editTodo)
    // const { title } = todoDetails;

    return (
        <div>
            <ListGroup.Item className='mb-2'>{children}
                <ButtonsGroup setModalShow={setModalShow} />
                <MyVerticallyCenteredModal todo={todo}
                    key={todo._id}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /></ListGroup.Item>
        </div>
    )
}

export default ListGroupItem