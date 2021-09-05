import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'

import useStyles from './styles'

const Form = () => {
    const classes = useStyles()
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: [],
        selectedFile: ''
    })

    const onInputChange = (e, field) => setPostData({ ...postData, [field]: e.target.value }) 

    const handleSubmit = () => {

    }

    const clear = () => {
        
    }
    console.log(postData);
    return (
        <Paper className={classes.paper}>
            <form action="" autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={e => onInputChange(e, 'creator') } />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={e => onInputChange(e, 'title') } />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={e => onInputChange(e, 'message') } />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={e => onInputChange(e, 'tags') } />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
