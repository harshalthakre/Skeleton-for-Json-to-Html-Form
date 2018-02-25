import React,{Component} from 'react';
import KeyPad from './KeyPad';
import ValuePad from './ValuePad';
import TagName from './TagName';
import keyValue from './css/keyvalue.css'

export default class BasicApp extends Component{
  constructor(props){
      super(props)
      this.keygen = [];
      this.valuegen=[];
      for(var key in this.props.data){
          this.keygen.push(key);
          this.valuegen.push(this.props.data[key]);
          console.log(typeof(this.props.data[key]))
          //console.log(this.props.data[key] instanceof Array);
          //console.log(this.props.data[key] instanceof Object);
        }

        this.childMera=[];

    }

    calcFunction(SendoData,x){
        for(var key in SendoData){
          if(SendoData[key] instanceof Object!==true){
          this.childMera.push(<div>
            <div className="keyValue">
              <KeyPad field={key} xdirect={x}/>

              <ValuePad fieldValue={SendoData[key]} xdirect={x}/>

            </div>
            </div>);
          }
          else{
            //console.log("its object");
            var hello="myClass";
            this.childMera.push(<TagName field={key} className={hello} xdirect={x}/>)
            //console.log(x);
          //  console.log(x+'50'+'px');
            this.calcFunction(SendoData[key],x+50);
          }
        }
    }
  render(){
    return(
        <div style={
          {border:'1px solid #01579b',
          backgroundColor:'#fafafa',
          padding:'15px',
          margin:'20px',
          marginTop:'5px',
          borderRadius:'5px'}}>
            <div style={
              {
                color:'white',
                backgroundColor:'#1a237e',
                padding:'7px',
                margin:'0px'
              }
            }>
              <h3>Generated Form</h3>
            </div>
          {this.calcFunction(this.props.data,0)}
          {this.childMera}
        </div>
    );
  }
}
