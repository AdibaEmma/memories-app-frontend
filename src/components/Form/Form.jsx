import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'

import useStyles from './styles'
import { create_post, update_post } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles()
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: [],
        selectedFile: ''
    })

    const post = useSelector((state ) => currentId ? state.posts.find(post => post._id === currentId) : null)
    const user = useSelector((state ) => state?.auth?.authData?.result)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const onInputChange = (e, field) => setPostData({ ...postData, [field]: e.target.value }) 

    const handleSubmit = (e) => {
        e.preventDefault();
        if( currentId ) {
            console.log('update post');
            dispatch(update_post(currentId, postData ))
        } else {
            dispatch(create_post({...postData, name: user?.name}, history))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({creator: '', title: '', message: '', tags: [], selectedFile: ''})
    }
    
    return (
        <Paper className={classes.paper}>
            <form action="" autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} data-netlify="true">
                <Typography variant="h6">{ currentId ? 'Edit' : 'Create'} a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={e => onInputChange(e, 'creator') } />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={e => onInputChange(e, 'title') } />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={e => onInputChange(e, 'message') } />
                <TextField name="tags" variant="outlined" label="Tags(comma seperated)" fullWidth value={postData.tags} onChange={e => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>{ currentId ? 'Update' : 'Submit'}</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
