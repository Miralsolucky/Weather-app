import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}) {
    const INIT_URL="https://images.unsplash.com/photo-1450005601738-ad61825d7281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsdWUlMjBza3l8ZW58MHx8MHx8fDA%3D" 
    // let info ={
    //     city:"Diu",
    //     feelslike: 26.58,
    //     humidity: 34,
    //     temp: 26.99,
    //     tempMax: 26.99,
    //     tempMin: 26.99,
    //     weather: "clear sky"
    // };

    const HOT_URL="https://images.unsplash.com/photo-1581224463294-908316338239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bm55JTIwc3VufGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1643285925590-f859ea6d964f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D";   

    return(


        <div className="Infobox">
            <br /> <br />



<div className="card">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL 
          : info.temp>20
          ? HOT_URL
          :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity>80 
          ? <ThunderstormIcon/>
          : info.temp>20
          ? <WbSunnyIcon/>
          :<AcUnitIcon />
          }
      





        </Typography>
        <Typography variant="body2"
         sx={{ color: 'text.secondary'  } } component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Max Tempereature = {info.tempMax}</p>
          <p>Min Temperature = {info.tempMin}</p>
          <p>Humidity = {info.humidity}</p>
          <p>The weather ca be described as 
            <i>{ info.weather} </i> and feels like  <i>  {  info.feelslike} </i>
            </p>
          
          
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    )
    
}