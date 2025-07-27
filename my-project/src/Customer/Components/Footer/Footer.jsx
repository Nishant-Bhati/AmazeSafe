import React from 'react'
import { Grid } from '@mui/material'
import { Typography, Button } from '@mui/material'
const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10 ' container spacing={16}
                sx={{bgcolor: 'black', color: 'white' ,py: 3}}>
                <Grid item xs={12} sm={6} md={3} sx={{px: 2}}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Director</Button>
                        </div>
                    <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Stores</Button>
                        </div>
                    <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Privacy Policy</Button>
                        </div>
                    
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{px: 2}}>
                    <Typography className='pb-5' variant='h6'>Products</Typography>
                    <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Almirah</Button>
                        </div>
                        <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Office Furniture</Button>
                        </div>
                        <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Institutional Furniture</Button>
                        </div>
                        <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Metalworks & Fixtures</Button>
                        </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{px: 2}}>
                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Privacy Policy</Button>
                        </div>
                        <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Terms & Conditions</Button>
                        </div>
                        <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Return Policy</Button>
                        </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{px: 2}}>
                    <Typography className='pb-5' variant='h6'>Contact Us</Typography>
                    <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Address</Button>
                        </div>
                        <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Phone</Button>
                        </div>
                        <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Whatsapp</Button>
                        </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{px: 2}}>
                    <Typography className='pb-5' variant='h6'>Social Media</Typography>
                    <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Facebook</Button>
                        </div>
                        <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Instagram</Button>
                        </div>
                        <div>
                        <Button className='pb-3' variant='body2' gutterBottom>Twitter</Button>
                        </div>
                </Grid>
                
            </Grid>
            <Grid item xs={12} className='bg-black text-white pt-4'>
                    <Typography variant='body2' component='p' textAlign='center'>© 2018 AmazeSafe. All rights reserved</Typography>
                    <Typography variant='body2' component='p' textAlign='center'>Made with love by rajputnishant403@gmail.com</Typography>
                    <Typography variant='body2' component='p' textAlign='center'>Icons made by <a style={{color:'inherit', textDecoration:'underline'}} href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></Typography>
                    <Typography variant='body2' component='p' textAlign='center'>Icons made by <a style={{color:'inherit', textDecoration:'underline'}} href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a></Typography> 
            </Grid>
        </div>
    );
};

export default Footer;