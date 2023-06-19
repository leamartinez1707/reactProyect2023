import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ErrorFound = () => {

  const navigate = useNavigate();


  return (


    <div className="d-flex flex-column my-5 p-5 align-items-center justify-content-center">
      < img src="https://txn.my/images/error-404.png" alt="" />
      <Button onClick={() => navigate('/')} variant='danger'>Press here to come back home</Button>
    </div>
  )
}

export default ErrorFound