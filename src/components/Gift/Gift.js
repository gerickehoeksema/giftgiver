import React, { Component } from 'react'
import { Form, FormGroup, FormControl, FormLabel , Button } from 'react-bootstrap';

class Gift extends Component{
    constructor() {
        super()

        this.state = {
            person: '',
            present: ''
        }
    }

    updatePerson = (value) => {
        this.setState({person: value})
    }

    render(){
        return (
            <div>
                <Form>
                    <FormGroup>
                        <FormLabel >Person</FormLabel >
                        <FormControl 
                            className="person-input" 
                            onChange={event => this.updatePerson(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel >Present</FormLabel >
                        <FormControl 
                            className="present-input"
                            onChange={event => this.setState({present: event.target.value})}
                        />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Gift