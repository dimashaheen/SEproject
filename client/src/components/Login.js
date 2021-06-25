import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, FormGroup, ButtonGroup, Label } from 'reactstrap';
import { withRouter } from 'react-router';

class Login extends Component {
  state = { 
          email: String,
          users: []
      
  }

async componentDidMount () {
  const UserName = this.state.UserName //localStorage.getItem('Email')
  fetch("http://localhost:5000/api/login/" + UserName)
  .then(res => res.json())
  .then(
    (users) => {

      if (users.error) {
          alert('Error from database')
          console.log(users.error)
          return 
      }


      console.log(users)
      this.setState({ users });

    },
    (error) => {
      
      alert('Error fetching data')
      console.log(error)
      
    })


}
        
     render()
    {

        return (
            <div>
                <InputGroup>
                <Input placeholder="username" />
                <InputGroupAddon addonType="append">
                <InputGroupText>@giu-uni.de</InputGroupText>
                </InputGroupAddon>
                </InputGroup>
             <br />
                <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" name="password" id="examplePassword"  />
                </FormGroup>
                <ButtonGroup>
                <Button>Submit</Button>
                </ButtonGroup>
            </div>
  )
}

}

export default withRouter(Login);
