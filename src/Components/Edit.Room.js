import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import NavbarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import axios from 'axios';


	export default  class editRoom extends  Component{



    constructor(props) {
        super(props);
    	this.onChangerId = this.onChangerId.bind(this);
		this.onChangerType = this.onChangerType.bind(this);
		this.onChangebType = this.onChangebType.bind(this);
		this.onChangepnumber = this.onChangepnumber.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            rId: "",
			rType: "",
			bType: "",
			pnumber: "",
			email: "",
            
        
        }
    }

    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/room/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    rId: res.data.rId,
                    rType: res.data.rType,
                    bType: res.data.bType,
                    pnumber: res.data.pnumber,
                    email: res.data.email
                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangerId(e) {
		this.setState({
			rId: e.target.value,
		});
	}
	onChangerType(e) {
		this.setState({
			rType: e.target.value,
		});
	}
	// eslint-disable-next-line no-dupe-class-members
	onChangebType(e) {
		this.setState({
			bType: e.target.value,
		});
	}
	onChangepnumber(e) {
		this.setState({
			pnumber: e.target.value,
		});
	}
	onChangeemail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	
    
    onSubmit(e) {
		e.preventDefault();
		const obj = {
			rId: this.state.rId,
			rType: this.state.rType,
			bType: this.state.bType,
			pnumber: this.state.pnumber,
			email: this.state.email,
			
		};


        if (this.state.rId.length >= 0) {
            if (this.state.pnumber.length === 10) {
                axios.post('http://localhost:4000/room/update/'+this.props.match.params.id,obj)
                    .then((res) => {
                        alert("Room Update Successfully");
                        this.setState({
                            rId: "",
                            rType: "",
                            bType: "",
                            pnumber: "",
                            email: "",
                        });
                        console.log(res.data);
                    });
                this.props.history.push("/AdminRoomTableView");
				window.location.replace('/AdminRoomTableView');
            } else {
                alert("pleace enter valid mobile number.");
            }
        } else {
            alert("pleace enter valid room number.");
           }

   
          
        
    }



    render() {
	return (
		<div className='RoomRegister'>
				<NavbarHome />
				<form onSubmit={this.onSubmit}>
					<div className='title'>
						<p>Room Update</p>
					</div>
					<div className='basic-info'>
						<label>Room Code</label>
						<input
							type='text'
							value={this.state.rId}
							onChange={this.onChangerId}
						/>
					</div>

					<div className='basic-info'>
						<label>Room Type</label>
						<select name='' id=''onChange={this.onChangerType}>
							<option value='A/C' >A/C</option>
							<option value='non A/C'>non A/C</option>
						</select>
					</div>

					<div className='basic-info'>
						<label>Room Type</label>
						<select name='' id='' onChange={this.onChangebType}>
							<option value='Single room' >Single room</option>

							<option value='Double room' >Double room</option>
						</select>
					</div>

					<div className='basic-info'>
						<label>Mobile Number</label>
						<input
							type='text'
							value={this.state.pnumber}
							onChange={this.onChangepnumber}
						/>
					</div>

					<div className='basic-info'>
						<label>Email Address</label>
						<input
							type='email'
							value={this.state.email}
							onChange={this.onChangeemail}
						/>
					</div>

					<button className='submit' type='submit'>
						Submit
					</button>
				</form>
				<Footer />
			</div>
	);
}
	}
