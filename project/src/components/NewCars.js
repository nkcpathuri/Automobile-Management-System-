import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import one from './audi2.jpg'
import two from './bmw.jpg'
import three from './benz.jpg'
import { Button } from '@mui/material';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function Id() {

  return (<div  >
    <h1>Select Vechicle of Your Choice </h1>
    <div style={{display:'flex',flexWrap:'noWrap'}}>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :9}}>
      
      <CardMedia
      
        sx={{ maxWidth: 290 }}
        component="img"
        alt="man"
        height="250"
        image={one}
      />
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
        <b>AUDI</b><br></br>
        <b>Model Number: Audi A4 </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Price:₹ 50.99 Lakh</b><br></br>
          <b>Available: Yes</b>
          <br></br>
          <Link to="/add">
          <button >Buy</button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :8}}>
      <CardMedia
        sx={{ maxWidth: 300 }}
        component="img"
        alt="man"
        height="250"
        image={two}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>BMW</b><br></br>
        <b>Model Number: BMW X6 </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Price:₹ 1.11 Crore</b><br></br>
                    <b>Available: Yes</b><br></br>
          <Link to="/add">
          <button >Buy</button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :8}}>
      <CardMedia
        sx={{ maxWidth: 290 }}
        component="img"
        alt="man"
        height="250"
        image={three}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>Benz</b><br></br>
        <b>Model Number: C-Class </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Price:₹ 61.00 Lakh</b><br></br>
                    <b>Available: Yes</b>
          <br></br>
          <Link to="/add">
          <button >Buy</button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    <br/>
    
    </div>
    <h3>Copy Rights Reserved By Manvith Chandra</h3>
    </div>
    
  );
}