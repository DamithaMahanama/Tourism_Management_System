import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import Footer from "./Footer";
import axios from 'axios';



	export default  class GuidePayments extends  Component{


    constructor(props) {
        super(props);
         this.onChangetitle = this.onChangetitle.bind(this);
		// this.onChangecategory = this.onChangecategory.bind(this);
		 this.onChangeemail = this.onChangeemail.bind(this);
         this.onChangedays = this.onChangedays.bind(this);
		// this.onChangedescription = this.onChangedescription.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: "",
			category: "",
			email: "",
			description: "",
			price: "",
			days: "",
			status: "",
            
        
        }
        this.state.email = this.props.match.params.id;
       
    } 
	
    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/tourist/aedit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    category: res.data.category,
                    email: res.data.email,
                    description: res.data.description,
                    price: res.data.price,
                    days: res.data.days,
                    status: res.data.status
                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }


        

    onChangetitle(e) {
		this.setState({
			title: e.target.value,
		});
	}
	
	onChangeemail(e) {
		this.setState({
			email: e.target.value,
		});
	}

	
    onChangedays(e) {
		this.setState({
			days: e.target.value,
		});
	}
    
    onSubmit(e){

        
       
        
       
        this.state.status = 'Completed';


        e.preventDefault();
        const obj = {
            title: this.state.title,
			category: this.state.category,
			email: this.state.email,
			description: this.state.description,
			price: this.state.price,
			days: this.state.days,
			status: this.state.status,
           
        };

		
        axios.post("http://localhost:4000/tourist/aupdate/"+this.props.match.params.id,obj)
        .then((res) => {
			alert("update Successfully");
			this.setState({
			title: "",
			category: "",
			email: "",
			description: "",
			price: "",
			days: "",
			status: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/AdvaticementOdersview/" + this.props.match.params.id);
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
                    <label htmlFor='Qty'>Add Title</label>
                    <input type='text' id='Qty' name='Qty' required  readOnly value={this.state.title} onChange = {this.onChangetitle}/>
                </div>


                

                    <div className='detail'>
						<label htmlFor=''> Email</label>
						<input type='text' id='vehicleName' name='vehicleName' required readOnly  value={this.state.email} onChange = {this.onChangeemail}/>
					</div>

                     <div className='detail'>
						<label htmlFor=''>day of add running</label>
						<input type='text' id='vehicleName' name='vehicleName' required readOnly  value={this.state.days} onChange = {this.onChangedays}/>
					</div> 


			
                      
					
                
				<div className='detail'>
                    <label htmlFor='Qty'>Total</label>
                    <input type='number' id='Qty' name='Qty' required readOnly  value={this.state.price} />
                </div>

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
                   
				</form>
			</div>
            <Footer />
		</div>
	);
}
	}
