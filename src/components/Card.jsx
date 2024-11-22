import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function SingleCard({ title, description, src ,brand,category,price,func,addToCart}) {
    return (
     <Card sx={{ width:320,height:420, padding:'3px',margin:'3px'  }} >
            <CardMedia
                sx={{ height: 160 }}
                image={src}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="p" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#263238' }}>
                   <b>Description :</b> {description && description.slice(0,20)}...
                </Typography>
                <Typography variant="body1" sx={{ color: '#263238' }}>
                    <b>Brand :</b>{brand}
                </Typography>        
                <Typography variant="body1" sx={{ color: '263238' }}>
                  <b>Category :</b>  {category}
                </Typography>
                <Typography variant="h6" sx={{ color: 'red' }}>
                  <b>Price : $</b>  {price}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:'center'}}>
                <Button variant="contained"  sx={{ color: 'white',background: '#bf360c' }} onClick={func} >Show More</Button>
                <Button variant="contained"  sx={{ color: 'white',background: '#bf360c' }} onClick={addToCart} >Add to Cart</Button>

            </CardActions>
            <br />
        </Card>


 
      );
}
