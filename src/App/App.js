import Trellie from '../Components/Trellie/Trellie';
import TrelliesData from '../Data/Trellies'
import "./App.css";
import React from 'react';
import {connect} from 'react-redux'

class App extends React.Component {

  constructor(props) {
    super(props)
  }



  componentDidMount() {
    this.props.setTrelliesFromRedux(TrelliesData)
  }

  newInput = (descriptie, id) => {
    let copy = [...this.props.trelliesFromRedux];
    let toBeAdded = 
      {
        id: copy[id - 1].activities.length + 1,
        label: 'Vandaag',
        description: descriptie
      }
    

    copy[id -1].activities.push(toBeAdded)

    this.props.setTrelliesFromRedux(copy)
    console.log(this.state.trellies)
  }
  render() {

    let x = this.props.trelliesFromRedux.map(object => {
      return (<Trellie id={object.id} newInput={this.newInput} key={object.id} trellie={object} />)
    });
    return (
      <>
        {x}
      </>
    )


  }
}

const mapStateToProps = (state) => {
  return {
    trelliesFromRedux : state.trellies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTrelliesFromRedux: (payload) => dispatch({type: "trellies", payload: payload})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);