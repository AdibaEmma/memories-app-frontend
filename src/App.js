import { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import useStyles from './styles'
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { fetch_posts } from './actions/posts';

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(fetch_posts())
  }, [currentId, dispatch])
  
  return (
    <Container maxWidth="lg">
      <Navbar />
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
    </Container>
  );
}

export default App;
