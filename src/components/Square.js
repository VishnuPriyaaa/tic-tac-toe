import React from 'react';


//class Square extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         value:this.props.value
    //     }
    // }
  const Square = (props) =>{
    return(
              <button className="square" onClick={props.onClick}>
                  {props.value}
              </button>
            
    )
}



export default Square;