import React from 'react'

import imgLogin from '../../assets/images/login.png'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import useStyles from './styles'

const theme = createTheme();

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Login = () =>{

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Grid container position="relative" component="main" sx={{ height: '100vh', backgroundImage: `url(${imgLogin})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}} >
        <CssBaseline />
        {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        /> */}
        <Grid className={classes.loginForm} item xs={12} sm={8} md={4} component={Paper} elevation={6} square sx={{marginTop: '200px', marginLeft: '220px'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{marginLeft: '-370px', fontWeight: 'bold', color: 'rgba(247,203,21, 0.8)'}}>
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'rgba(247,203,21, 0.8)'}}
                className= {classes.signInButton}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link className={classes.link} href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link className={classes.link} href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Typography className={classes.title} variant='h1' sx={{marginLeft: '1000px', marginTop: '-400px', fontWeight: 'bold', }}>
          Study
        </Typography>
      </Grid>
    </ThemeProvider>
  );
}

export default Login