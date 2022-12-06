import React from 'react'
import Button from 'react-bootstrap/Button';
import { MdDeleteOutline } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { updateTask } from '../actions/taskActions';

const ButtonsGroup2 = ({ todo, index }) => {

    const dispatch = useDispatch();

    const taskEditHandler = () => {
        const newTask = prompt("Enter new task");
        if (newTask) {
            todo.tasks[index] = newTask;
            dispatch(updateTask(newTask, index, todo._id));
        }
    }

    const taskDeleteHandler = () => {
        todo.tasks.splice(index, 1);
        dispatch(updateTask(null, index, todo._id));
    }

    return (
        <div className='d-flex gap-2'>
            <Button variant="secondary" onClick={taskEditHandler} ><FiEdit /></Button>
            <Button variant="danger" onClick={taskDeleteHandler}><MdDeleteOutline /></Button>
        </div>
    )
}

export default ButtonsGroup2;