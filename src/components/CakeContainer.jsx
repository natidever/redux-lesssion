import React from 'react'
import {buycake} from '../redux'
import { Connect, connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
      <h1>Number of cake in the Store{props.numberOfCake}</h1>
      <button onClick={props.buycake()} type="button">Buy cake</button>
     </div>
  )
}

const mapStateToPro = state=>{
  return{
    numberOfCake:state.numberOfCake
  }
}

const mapDispatchToProps  = dispatch=>{
  return{
    buycake:()=>dispatch(buycake())
  }
}
export default Connect(mapStateToPro,mapDispatchToProps)( CakeContainer)
