import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { Alert } from 'bootstrap'
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';


export default function Dashboard() {
  const [error, setError] = useState('');
  const {currentUser, logout} = useAuth()
  const history = useNavigate()
  
  
  async function handleLogout(){
    setError('')

    try{
      await logout()
      history('/login')
    } catch{
      setError('Failed to Log out')
    }

  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Account</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </div>
      <div className="w-100 text-center mt-2">
        <Link to="/calendar">Calander</Link>
      </div>
    </>
  )
}




