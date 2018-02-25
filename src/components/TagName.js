import React,{Component} from 'react';

export default class TagName extends Component{
  constructor(props){
    super(props);
    this.x=this.props.xdirect;
  }

  render(){
    return(
      <div style={
        {display:'inline-block',

        padding:'5px',
        margin:'3px',
        marginLeft:this.x,
        
        color:'#424242',
        width:'220px',
        borderRadius:'7px'}
      }>
        <h4>{this.props.field}: </h4>
      </div>
    );
  }
}
