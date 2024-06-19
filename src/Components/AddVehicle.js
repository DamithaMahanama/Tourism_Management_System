import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import NavbarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import axios from 'axios';


	export default  class AddVehicle extends  Component{



    constructor(props) {
        super(props);
        this.onChangevName = this.onChangevName.bind(this);
        this.onChangevType = this.onChangevType.bind(this);
        this.onChangevprice = this.onChangevprice.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangecNumber = this.onChangecNumber.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            vName: '',
            vType: '',
            vprice:'',
            description:'',
            cNumber:''
           
            
        
        }
    }
    onChangevName(e){
        this.setState( {
            vName: e.target.value
        });
    }
    onChangevType(e){
        this.setState( {
            vType: e.target.value
        });
    }
    onChangevprice(e){
        this.setState( {
            vprice: e.target.value,
        });
    }
    onChangedescription(e){
        this.setState( {
            description: e.target.value
        });
    }
    onChangecNumber(e){
        this.setState( {
            cNumber: e.target.value
        });
    }
   
    
    
    onSubmit(e){
        e.preventDefault();
        const obj = {
            vName : this.state.vName,
            vType : this.state.vType,
            vprice : this.state.vprice,
            description : this.state.description,
            cNumber : this.state.cNumber
           
           
        };

                    if(this.state.cNumber.length > 4){
                      
                            axios.post('http://localhost:4000/vehicle/add',obj)
                                .then(res => {
                                    alert("add Successfully");
                                    this.setState({
										vName: '',
										vType: '',
										vprice:'',
										description:'',
										cNumber:''
                                       
                            
                                    })
                                    console.log(res.data)});
                            this.props.history.push('/vehicleadminView');
                      
					  window.location.replace('/vehicleadminView');
                        
                    } 
                    else {
                        alert('Pleace enter more than 4 digit.');
                    }
          
        
    }



    render() {
	return (
		<div className='AddVehiclePage'>
			<NavbarHome />
			<div className='content'>
				<form onSubmit={this.onSubmit}>
					<div className='detail'>
						<label htmlFor=''>Add Vehicle Name</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.vName} onChange = {this.onChangevName}/>
					</div>

					<div className='detail'>
						<label htmlFor=''>Vehicle Type</label>
						<select id='vehicleType' name='vehicleType' value={this.state.vType} onChange = {this.onChangevType}>
							<option value='Mini'>Mini</option>
							<option value='Normal'>Normal</option>
							
						</select>
					</div>
					<div className='detail'>
						<label htmlFor=''>Vehicle Price Per day</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.vprice} onChange = {this.onChangevprice}/>
					</div>

					<div className='detail'>
						<label htmlFor=''>Description</label>
						<textarea required value={this.state.description} onChange = {this.onChangedescription} />
					</div>

					<div className='detail'>
						<label htmlFor=''>vehicle number</label>
						<input type='text' value={this.state.cNumber} onChange = {this.onChangecNumber}/>
					</div>

                    {/* <div className='detail'>
						<label htmlFor=''>image</label>
						<input type='file' />
					</div> */}


					<button type='submit'>save</button>
				</form>
			</div>
            <Footer />
		</div>
	);
}
	}
