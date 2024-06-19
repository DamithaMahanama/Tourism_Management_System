import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class BtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/payment/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/BankCardView');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.bName}
               </td>
               <td>
                   {this.props.obj.cNumber}
               </td>
               <td>
                   {this.props.obj.exMonth}
               </td>
               <td>
                   {this.props.obj.expYear}
               </td>
               <td>
                   {this.props.obj.cvv}
               </td>
           
               <td className='profile-actions'>

                   <button><Link to={"/EditBankCard/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default BtableRow;