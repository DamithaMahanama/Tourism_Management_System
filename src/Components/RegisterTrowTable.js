import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class RAtableRow extends Component {
    constructor(props) {
        super(props);
        
         this.delete = this.delete.bind(this);
    }
     delete(){
         axios.get('http://localhost:4000/tourist/delete/'+this.props.obj._id)
             .then(this.setState({redirect: true}))
             .catch(err => console.log(err))
         //this.props.history.push('/index');
         alert(" Successfully Deleted....")
         window.location.replace('/AdminRegisterViewTable');
     }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.firstName}
               </td>
               <td>
                   {this.props.obj.lastName}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.countryCode}
               </td>
               <td>
                   {this.props.obj.phoneNu}
               </td>
               <td>
                   {this.props.obj.nic}
               </td>
               <td>
                   {this.props.obj.address}
               </td>
              
               <td>
                   {this.props.obj.country}
               </td>
               <td>
                   {this.props.obj.password}
               </td>
        
              
                <td className='profile-actions'>

                   <button><Link to={"/Editregister/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td> 
           </tr>
        );
    }
}

export default RAtableRow;