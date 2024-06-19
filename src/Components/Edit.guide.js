import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import NavbarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import axios from 'axios';


	export default  class EditHotel extends  Component{



        constructor(props) {
            super(props);
        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeage = this.onChangeage.bind(this);
        this.onChangephoneNu = this.onChangephoneNu.bind(this);
        this.onChangegender = this.onChangegender.bind(this);
		this.onChangeLicence = this.onChangeLicence.bind(this);
		this.onChangeEducation = this.onChangeEducation.bind(this);
		this.onChangesinhala = this.onChangesinhala.bind(this);
		this.onChangeEnglish = this.onChangeEnglish.bind(this);
		this.onChangeKorean = this.onChangeKorean.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);
            
            this.onSubmit = this.onSubmit.bind(this);
        
            this.state = {
                firstName: '',
                lastName: '',
                age:'',
                phoneNu:'',
                gender:'',
                Licence:'',
                Education:'',
                sinhala:'',
                English:'',
                Korean:'',
             
            };
          }
    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/guide/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    age: res.data.age,
                    phoneNu: res.data.phoneNu,
                    gender: res.data.gender,
                    Licence: res.data.Licence,
                    Education: res.data.Education,
                    sinhala: res.data.sinhala,
                    English: res.data.English,
                    Korean: res.data.Korean,

                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangefirstName(e){
        this.setState( {
            firstName: e.target.value
        });
    }
    onChangelastName(e){
        this.setState( {
            lastName: e.target.value
        });
    }
    onChangeage(e){
        this.setState( {
            age: e.target.value,
        });
    }
    onChangephoneNu(e){
        this.setState( {
            phoneNu: e.target.value
        });
    }
    onChangegender(e){
        this.setState( {
            gender: e.target.value
        });
    }

	onChangeLicence(e){
        this.setState( {
            Licence: e.target.value
        });
    }
	onChangeEducation(e){
        this.setState( {
            Education: e.target.value
        });
    }
	onChangesinhala(e){
        this.setState( {
            sinhala: e.target.value
        });
    }
	onChangeEnglish(e){
        this.setState( {
            English: e.target.value
        });
    }

	onChangeKorean(e){
        this.setState( {
            Korean: e.target.value
        });
    }
   
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            phoneNu: this.state.phoneNu,
            gender: this.state.gender,
            Licence: this.state.Licence,
            Education: this.state.Education,
            sinhala: this.state.sinhala,
            English: this.state.English,
            Korean: this.state.Korean,
        };
    
        if(this.state.phoneNu.length === 10){
                      
            axios.post("http://localhost:4000/guide/Update/"+this.props.match.params.id,obj)
                .then(res => {
                    alert("Update Successfully");
                    this.setState({
                        firstName: '',
                        lastName: '',
                        age:'',
                        phoneNu:'',
                        gender:'',
                        Licence:'',
                        Education:'',
                        sinhala:'',
                        English:'',
                        Korean:''
            
                    })
                    console.log(res.data)});
            this.props.history.push('/AdminGuideTableView');
            window.location.replace('/AdminGuideTableView');
        
    } 
    else {
        alert('Pleace enter valid phone number');
    }
    
       
          
        
      }



    render() {
	return (
        
        <div className='GuideRegister'>
        <NavbarHome />
        <form onSubmit={this.onSubmit}>
            <div className='title'>
                <p>Guide Update</p>
            </div>
            <div className='basic-info'>
                <label>First Name</label>
                <input
                    type='text'
                    value={this.state.firstName}
              onChange={this.onChangefirstName}
                />
            </div>

            <div className='basic-info'>
                <label>Last Name</label>
                <input
                    type='text'
                    
                    value={this.state.lastName}
              onChange={this.onChangelastName}
                />
            </div>

            <div className='basic-info'>
                <label>Age</label>
                <input
                    type='number'
                    
                    value={this.state.age}
              onChange={this.onChangeage}
                />
            </div>

            <div className='basic-info'>
                <label>Mobile Number</label>
                <input
                    type='text'
                
                    value={this.state.phoneNu}
              onChange={this.onChangephoneNu}
                />
            </div>

            <div className='choices'>
                <div className='choice'>
                    <label className='main-label' htmlFor=''>
                        Gender
                    </label>
                    <br />
                    <br />

                    <input
                        type='radio'
                        name='gender'
                        value='male'
                    
              onChange={this.onChangegender}
                    />
                    <label htmlFor='' className='option'>
                        {" "}
                        Male
                    </label>

                    <input
                        type='radio'
                        name='gender'
                        value='female'
                    
              onChange={this.onChangegender}	
                    />
                    <label htmlFor='' className='option'>
                        Female
                    </label>
                </div>
                <br />
                <br />

                <div className='choice'>
                    <label className='main-label'> Do You Have a Guide License? </label>
                    <br />
                    <br />
                    <label>
                        <input
                            type='radio'
                            className='option'
                            name='guideLicense'
                            value='yes'
                            
              onChange={this.onChangeLicence}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type='radio'
                            className='option'
                            name='guideLicense'
                            value='no'
                            
              onChange={this.onChangeLicence}
                        />
                        No
                    </label>
                </div>

                <br />
                <br />
                <div className='choice'>
                    <label className='main-label'> Education Qualification </label>
                    <br />
                    <br />
                    <label>
                        <input
                            type='radio'
                            name='educationQualification'
                            value='O/L'
                            
              onChange={this.onChangeEducation}
                        />
                        O/L
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='educationQualification'
                            value='A/L'
                            onChange={this.onChangeEducation}
                        />
                        A/L
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='educationQualification'
                            value='Higher Education'
                            onChange={this.onChangeEducation}
                        />
                        Higher Education
                    </label>
                </div>
            </div>
            <div className='languages'>
                <div>
                    <label htmlFor='' className='main-label'>
                        Language Than you Can?
                    </label>
                </div>

                <div className='column-1'>
                    <div className='language'>
                        <input
                            type='checkbox'
                            value='Sinhala'
                            onChange={this.onChangesinhala}
                            
                        />
                        <label> Sinhala </label>
                    </div>

                    <div className='language'>
                        <input
                            type='checkbox'
                            value='English'
                            onChange={this.onChangeEnglish}
                        />
                        <label> English </label>
                    </div>

                    <div className='language'>
                        <input
                            type='checkbox'
                            value='Korean'
                            onChange={this.onChangeKorean}
                        />
                        <label> Korean </label>

                        
                    </div>
                </div>
            </div>
            <button className='submit' type='submit'>Update  </button>
        </form>
        <Footer />
    </div>
              
        );
}
	}
