import { useState,useEffect } from "react"
import './DatingC.css'
import DatingCard from 'react-tinder-card'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import StarIcon from '@material-ui/icons/Star';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
const DatingC =()=>{
    const [peoples,setPeoples] = useState([])
    useEffect(()=>{
        async function getData(){
            const req = await axios.get('https://dating-app-backend01.herokuapp.com/personne')
            console.log(req.data)
            setPeoples(req.data)
        }
        getData()
    }, [])
    const classes = useStyles();
    const swiped = (direction ,nameToDelete)=>{
        console.log("receiving " + nameToDelete)
    }
    const outOfFrame =(name)=>{
        console.log(name +"Left Screen")
    }
    return(
        <div className="datingc">
            <div className="datingC__container">
                {
                    peoples.map((person)=>{
                        return(
                            <DatingCard
                            key={person.name}
                            className="swipe2"
                            preventSwipe={['up','down']}
                            onSwipe={(dir)=>{swiped(dir,person.name)}}
                            onCardLeftScreen={()=>{outOfFrame(person.name)}}
                            >
                                <Card className="card2">
                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                    }
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                    }
                                    title={person.name}
                                    subheader="September 14, 2016"
                                />
                                 <CardMedia
                                    className={classes.media}
                                    image={person.imgUrl}
                                    title={person.name}
                                />
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                   
                                     <IconButton aria-label="share"color="orange">
                                         <ShareIcon />
                                     </IconButton>
                                    <IconButton>
                                        <FlashOnIcon/>
                                    </IconButton>
                                    <IconButton>
                                       <StarIcon/>
                                    </IconButton>
                                   
                                </CardActions>

                                </Card>
                            </DatingCard>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default DatingC