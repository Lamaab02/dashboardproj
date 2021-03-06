
import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth,  } from '../context/authContext'
import { Link } from 'react-router-dom'




export default function ForgotPassword() {
    const emailRef = useRef()
    const {reset} = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    async function handleSubmit (e){
        e.preventDefault()

        

        try{
            setError('')
            setMessage('')
            setLoading(true)
            await reset(emailRef.current.value)
            setMessage('check your inbox for reset info!')
        }   catch{
            setError('failed to reset')
            
        }

        setLoading(false)
        
    }
  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Reset Password</h2>
                
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" ref={emailRef} required/> 
                    </Form.Group>
                    <Button disabled={loading} type="submit" className="w-100 mt-3">Reset</Button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to="/login">Log In</Link>
                </div>
            </Card.Body>

        </Card>
        <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
    </>
  )
}
