import React from 'react'
import  "./style1.css"
export default class Counter extends React.Component {
    constructor()
    {
      
        super()
        this.state={
            counter:0
        }
       
    }
        minusFunction()
    {
        this.setState({counter:this.state.counter-1}
            ,
            ()=>{
                console.log(this.state.counter)
            }
        )
        
    }
    plusFunction()
    {
        this.setState({counter:this.state.counter+1}
           
        )
    }

  render() {
   

    return (
      <div className='container1  ' >
        <div><h1 className="display-1">Count : {this.state.counter}</h1></div>
        <div className='main'>
        <button type="button" className="btn btn-outline-success" onClick={this.minusFunction.bind(this)}>-</button>
        
<button type="button" className="btn btn-outline-danger" onClick={ this.plusFunction.bind(this)}>+</button>

        </div>
        
      </div>
    )
  }
}
