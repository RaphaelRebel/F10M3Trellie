import Trellie from '../Components/Trellie/Trellie';
import TrelliesData from '../Data/Trellies'
import "./App.css";
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = { trellies: [] }
  }

  componentDidMount() {
    this.setState({ trellies: TrelliesData })
    console.log(this.state.trellies)
  }

  newInput = (descriptie, id) => {
    let copy = [...this.state.trellies];
    let toBeAdded = 
      {
        id: copy[id - 1].activities.length + 1,
        label: 'Vandaag',
        description: descriptie
      }
    

    copy[id -1].activities.push(toBeAdded)

    this.setState({ trellies: copy })
    console.log(this.state.trellies)
  }
  render() {

    let x = this.state.trellies.map(object => {
      return (<Trellie id={object.id} newInput={this.newInput} key={object.id} trellie={object} />)
    });
    return (
      <>
        {x}
      </>
    )


  }
}

export default App;