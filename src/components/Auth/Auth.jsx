import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import useStyles from './styles'
import Input from './Input'
import Icon from './icon'
import { signin, signup } from '../../actions/auth'

const Auth = () => {
    const classes = useStyles() 
    const [showpassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''})
    const dispatch = useDispatch()
    const history = useHistory()


    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleShowPassword = () => {
        setShowPassword(prevValue => !prevValue)
    }

    const switchMode = () => {
        setIsSignUp(prevValue => !prevValue)
        setShowPassword(false)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(isSignUp) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
        
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({ type: 'AUTH', payload: {result, token }})
            history.push('/')
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = err => {
        console.log(err);
        console.log('Google Sign In was unsuccessful.Try Again Later');
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
                        <GoogleLogin
                            clientId="144944601075-qc2knjcb5oti2vpk0m6jciorn29g82um.apps.googleusercontent.com"
                            render={
                                renderProps => (
                                    <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                        Google Sign In
                                    </Button>
                                )
                            }
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Auth
