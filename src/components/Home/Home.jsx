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
        <Grid className={classes.mainContainer} container justifyContent="space-between" spacing={3}>
          <Grid item sm={12} lg={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item sm={12} lg={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home
