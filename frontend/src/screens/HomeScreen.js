import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/userActions';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from '../components/ListGroupItem';


function HomeScreen() {

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { user } = userDetails;
    console.log("userProfile", user.todo)
    // console.log(Object.keys(user).length)

    const getUserData = () => {
        dispatch(getUserProfile())
    };


    return (
        <>
            <Button onClick={getUserData}>Get User Data</Button>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "70px"}}> 
                <ListGroup variant='flush' style={{width:"30%"}}>
                    {user && Object.keys(user).length !== 0 && user.todo.map((each) => <ListGroupItem key={each._id} todo={each}>{each.title}</ListGroupItem>)}
                </ListGroup>
            </div>
        </>
    );
}

export default HomeScreen;