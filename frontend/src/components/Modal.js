import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FaEdit } from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { updateTodoTitle } from '../actions/todoActions';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonsGroup from './ButtonGroup';

function MyVerticallyCenteredModal(props) {
    const [title, setTitle] = useState(props.todo.title);
    const dispatch = useDispatch();

    const titlehandler = () => {
        const newTitle = prompt("Enter new title");
        dispatch(updateTodoTitle(newTitle, props.todo._id,));
        setTitle(newTitle);
    };

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
                <Button className='ml-3' onClick={titlehandler}>
                    <FaEdit />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <ListGroup as="ol" numbered>
                    {props.todo.tasks !== 0 && props.todo.tasks.map((task, index) => (<>
                        <ListGroup.Item key={index} as="li">{task}
                            <ButtonsGroup/></ListGroup.Item>
                    </>))}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;   