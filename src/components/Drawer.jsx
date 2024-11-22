import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Badge, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { deleteItem ,addQuantityItem,lessQuantityItem} from '../config/redux/reducer/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';



export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);
    const [showDrawer, setshowDrawer] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const selector = useSelector(state => state.cart.cart)
   
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const email = user.email;
                console.log(email)
                setEmail(email)
                setshowDrawer(true)
            } else {
                navigate('/')
            }
        });

    }, [])

    console.log(selector);
    const totalprice =   selector.reduce((acc,cval)=>{
      return acc + cval.price * cval.quantity
    },0)
  console.log(totalprice)

    const dispatch = useDispatch()
 const deleteItemCart=(item)=>{
     console.log(item)
     dispatch(deleteItem(item))
 }
   const lessItemCart=(item)=>{
    console.log(item)
      dispatch(lessQuantityItem(item))
   }
   const addItemCart=(item)=>{
    console.log(item)
    dispatch(addQuantityItem(item))
 }


    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 410 }} role="presentation" >
            <List>
                <Typography className="text-center" variant='h6' color='#bf360c'>
                <AddShoppingCartIcon/>    Add to Cart Product
                </Typography>
            </List>
            <Divider />
            <List>
                {
                    selector.map((item, index) => {
                        return <div key={index}>
                            <Card sx={{ width: 400, height: 220, padding: '3px', margin: '3px' }} >
                                <CardMedia
                                    sx={{ height: 80, width: 80 }}
                                    image={item.thumbnail}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="p" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="p" sx={{ color: 'black' }}>
                                        Price : $  {item.price}
                                    </Typography>
                                    <br />
                                    <Typography variant="p" sx={{ color: 'black',}} >
                                    Quantity : 
                                        <Button className='m-1' onClick={()=>addItemCart(item)} sx={{ color: 'white', background: '#bf360c' }}><AddBoxIcon /></Button>
                                        <Button className='m-1' sx={{ color: 'white', background: '#bf360c', }}>{item.quantity}</Button>         
                                        <Button className='m-1' onClick={()=>lessItemCart(item)} sx={{ color: 'white', background: '#bf360c' }}><IndeterminateCheckBoxIcon /></Button>
                                        <Button className='m-1' onClick={()=>deleteItemCart(item)} sx={{ color: 'white', background: '#bf360c', }}><DeleteIcon /></Button>
                                    </Typography>

                                </CardContent>
                            </Card>



                        </div>
                    })
                }

            </List>
            {selector.length > 0 &&
                <List>
                    <Typography className="text-start" variant='h4' color='#bf360c'>
                        Total Price: {totalprice.toFixed(2)}$
                    </Typography>
                </List>


            }
            <Divider />


        </Box>
    );

    return (
        <div>

            {showDrawer &&  <div className='d-flex '>
             <Typography className="py-3"  color='#ffff'>
                {email}
                </Typography> 
          
          <IconButton onClick={toggleDrawer(true)} size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={selector.length} color="error">
                <ShoppingBagIcon />
            </Badge>
                </IconButton>
                </div>
            }

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

        </div>
    );
}