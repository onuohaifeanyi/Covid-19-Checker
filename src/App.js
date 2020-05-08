import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png';

import logoImage from './images/logo.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }
  
  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
        <footer className={styles.footer}>
          <div className={styles.innerfooter}>
           <div className={styles.logocontainer}>
            <h1>Powered By</h1>
             <img src={logoImage} alt="LOGO" />
           </div>

           <div className={styles.thirdfooter}>
             <h1>Why This App?</h1>
              <p>Data is our most powerful weapon in the fight against COVID-19.</p>
           </div>

           <div className={styles.thirdfooter}>
             <h1>Created By</h1>
              <p>Onuoha Ifeanyi</p>
           </div>

           <div className={styles.thirdfooter}>
             <h1>Email</h1>
              <p>Princeluiz949@gmail.com</p>
           </div>
          
          </div>
        </footer>
      </div>
    )
  }
}

export default App;