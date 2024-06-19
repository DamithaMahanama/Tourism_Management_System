import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";

import '../Styles/OrderView.css'



class TretmenttableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/ayurvedic/oderdelete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
       // window.location.replace('/VehicleOderView/'+this.props.match.params.id);
        // this.props.history.push('/VehicleOderView/'+this.props.match.params.id);
        window.location.replace('/TreatmentOderView/'+this.props.obj.email);
    }
    render() {
        return (
           <tr>
             
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.tretement}
               </td>
               <td>
                   {this.props.obj.Qty}
               </td>
               <td>
                   {this.props.obj.price}
               </td>
               <td>
                   {this.props.obj.status}
               </td>
               <td className='profile-actions'>

                   <button><Link to={"/EditTreatmentOder/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
                   <br/><br/>
                   <button type='submit' className='pay'><Link to={"/TPayment/"+this.props.obj._id} className="btn btn-info">Pay</Link></button>
               </td>
           </tr>
        );
    }
}

export default TretmenttableRow;