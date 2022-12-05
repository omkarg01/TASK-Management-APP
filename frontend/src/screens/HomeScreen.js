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
    console.log("userProfile", userDetails)

    const getUserData = () => {
        dispatch(getUserProfile())
    };

    useEffect(() => {
    }, [])

    return (
        <>
            <ListGroup variant='flush'>
                <ListGroupItem>My Custom Group Item 1</ListGroupItem>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default HomeScreen;