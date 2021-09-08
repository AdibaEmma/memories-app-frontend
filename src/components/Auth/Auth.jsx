import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'

import useStyles from './styles'

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
                                        <TextField name="firstName" label="First Name" autoFocus xs={6} onChange ={onInputChange} />
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
