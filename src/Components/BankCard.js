import  React, {Component} from 'react';
import '../Styles/Payment.css'
import Footer from './Footer'
import axios from 'axios';

export default  class Bankcard extends  Component{

  

  constructor(props) {
    super(props);
    this.onChangebName = this.onChangebName.bind(this);
    this.onChangecNumber = this.onChangecNumber.bind(this);
    this.onChangeexMonth = this.onChangeexMonth.bind(this);
    this.onChangeexpYear = this.onChangeexpYear.bind(this);
    this.onChangecvv = this.onChangecvv.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      bName: '',
      cNumber: '',
      exMonth:'',
      expYear:'',
      cvv:''
       
        
    
    }
}
onChangebName(e){
    this.setState( {
      bName: e.target.value
    });
}
onChangecNumber(e){
    this.setState( {
      cNumber: e.target.value
    });
}
onChangeexMonth(e){
    this.setState( {
      exMonth: e.target.value,
    });
}
onChangeexpYear(e){
    this.setState( {
      expYear: e.target.value
    });
}
onChangecvv(e){
    this.setState( {
      cvv: e.target.value
    });
}



onSubmit(e){
    e.preventDefault();
    const obj = {
      bName : this.state.bName,
      cNumber : this.state.cNumber,
      exMonth : this.state.exMonth,
      expYear : this.state.expYear,
      cvv : this.state.cvv
       
       
    };
    if(this.state.expYear.length > 23){
    if(this.state.exMonth.length <= 12){
                if(this.state.cNumber.length === 12){
                  if(this.state.cvv.length === 3){
                  
                        axios.post('http://localhost:4000/payment/add',obj)
                            .then(res => {
                                alert("add Successfully");
                                      this.setState({
                                        bName: '',
                                        cNumber: '',
                                        exMonth:'',
                                        expYear:'',
                                        cvv:''
                                                      
                        
                                })
                                console.log(res.data)});
                        this.props.history.push('/BankCardView');
                  
        window.location.replace('/BankCardView');
                    
                } 
                else {
                    alert('Pleace enter valid card number.');
                }
              } 
              else {
                  alert('Pleace enter valid card number.');
              }
            } 
            else {
                alert('Pleace enter valid month.');
            }
          } 
          else {
              alert('Pleace enter valid year. ');
          }
  
    
    
}



    render() {
  return (
    <div>
        <div className='Payment'>
   
        <form onSubmit={this.onSubmit}>
          <div className="title">
            <p>Payment</p>
          </div>
      
        <div className="basic-info">
          <label style={{color: "red"}}>Bank Name</label>
            <input type="text" required value={this.state.bName} onChange = {this.onChangebName}/>
        </div>  
        
        <div className="basic-info">
          <label style={{color: "red"}}>Credit card number</label>
            <input type="text" required value={this.state.cNumber} onChange = {this.onChangecNumber}/>
        </div> 

        <div className="basic-info">
          <label style={{color: "red"}}>Exp month**</label>
            <input type="number" required value={this.state.exMonth} onChange = {this.onChangeexMonth}/>
        </div>
<div className="basic-info"> 
  <div className='checkout'>
    <label style={{color: "red"}}>Exp year**</label>
    <input type="number" id="checkout-day" min="2020" max="2028" required value={this.state.expYear} onChange = {this.onChangeexpYear}/>
  </div>
</div>

<div className="basic-info">
    <label style={{color: "red"}}>CVV***</label>
    <input type="text" required value={this.state.cvv} onChange={this.onChangecvv}/>
</div>

        
        <button className='submit' type="submit">Add Card details</button>
      </form>
      <Footer />
    </div>
    </div>
  )
}
}