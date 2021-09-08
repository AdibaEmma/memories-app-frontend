import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import useStyles from './styles'
import Input from './Input'

const Auth = () => {
    const classes = useStyles() 

    const isSignUp = false;

    const onInputChange = () => {

    }

    const onFormSubmit = () => {

    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon /> 
                    </Avatar>
                    <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={onFormSubmit}>
                        <Grid container spacing={2}>
                            {
                                isSignUp && (
                                    <>
                                        <Input name="firstName" label="First Name" autoFocus onInputChange={onInputChange} half />
                                        <Input name="lastName" label="Last Name" onInputChange={onInputChange} half />
                                    </>
                                )
                            }
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Auth
