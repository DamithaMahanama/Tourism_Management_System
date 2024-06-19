import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import NavbarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import axios from 'axios';


	export default  class AddVehicle extends  Component{



    constructor(props) {
        super(props);
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangedetail = this.onChangedetail.bind(this);
        this.onChangeimage = this.onChangeimage.bind(this);
    
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '',
            detail:'',
            image:''
        
        }
    }


    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/destination/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    description: res.data.description,
                    detail: res.data.detail,
                    image: res.data.image
                   
                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }


    onChangetitle(e){
        this.setState( {
            title: e.target.value
        });
    }
    onChangedescription(e){
        this.setState( {
            description: e.target.value
        });
    }
    onChangedetail(e){
        this.setState( {
            detail: e.target.value,
        });
    }
    onChangeimage(e){
        this.setState( {
            image: e.target.value
        });
    }
    
    
    
    onSubmit(e){
        e.preventDefault();
        const obj = {
            title : this.state.title,
            description : this.state.description,
            detail : this.state.detail,
            image : this.state.image
         
           
           
        };

                    if(this.state.description.length > 4){
                        axios.post("http://localhost:4000/destination/update/"+this.props.match.params.id,obj)
                          
                                .then(res => {
                                    alert("add Successfully");
                                    this.setState({
										title: '',
										description: '',
										detail:'',
										image:'',
										
                                       
                            
                                    })
                                    console.log(res.data)});
                            this.props.history.push('/AdminDestinationView');
                      
					  window.location.replace('/AdminDestinationView');
                        
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
						<label htmlFor=''>Destination Titile</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.title} onChange = {this.onChangetitle}/>
					</div>

					<div className='detail'>
						<label htmlFor=''>Description</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.description} onChange = {this.onChangedescription}/>
					</div>

					<div className='detail'>
						<label htmlFor=''>Detail</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.detail} onChange = {this.onChangedetail}/>
					</div>

			
			

                    {/* <div className='detail'>
						<label htmlFor=''>image</label>
						<input type='file' />
					</div> */}


					<button type='submit'>Update</button>
				</form>
			</div>
            <Footer />
		</div>
	);
}
	}
