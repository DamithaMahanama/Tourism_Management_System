import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class VtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/vehicle/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/vehicleadminView');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.vName}
               </td>
               <td>
                   {this.props.obj.vType}
               </td>
               <td>
                   {this.props.obj.vprice}
               </td>
               <td>
                   {this.props.obj.description}
               </td>
               <td>
                   {this.props.obj.cNumber}
               </td>
               <td className='profile-actions'>

                   <button><Link to={"/vehicleEdit/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default VtableRow;