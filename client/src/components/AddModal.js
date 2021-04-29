import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useDispatch} from "react-redux";
import { addContact } from '../redux/actions/contactActions';
import {Redirect} from "react-router-dom"
function AddModal() {
    const [name, setName]=useState ("")
    const [email, setEmail]=useState ("")
    const [phone, setPhone]=useState ("")
    const [cancel, setCancel]=useState (false)
     const dispatch=useDispatch();
     const add=()=>{
         dispatch(addContact({name,email,phone}));
         setCancel(!cancel);
     };

    return (
        <> 
        {cancel? (<Redirect to ="/list" />):(
                 <div style={{margin:"100px"}}>
            <Form>
        <FormGroup>
        <Label > Name </Label>
        <Input 
        value={name} onChange={(e)=> setName(e.target.value)}
        type="name" name="name" id="examplename" placeholder="enter your name" />
      </FormGroup>
      <FormGroup>
        <Label > Email </Label>
        <Input 
                value={email} onChange={(e)=> setEmail(e.target.value)}
        type="email" name="email" id="exampleEmail" placeholder="enter your e mail" />
      </FormGroup>
      <FormGroup>
        <Label > Phone </Label>
        <Input 
    value={phone} onChange={(e)=> setPhone(e.target.value)}
        type="number" name="phone" id="examplePhone" placeholder="enter your phone" />
      </FormGroup>
      <Button onClick={add}> Add Contact</Button>
       <Button onClick={()=> setCancel(!cancel)}> Cancel </Button>
      </Form>
        </div>
        )}
   </>
    );
};

export default AddModal
