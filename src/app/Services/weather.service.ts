export interface Weather {
  id: number;
  city: String;
  country: String;
  temp: String;
  humidity: String;
  wind: String;
  description: String;
  image: String;
}
  
export class WeatherService {
  weatherConditions: any[] = [];
  weather = [
    {
      id: 1,
      city: 'London',
      country: 'UK',
      temp: '20',
      humidity: '50',
      wind: '10',
      description: 'Overcast',
      image: 'https://media.istockphoto.com/photos/london-the-houses-of-parliament-and-the-big-ben-picture-id532467067?k=20&m=532467067&s=612x612&w=0&h=Yd7B4gwNl7Avp-3EvB0V10X6CUNdfou7JPXJCEm88Dk='
    },
    {
      id: 2,
      city: 'Paris',
      country: 'France',
      temp: '20',
      humidity: '50',
      wind: '10',
      description: 'Sunny',
      image: 'https://welove.expedia.co.jp/wp-content/uploads/2019/02/2019_02_01.jpg'
    },
    {
      id: 3,
      city: 'Berlin',
      country: 'Germany',
      temp: '-20',
      humidity: '50',
      wind: '10',
      description: 'Snowing',
      image: 'https://media.istockphoto.com/photos/snow-covered-country-road-in-the-german-alps-picture-id1297589893?k=20&m=1297589893&s=612x612&w=0&h=z6TqX5cmJ5AniyzOLUVwyOcet1QBVp85cHVHZP2d9u4='
    }
  ]

  getWeather(){
    return this.weatherConditions = this.weather.slice();
  }
}