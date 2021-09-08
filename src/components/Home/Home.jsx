import { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import useStyles from '../../styles'
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { fetch_posts } from '../../actions/posts';

const Home = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
  
    const [currentId, setCurrentId] = useState(null)
  
    useEffect(() => {
      dispatch(fetch_posts())
    }, [currentId, dispatch])

    return (
        <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home
