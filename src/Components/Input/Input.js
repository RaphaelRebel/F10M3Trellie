import "./Input.css"
import React from "react"


class Input extends React.Component {

         constructor(props){
                  super(props)
                  this.state = {input: ''}
         }

         changeInput = (event) => {
                   this.setState({input: event.target.value})

         }

         onInputSubmit = (event) => {
                  event.preventDefault()
                  if(this.state.input !== ''){
                  this.props.newInput(this.state.input, this.props.id)
                  this.setState({input: ''})
                  }
         }
         render() {
                  return (
                           <>
                                    <form onSubmit={this.onInputSubmit} action="" className="input">
                                             <label htmlFor="input" className="input__label">Nieuwe activiteit</label>
                                             <input value={this.state.input} onChange={this.changeInput} id="input" className="input__input" type="text" placeholder="Boodschappen">

                                             </input>
                                    </form>

                           </>
                  )

         }
}

export default Input