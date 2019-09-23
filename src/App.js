import React, { Component } from 'react'
import axios from 'axios';


export class App extends Component {
  //https://swapi.co/api/people/

  state = {
    personer: []
  }

  //Hent data når component er mount/klar
  componentDidMount() {

    //brug axios til at kontakte + hente data fra api
    axios.get('https://swapi.co/api/people/').then(resultat => {
      //console.log(resultat.data.results);

      this.setState({
        personer: resultat.data.results
      });

    });
  }

  render() {

    const allepersoner = this.state.personer;

    //map'er (kortlægger) data - hvordan og hvad der skal vises
    const personListe = allepersoner.map((person, index) => {

      return (
        <div key={index}>
          <b>Navn:</b> {person.name} <b>Højde:</b> {person.height} <b>Født:</b> {person.birth_year}
        </div>
      )
    });

    return (
      <div>

        <h1>Personer</h1>
        {personListe}


      </div>
    )
  }
}

export default App
