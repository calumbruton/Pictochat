import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from "react-router-dom";

import HomePage from '../pages/homePage';

class LoginPanel extends Component {
    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
          password: '',
          email: '',
          redirectToHomePage: false
        };
      }
    
    onFormSubmit() {
        this.callApi()
            .then(res => {
              console.log(res[0].count)
              if(parseInt(res[0].count) === 1){
                //Route to other page
                this.setState({redirectToHomePage: true})
                console.log("Route to landing page!")
              }
              else {
                //Show modal on landing page passed from props
                console.log("Not in the database")
              }
            })
            .catch(err => console.log(err))
      }

      callApi = async () => {
        const response = await fetch(`/users/${this.state.email}/${this.state.password}`);
        const body = await response.json();
        console.log(response)
        if (response.status !== 200) throw Error(body.message);
        return body;
      };
    
      render() {
        return (
          this.state.redirectToHomePage ? <Redirect to={{pathname: "/home"}} /> : 
          <div>
            <Form onSubmit={this.onFormSubmit}>
              <FormGroup>
                <Label>Email:</Label>
                <Input
                  type="text"
                  name="text"
                  placeholder="JohnDoe@gmail.com"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label>Password:</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="*******"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </FormGroup>
              <Button type="submit" color="primary">Submit</Button>
            </Form>
          </div>
        );
      }
    }
    

export default LoginPanel;
