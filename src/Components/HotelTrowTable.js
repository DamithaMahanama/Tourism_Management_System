import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class HtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/hotel/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/AdminHotelTableView');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.hName}
               </td>
               <td>
                   {this.props.obj.address}
               </td>
               <td>
                   {this.props.obj.pNumber}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.password}
               </td>
               <td>
                   {this.props.obj.cPassword}
               </td>
               <td className='profile-actions'>

                   <button><Link to={"/edithotel/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default HtableRow;