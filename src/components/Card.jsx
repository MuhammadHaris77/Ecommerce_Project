import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SingleCard({ title, description, src ,brand,category,func}) {
    return (
     <Card sx={{ maxWidth:320,height:400,margin:'4px'  }}>
            <CardMedia
                sx={{ height: 160 }}
                image={src}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#263238' }}>
                    <b>Brand :</b>{brand}
                </Typography>
       
                <Typography variant="body2" sx={{ color: '#263238' }}>
                   <b>Description :</b> {description && description.slice(0,60)}...
                </Typography>
               
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {category}
                </Typography>
       
            </CardContent>
            <CardActions sx={{justifyContent:'center'}}>
                <Button variant="contained"  sx={{ color: 'black',background: '#bf360c' }} onClick={func} >Show More</Button>
            </CardActions>
        </Card>


 
      );
}
