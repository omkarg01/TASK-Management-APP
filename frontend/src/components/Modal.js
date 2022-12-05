import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FaEdit } from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { updateTodoTitle } from '../actions/todoActions';
import Button from 'react-bootstrap/Button';
import ButtonsGroup2 from './ButtonGroup2';

function MyVerticallyCenteredModal(props) {
    const [title, setTitle] = useState(props.todo.title);
    const dispatch = useDispatch();

    const titlehandler = () => {
        const newTitle = prompt("Enter new title");
        if (newTitle) {
            setTitle(newTitle);
            dispatch(updateTodoTitle(props.todo._id, newTitle));
        }
    };

    const taskEditHandler = () => {
         
    }
    const taskDeleteHandler = () => {

    }

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
                <ListGroup as="ol">
                    {props.todo.tasks !== 0 && props.todo.tasks.map((task, index) => (<>
                        <ListGroup.Item key={index} className="d-flex justify-content-around" as="li">{task}
                            <ButtonsGroup2 /></ListGroup.Item>
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