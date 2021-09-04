import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
      </AppBar>
      <Grow>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
