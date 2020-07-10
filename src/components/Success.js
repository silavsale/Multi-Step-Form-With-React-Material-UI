import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Success'/>
                    <h1>Thanks You For Your Submission</h1>
                    <p>You will get an email with further insturctions</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
