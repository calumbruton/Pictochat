import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class LoginPanel extends Component {
    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
          password: '',
          email: ''
        };
      }
    
    onFormSubmit() {
        this.callApi()
            .then(res => alert(JSON.stringify(this.state, null, '  ')))
            .catch(err => console.log(err))
      }

      callApi = async () => {
        const response = await fetch('/users');
        const body = await response.json();
        alert(JSON.stringify(body, null, '  '))
        if (response.status !== 200) throw Error(body.message);
        return body;
      };
    
      render() {
        return (
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
