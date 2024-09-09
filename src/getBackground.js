import cloudy from './images/cloudy.jpg';
import sunny from './images/sunny.jpg'
import partlycloudy from './images/partlycloudy.jpeg'
import clear from './images/clear.jpg'
import mist from './images/JFDZ7U577FFBTCTSLUKDQDSAYQ.png'

export const getBackgroundImage = (condition) => {
    switch(condition){
        case 'Sunny':
            return sunny;
        case 'Partly cloudy':
            return partlycloudy;
        case 'Cloudy':
            return cloudy;
        case 'Overcast':
            return cloudy;
        case 'Light rain':
            return cloudy;
        case 'Clear':
            return clear;
        case 'Mist':
            return mist;
        case 'Patchy rain possible':

            break;
        case 'Patchy snow possible':

            break;
        case 'Patchy sleet possible':

            break;
        case 'Patchy freezing drizzle possible':

            break;
        case 'Thundery outbreaks possible':

            break;
        default:
            return '';
    }
}