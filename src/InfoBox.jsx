import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({Info}){
    const INIT_URL = "https://images.unsplash.com/photo-1637443719654-04e839df3aa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtb2tlJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const COLD_URL ="https://images.unsplash.com/photo-1480775661506-541bb9d526b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFJBSU58ZW58MHx8MHx8fDA%3D";


    return(
        <div className ="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity > 80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
          {Info.humidity > 80 ? <ThunderstormIcon /> : Info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon /> }

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
          <p>Temparature = {Info.temp}&deg;C</p>
          <p>Humidity = {Info.humidity}</p>
          <p>Min Temp = {Info.tempMin}&deg;C</p>
          <p>Max Temp = {Info.tempMax}&deg;C</p>
          <p>Weather can described as <i>{Info.weather}</i> and feelsLike {Info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}