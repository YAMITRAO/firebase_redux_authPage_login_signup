import React from 'react'
import { Alert } from 'react-bootstrap'

const AlertMsg = (props) => {
  return (
    <Alert dismissible variant={props.variant} className='m-5'>
    <Alert.Heading>{props.title}</Alert.Heading>
    <p> {props.message}</p>
  </Alert>
  )
}

export default AlertMsg