import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {useDispatch} from "react-redux";
import {deleteContact} from "../redux/actions/contactActions";
import EditModal from './EditModal';

const  ContactCard=({contact})=> {
       const dispatch=useDispatch();
       const delet=()=>{
         dispatch(deleteContact(contact._id))
       }

    return (
        <div style={{minWidth:"300px", margin:"10px",textAlign:"center"}}>
        <Card body inverse color="info">
        <CardTitle tag="h5">{contact.name}</CardTitle>
        <CardText>{contact.email}</CardText>
        <CardText>{contact.phone}</CardText>
        <CardText>{contact.dateCreation.slice(0,10)}/{contact.dateCreation.slice(11,19)} </CardText>
        <Button onClick={delet} style={{backgroundColor:"#F78DA7"}} >delete contact</Button>
        <EditModal  contact={contact} />
      </Card>
        </div>
    )
}

export default ContactCard

