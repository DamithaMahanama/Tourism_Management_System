import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import Footer from "./Footer";
import axios from 'axios';


	export default  class EDitODerVehicle extends  Component{
 


    constructor(props) {
        super(props);
        this.onChangeOName = this.onChangeOName.bind(this);
        this.onChangenic = this.onChangeonChangenicvType.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangevehicle = this.onChangevehicle.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onChangeQty = this.onChangeQty.bind(this);
        this.onChangestatus = this.onChangestatus.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            OName: '',
            nic: '',
            email:'',
            vehicle:'',
            price:'',
            Qty:'',
            status:''
            
        
        }
        this.state.email = this.props.match.params.id;
    }

    componentDidMount() {
        //alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/room/redit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    OName: res.data.OName,
                    nic: res.data.nic,
                    email: res.data.email,
                    vehicle: res.data.vehicle,
                    price: res.data.price,
                    Qty: res.data.Qty,
                    status: res.data.status
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }


    onChangeOName(e){
        this.setState( {
            OName: e.target.value
        });
    }
    onChangenic(e){
        this.setState( {
            nic: e.target.value
        });
    }
    onChangeemail(e){
        this.setState( {
            email: e.target.value,
        });
    }
    onChangevehicle(e){
        this.setState( {
            vehicle: e.target.value
        });
    }
    onChangeprice(e){
        this.setState( {
            price: e.target.value
        });
    }
    onChangeQty(e){
        this.setState( {
            Qty: e.target.value
        });
    }
    onChangestatus(e){
        this.setState( {
            status: e.target.value
        });
    }
    
    onSubmit(e){

        this.state.status = 'pending';
            
        if (this.state.vehicle == 'Scooter') {

            this.state.price = this.state.qty * 1000;

        } 

        e.preventDefault();
        const obj = {
            OName : this.state.OName,
            nic : this.state.nic,
            email : this.state.email,
            vehicle : this.state.vehicle,
            price : this.state.price,
            Qty : this.state.Qty,
            status : this.state.status,
           
        };

                   
        axios.post('http://localhost:4000/vehicle/oderupdate/'+this.props.match.params.id,obj)
                                .then(res => {
                                    alert("Update Successfully");
                                    this.setState({
                                        OName: '',
                                        nic: '',
                                        email:'',
                                        vehicle:'',
                                        price:'',
                                        Qty:'',
                                        status:''
                            
                                    })
                                    console.log(res.data)});
                            this.props.history.push('/RoomOderView');
                            window.location.replace('/RoomOderView');
                
        
    }


    render() {
	return (
		<div className='AddVehiclePage'>
			
			<div className='content'>
				<form onSubmit={this.onSubmit}>

                


                    <div className='detail'>
						<label htmlFor=''> Email</label>
						<input type='text' id='vehicleName' name='vehicleName' required readOnly  value={this.state.email} onChange = {this.onChangeemail}/>
					</div>

					<div className='detail'>
						<label htmlFor=''> Vehicle</label>
						<input type='text' id='vehicleName' name='vehicleName' required readOnly  value={this.state.vehicle} onChange = {this.onChangevehicle}/>
					</div>

					
					
                    <div className='detail'>
						<label htmlFor=''>Quntity</label>
						<input type='number' id='vehicleName' name='vehicleName' required   value={this.state.Qty} onChange = {this.onChangeQty}/>
					</div>

                    <div className='detail'>
						<label htmlFor=''>Total</label>
						<input type='number' id='vehicleName' name='vehicleName' required readOnly  value={this.state.price} onChange = {this.onChangeprice}/>
					</div>

					<button type='submit'>Edit</button>
				</form>
			</div>
            <Footer />
		</div>
	);
}  
	}
// fix