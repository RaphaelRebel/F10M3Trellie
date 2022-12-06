import "./Input.css"
import React from 'react'
import { connect } from "react-redux"


class Input extends React.Component{

    constructor(props){
        super(props)
        this.state = {inputValue: ""}
    }

    componentDidMount(){
console.log(this.props.newInput)
    }

     changeInput = (event) => {
        console.log(event.target.value)
       this.setState({inputValue: event.target.value});
    }

//     onInputSubmit = (event) => {
//         event.preventDefault()
//         if(this.state.inputValue !== ''){
//         this.props.newInput(this.state.inputValue, this.props.id)
//         this.setState({inputValue: ''})
//         }
// }

newInput = (event) => {
    event.preventDefault()
    let copy = [...this.props.trelliesFromRedux];
    let toBeAdded = 
      {
        id: copy[this.props.id - 1].activities.length + 1,
        label: 'Vandaag',
        description: this.state.inputValue
      }
    

    copy[this.props.id -1].activities.push(toBeAdded)

    this.props.setTrelliesFromRedux(copy)
    console.log(this.state.trellies)
  }
render(){
    return (
        <>
            <form onSubmit={this.newInput} action="" className="input">
                <label htmlFor="input" className="input__label">Nieuwe activiteit</label>
                <input value={this.state.inputValue} onChange={this.changeInput} id="input" className="input__input" type="text" placeholder="Boodschappen">

                </input>
            </form>

        </>
    )


}
}

const mapStateToProps = (state) => {
    return{
        trelliesFromRedux: state.trellies,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setTrelliesFromRedux: (payload) => { dispatch({type: 'trellies', payload:payload})}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input)