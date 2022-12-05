import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FornContainer'
import { getUserProfile, login, logout } from '../actions/userActions'
import { useNavigate } from "react-router-dom";

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { error, userInfo } = userLogin;

    // const userProfile = useSelector((state) => state.userDetails)
    // const { user } = userProfile;
    // console.log("userProfile", userProfile)

    useEffect(() => {
        if (userInfo) {
            logout();
            navigate("/");
        }
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        dispatch(getUserProfile())
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer?{' '}
                    <Link to={'/register'}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen
