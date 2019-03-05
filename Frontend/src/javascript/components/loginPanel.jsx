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
    
    async onFormSubmit() {
        // this.callApi()
        fetch(`/users/${this.state.email}/${this.state.password}`)
          .then(res => {
            console.log("here")
            const body = res.json();
            console.log(body)
            return body
          })
          .then(res => {
              console.log(res)
              console.log("waited", res)
              console.log(res.length)
              if(parseInt(res.length) === 1){
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

      async callApi() {
        console.log(`/users/${this.state.email}/${this.state.password}`)
        await fetch(`/users/${this.state.email}/${this.state.password}`)
          .then(response => {
            console.log("here")
            const body = response.json();
            console.log(response, body)
            return Promise.resolve(body);
          })
          .catch(err => {
            throw Error(err);
        })
      };
    
      render() {
        return (
          this.state.redirectToHomePage ? <Redirect to={{pathname: "/home"}} /> : 
          <div>
            <Form>
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
            </Form>
            <button className="submit" onClick={() => this.onFormSubmit()}>Submit</button>
          </div>
        );
      }
    }
    

export default LoginPanel;
