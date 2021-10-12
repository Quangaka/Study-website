import React from 'react'
import {IconButton, TextField, Button, InputAdornment, Grid, Box, Paper, Typography } from '@mui/material'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GroupsIcon from '@mui/icons-material/Groups';
import ImageRec from '../../assets/images/Rectangle.png'

import useStyles from './styles'

const OnlineLearning = () => {

    const classes = useStyles()

    return (
        <Grid container position="relative" component="main" sx={{ height: '60vh'}}>
        <Grid>
            <div className={classes.container} container spacing={5} item xs={12} sm={8} md={4} sx={{marginTop: '50px', marginLeft: '220px'}}> 
                <div className={classes.buttonContainer} >
                    <Button className={classes.button} aria-label="New meeting" spacing={3} startIcon={ <VideoCallOutlinedIcon/> }
                        sx={{bgcolor: 'rgba(247,203,21, 0.8)', color:'black', }}>                  
                        New meeting  
                    </Button>
                </div>
                <div className={classes.insertTextField}>
                    <TextField id="outlined-basic" label="Insert code" variant="outlined" 
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="start">
                                <KeyboardAltOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}/>
                </div>
                <div className={classes.searchTextField}>
                    <TextField id="outlined-basic" label="Search" type="search" variant="outlined" sx={{width: '100%'}}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon />
                                </InputAdornment>
                                ),
                            }}/>
                </div>
            </div>
        </Grid>
        
        <Grid className={classes.meetingContainer} item xs={12} sm={8} md={3} component={Paper} elevation={6} square 
            sx={{marginTop: '150px', marginLeft: '50px', height: '200px',}}>
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                < MoreHorizIcon sx={{ color: 'black', marginTop: '-60px', marginLeft: '350px'}} />
                <img src={ImageRec} alt="rec" sx={{marginTop: '50px', }}  />
                <div className={classes.buttonCreateContainer} >
                    <Button className={classes.button} aria-label="New meeting" spacing={10} startIcon={<GroupsIcon/>}
                        sx={{bgcolor: 'rgba(247,203,21, 0.8)', color:'black', }}>
                        New meeting  
                    </Button>
                </div>
            </Box>
        </Grid>
        <Grid className={classes.meetingContainer} item xs={12} sm={8} md={3} component={Paper} elevation={6} square 
            sx={{marginTop: '150px', marginLeft: '50px', height: '200px',}}>
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                < MoreHorizIcon sx={{ color: 'black', marginTop: '-60px', marginLeft: '350px'}} />
                <img src={ImageRec} alt="rec" sx={{marginTop: '50px', }}  />
                <Typography sx={{ marginTop: '20px', fontWeight: 'bold', color: 'black',}}>KTPM 2019</Typography>
            </Box>
        </Grid>
        <Grid className={classes.meetingContainer} item xs={12} sm={8} md={3} component={Paper} elevation={6} square 
            sx={{marginTop: '150px', marginLeft: '50px', height: '200px',}}>
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                < MoreHorizIcon sx={{ color: 'black', marginTop: '-60px', marginLeft: '350px'}} />
                <img src={ImageRec} alt="rec" sx={{marginTop: '50px', }}  />
                <Typography sx={{ marginTop: '20px', fontWeight: 'regular', color: 'black',}}>KTPM 2019</Typography>
            </Box>
        </Grid>
       </Grid>

    )
}

export default OnlineLearning
