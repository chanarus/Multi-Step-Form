import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class UserDetailsForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title='Enter User Details' />
                <TextField 
                    hintText='Enter Your First Name'
                    floatingLabelText='First Name'
                    onChange={handleChange('firstname')}
                    defaultValue={values.fristname}
                />
                <TextField 
                    hintText='Enter Your Last Name'
                    floatingLabelText='Last Name'
                    onChange={handleChange('lastname')}
                    defaultValue={values.lastname}
                />
                <TextField 
                    hintText='Enter Your Email'
                    floatingLabelText='Email'
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <RaisedButton 
                    label='Continue'
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
            </React.Fragment>            
        </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default UserDetailsForm;
