import React, { ChangeEvent, useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBTextArea,
    MDBInput,
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { createTask } from '../actions/taskActions';

export function TaskModal() {
    // const [varyingState, setVaryingState] = useState('');
    const [varyingModal, setVaryingModal] = useState(false);
    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');

    const dispatch = useDispatch();

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const onChangeTask = (event) => {
        setTask(event.target.value);
    };

    const createTaskHandler = () => {
        dispatch(createTask(title, task));
        setTitle('');
        setTask('');
    }

    return (
        <>
            <MDBBtn
                className='mb-5'
                onClick={() => {
                    setVaryingModal(!varyingModal);
                    setTitle("");
                }}
            >
                Assign new task:
            </MDBBtn>

            <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Assign new task:</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={() => setVaryingModal(!varyingModal)}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className='mb-3'>
                                    {varyingModal && (
                                        <MDBInput
                                            value={title}
                                            onChange={onChangeTitle}
                                            labelClass='col-form-label'
                                            label='Title:'
                                            placeholder='Enter title'
                                        />
                                    )}
                                </div>
                                <div className='mb-3'>
                                    {varyingModal && (
                                        <MDBInput
                                            value={task}
                                            onChange={onChangeTask}
                                            labelClass='col-form-label'
                                            label='Task:'
                                            placeholder='Enter task'
                                        />
                                    )}
                                </div>
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={createTaskHandler}
                            >
                                Close
                            </MDBBtn>
                            <MDBBtn>Create Task</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}