import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PersonalDetailsForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title='Enter Personal Details' />
                <TextField 
                    hintText='Enter Your Occupation'
                    floatingLabelText='Occupation'
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                />
                <TextField 
                    hintText='Enter Your City'
                    floatingLabelText='City'
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                />
                <TextField 
                    hintText='Enter Your Bio'
                    floatingLabelText='Bio'
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                />
                <RaisedButton 
                    label='Back'
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
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

export default PersonalDetailsForm;
