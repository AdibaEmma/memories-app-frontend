import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import useStyles from './styles'
import Input from './Input'

const Auth = () => {
    const classes = useStyles() 
    const [showpassword, setShowPassword] = useState(false)

    const isSignUp = true;

    const onInputChange = () => {

    }

    const handleShowPassword = () => {

    }

    const onFormSubmit = () => {
        setShowPassword(prevValue => !prevValue)
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
                            <Input name="email" label="Email Address" onInputChange={onInputChange} type="email" />
                            <Input name="password" label="Password" onInputChange={onInputChange} type={showpassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            { isSignUp &&<Input name="confirmPassword" label="Repeat Password" onInputChange={onInputChange} type="password" /> }
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Auth
