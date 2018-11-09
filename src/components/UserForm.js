import React, { Component } from 'react';
import UserDetailForm from './UserDetailsForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
    state ={
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Proceed to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step -  1
        });
    }

    //Handle fields value changes
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    render() {
        const { step } = this.state;
        const { firstname, lastname, email, occupation, city, bio } = this.state;
        const values = { firstname, lastname, email, occupation, city, bio };
        
        switch(step) {
            case 1:
                return(
                    <UserDetailForm 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <PersonalDetailsForm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return(
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return(
                    <Success />
                )
        }

    }
}

export default UserForm;
