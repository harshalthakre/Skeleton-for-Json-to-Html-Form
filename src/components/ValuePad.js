import React,{Component} from 'react';

export default class ValuePad extends Component{
  //{this.props.fieldValue}

  render(){
    return(
      <div style={
        {display:'inline-block',
        border:'1px solid #e0e0e0',
        paddingLeft:'5px',
        paddingRight:'2px',
        margin:'3px',
        marginLeft:'12px',
        backgroundColor:'White',
        color:'#424242',
        width:'220px',
        height:'50px',
        borderRadius: '7px'}
      }>
        <h4> {this.props.fieldValue}</h4>
      </div>
    );
  }
}
