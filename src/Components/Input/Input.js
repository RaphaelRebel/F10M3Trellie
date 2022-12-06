import "./Input.css"
import { connect } from "react-redux"


const Input = (props) => {
    const changeInput = (event) => {
        props.setInputValueFromRedux(event.target.value);
    }

    const onInputSubmit = (event) => {
        event.preventDefault()
        if (props.inputValueFromRedux !== '') {
            props.newInput(props.inputValueFromRedux, props.id)

        }
    }

    return (
        <>
            <form onSubmit={onInputSubmit} action="" className="input">
                <label htmlFor="input" className="input__label">Nieuwe activiteit</label>
                <input value={props.inputValueFromRedux} onChange={changeInput} id="input" className="input__input" type="text" placeholder="Boodschappen">

                </input>
            </form>

        </>
    )


}

let mapStateToProps = (state) => {
    console.log(state)
    return {
        inputValueFromRedux: state.input
    }
}

const mapDispatchProps = (dispatch) => {
    return{
        setInputValueFromRedux: (payload) => dispatch({type: "test", payload:payload})
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Input)