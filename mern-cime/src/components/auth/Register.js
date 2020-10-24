import React, {useState, useContext} from 'react';
import userContext from "../../context/userContext";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'


import ErrorNotice from "../../misc/ErrorNotice";
import '../../App.css';

import Axios from 'axios';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


export default function Register() {
    const classes = useStyles();

    const [policeno, setPoliceno] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayname] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext (userContext);

    const submit = async (e) => {
        e.preventDefault();

        try{
        const newUser =
         {
             policeno, 
             password, 
             passwordCheck, 
             displayName
        };

        //await Axios.post ("http://localhost:5000/users/register", newUser );
        //******* */
        console.log(newUser);
        await Axios.post("http://localhost:5000/users/register", newUser)
        .then(res => console.log(res));
        

        const loginRes = await Axios.post("http://localhost:5000/users/login",{
            policeno, 
            password
        });
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        //this.props.history.push("/");
        window.location = "/"; 
      } catch (err){
        err.response.data.msg && setError(err.response.data.msg);
      }

    };

    const mystyle2 = {
      color: "black",
      padding: "5px",
      fontFamily: "Jam Sessions Personal Use",
      fontSize:"30px",
    };

  
    return (
<>
      <div className="box">
      <div className="login container" >
       
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <div style={mystyle2}>Register as a Police Officer.</div>
        </Typography>


        {error && (<ErrorNotice message={error} clearError={() => setError(undefined)}/>)}

       

        <form onSubmit= {submit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="policeno"
                label="Police Reference Number"
                name="policeno"
                autoComplete="policeno"
                onChange={(e) => setPoliceno(e.target.value)}
               
               
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordcheck"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="displayname"
                label="Full Name"
                type="text"
                id="displayname"
                autoComplete="displayname"
                onChange={(e) => setDisplayname(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I am a new Police Officer Recruit."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </div>
    </div>
    <div>
      <br/><br/><br/>
    </div>
    </>
  );
    
}