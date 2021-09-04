import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
function App() {
  return (
    <Container>
      <AppBar>
        <Typography>Memories</Typography>
      </AppBar>
      <Grow>
        <Container>
          <Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
