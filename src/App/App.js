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