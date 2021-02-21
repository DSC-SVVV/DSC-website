import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 620,
  },
  title: {
    flexGrow: 1,
  },
  media: {
    height: 240,
  },
}));

const Home = () => {
  const classes = useStyles();

    return (
      <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Check this out!
          </Typography>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Paper>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://cdn.cdnparenting.com/articles/2020/01/25153910/381833377.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Girl
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.root}>
              <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.ctfassets.net/iyiurthvosft/featured-img-of-post-212048/c2e4c5d617b0eb90a5e25908de4174c6/featured-img-of-post-212048.png?fm=jpg&fl=progressive&q=50&w=1200"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Boy
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      </Paper>
    </Container>
    </>
    );
}

<p> For more details regarding DSC-SVVV visit: <a href="https://linktr.ee/dscsvvv">linktr.ee/dscsvvv</a> </p>

export default Home;
