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

export function TaskModal() {
    const [varyingState, setVaryingState] = useState('');
    const [varyingModal, setVaryingModal] = useState(false);
    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const onChangeTask = (event) => {
        setTask(event.target.value);
    };

    return (
        <>
            <MDBBtn
                onClick={() => {
                    setVaryingState("");
                    setVaryingModal(!varyingModal);
                    setTitle("");
                }}
            >
                Open modal for @getbootstrap
            </MDBBtn>

            <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>New message to {varyingState}</MDBModalTitle>
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
                            <MDBBtn color='secondary' onClick={() => setVaryingModal(!varyingModal)}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}