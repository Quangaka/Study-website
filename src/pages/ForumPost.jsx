import React from 'react'
import { useParams } from 'react-router'
import Post from '../Components/Forum/Post/post'
import post from '../assets/JsonData/posts_forum.json'
import { Divider, Card, CardHeader, CardMedia, CardActions, CardContent, Typography,
        Avatar, IconButton, List, ListItem, ListItemAvatar,ListItemText, Box, TextField, Paper, InputBase } from '@material-ui/core'
import {FavoriteRounded, SettingsRounded, ShareRounded, CommentRounded} from '@material-ui/icons'
import img from '../assets/images/tuat.png'
import imgMain from '../assets/images/school.svg'
import '../assets/css/index.css'


const ForumPost = () => {
    const { id, name }: {id: String, name: String} = useParams();

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar  aria-label="recipe" src={img}>
            
                        </Avatar>
                            }
                    action={
                        <IconButton aria-label="settings">
                            <SettingsRounded />
                        </IconButton>
                            }
                    title="19520930"
                    subheader="September 14, 2021"
                />
                <CardMedia
                    component="img"
                    className='image'
                    image={imgMain}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Câu hỏi ôn tập: Trình bày nội dung cơ bản của chính cương vắn tắt và sách lược vắn tắt của Đảng do lãnh tụ Nguyễn Ái Quốc soạn thảo và đc hội nghị thành lập Đảng Cộng sản Việt Nam ngày 3-2-1930 thông qua
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteRounded />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareRounded />
                    </IconButton>
                </CardActions>
                <Divider variant="fullWidth" />
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src={img}>
                          
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src={img}>
                          
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src={img}>
                          
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem  style={{ marginTop: `10px` }}>
                      <ListItemAvatar>
                        <Avatar src={img}>
                          
                        </Avatar>
                      </ListItemAvatar>
                      <input fullWidth={true} className="comment_forum_custom" type='text' placeholder="Comment" />
                    </ListItem>
              </List>
            </Card>
        </div>
    )
}

export default ForumPost
