import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import Footer from "./Footer";
import axios from 'axios';


export default class SpecialPayments extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        Hotel: "",
        vehicle: "",
        room: "",
        treatement: "",
        Qty: "",
        status: "",
        price: "",
        email: this.props.match.params.id,
      };
  
      this.onChangeHotel = this.onChangeHotel.bind(this);
      this.onChangevehicle = this.onChangevehicle.bind(this);
      this.onChangeroom = this.onChangeroom.bind(this);
      this.onChangetreatement = this.onChangetreatement.bind(this);
      this.onChangeQty = this.onChangeQty.bind(this);
      this.onChangeemail = this.onChangeemail.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    componentDidMount() {
      axios
        .get("http://localhost:4000/appointment/sedit/" + this.props.match.params.id)
        .then((res) => {
          this.setState({
            Hotel: res.data.Hotel,
            vehicle: res.data.vehicle,
            room: res.data.room,
            treatement: res.data.treatement,
            Qty: res.data.Qty,
            status: res.data.status,
            price: res.data.price,
            email: res.data.email,
          });
        })
        .catch((error) => {
          console.log("Error fetching data: ", error);
        });
    }
  
    onChangeHotel(e) {
      this.setState({
        Hotel: e.target.value,
      });
    }
  
    onChangevehicle(e) {
      this.setState({
        vehicle: e.target.value,
      });
    }
  
    onChangeroom(e) {
      this.setState({
        room: e.target.value,
      });
    }
  
    onChangetreatement(e) {
      this.setState({
        treatement: e.target.value,
      });
    }
  
    onChangeQty(e) {
      this.setState({
        Qty: e.target.value,
      });
    }
  
    onChangeemail(e) {
      this.setState({
        email: e.target.value,
      });
    }
  
    
    onSubmit(e){

        
       
        
       
        this.state.status = 'Completed';


        e.preventDefault();
        const obj = {
            Hotel : this.state.Hotel,
            vehicle : this.state.vehicle,
            room : this.state.room,
            treatement : this.state.treatement,
            Qty : this.state.Qty,
            status : this.state.status,
            price : this.state.price,
            email : this.state.email,
           
        };

		axios.post('http://localhost:4000/appointment/supdate/'+this.props.match.params.id,obj)
                                .then(res => {
                                    alert("add Successfully");
                                    this.setState({
                                        Hotel: "",
                                        vehicle: "",
                                        room: "",
                                        treatement: "",
                                        Qty: "",
                                        status: "",
                                        price: "",
                                        email: "",
                            
                                    })
                                    console.log(res.data)});
                             this.props.history.push('/SpecialOderView/'+this.props.match.params.id);
                         //   window.location.replace('/myorder/'+this.props.match.params.id);
                        
                   
        
    }



    render() {
	return (
		<div className='AddVehiclePage'>
		<h1 >Payment</h1>
            <br/>   <br/>   <br/>
			
			<div className='content'>
				<form onSubmit={this.onSubmit}>

				
				<div className='detail'>
                    <label htmlFor='Qty'>Hotel</label>
                    <input type='text' id='Qty' name='Qty' required  readOnly value={this.state.Hotel} onChange = {this.onChangeHotel}/>
                </div>


                

                    <div className='detail'>
						<label htmlFor=''>Vehicle</label>
						<input type='text' id='vehicleName' name='vehicleName' required readOnly  value={this.state.vehicle} onChange = {this.onChangevehicle}/>
					</div>

                    <div className='detail'>
						<label htmlFor=''> Room</label>
						<input type='text' id='vehicleName' name='vehicleName' required readOnly  value={this.state.room} onChange = {this.onChangeroom}/>
					</div>


			
                          
				{/* <div className='detail'>
                    <label htmlFor='Qty'>Tretement</label>
                    <input type='number' id='Qty' name='Qty' required readOnly  value={this.state.treatement} onChange = {this.onChangetreatement}/>
                </div> */}
                 
					
                
				 <div className='detail'>
                    <label htmlFor='Qty'>How many People attend</label>
                    <input type='number' id='Qty' name='Qty' required readOnly  value={this.state.Qty} onChange = {this.onChangeQty}/>
                </div> *

                {/* <div className='detail'>
                    <label htmlFor='Qty'>email</label>
                    <input type='number' id='Qty' name='Qty' required readOnly  value={this.state.email} onChange = {this.onChangeemail}/>
                </div> */}


				<div className='detail'>
                    <label htmlFor='Qty'>Bankcard</label>
                    <input type='text' id='Qty' name='Qty' required />
                </div>


				

                <a href={"/BankCard/" + this.props.match.params.id}>
                add card
									</a>  
				

                <a href={"/Refund/" + this.props.match.params.id}>
									Refund policy
									</a>  
               

					<button type='submit'>Pay</button>
         {/* ************************* */}
				</form>
			</div>
            <Footer />
		</div>
	);
}
	}
