import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import NavbarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import axios from 'axios';


	export default  class EditHotel extends  Component{



        constructor(props) {
            super(props);
            this.onChangeaID = this.onChangeaID.bind(this);
            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeTreatement = this.onChangeTreatement.bind(this);
            
            this.onSubmit = this.onSubmit.bind(this);
        
            this.state = {
                aID: "",
                Name: "",
                Treatement: ""
             
            };
          }
    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/appointment/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    aID: res.data.aID,
                    Name: res.data.Name,
                    Treatement: res.data.Treatement
                   
                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangeaID(e) {
        this.setState({
            aID: e.target.value,
        });
      }
      onChangeName(e) {
        this.setState({
            Name: e.target.value,
        });
      }
      // eslint-disable-next-line no-dupe-class-members
      onChangeTreatement(e) {
        this.setState({
            Treatement: e.target.value,
        });
      }
    
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            aID: this.state.aID,
            Name: this.state.Name,
            Treatement: this.state.Treatement,
         
        };
    
    	
        if (/[^0-9]/.test(this.state.Name)) {
                axios.post("http://localhost:4000/appointment/update/"+this.props.match.params.id,obj)
                  .then((res) => {
                    alert(" Update Successfully");
                    this.setState({
                      aID: "",
                      Name: "",
                      Treatement: ""
                    });
                    console.log(res.data);
                  });
                this.props.history.push("/AdminAppointmentViewTable");
               
					  window.location.replace('/AdminAppointmentViewTable');
              } else {
                alert("you can't use numbers");
              }
    
       
         
          
        
      }



    render() {
	return (
        
    <div className='AppointmentPage'>
    <NavbarHome />
    <form onSubmit={this.onSubmit}>
      <h2>Appointment</h2>
      <div className='detail'>
        <label htmlFor=''>Appointment ID</label>
        <input type='text' id='vehicleName' name='vehicleName' required  value={this.state.aID} onChange={this.onChangeaID}/>
      </div>

      <div className='detail'>
        <label htmlFor=''>Full Name</label>
        <input type='text' id='vehicleName' name='vehicleName' required  value={this.state.Name} onChange={this.onChangeName}/>
      </div>

      <div className='detail'>
        <label htmlFor=''>Tretment</label>
        <input type='text' id='vehicleName' name='vehicleName' required value={this.state.Treatement} onChange={this.onChangeTreatement}/>
      </div>
      
      

      <div className="button">
        <button type='submit'>Update</button>
      
      </div>
      
    </form>
    <Footer /> 
  </div>
              
        );
}
	}
