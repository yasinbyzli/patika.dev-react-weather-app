import './App.css';
import WeatherWrapper from './components/WeatherWrapper';
import { CityProvider } from './context/CityContext';
import { WeatherProvider } from './context/WeatherContext';

function App() {

  return (
    <div className="container">
      <CityProvider>
        <WeatherProvider>
          <WeatherWrapper />
        </WeatherProvider>
      </CityProvider>
    </div>
  );
}

export default App;
