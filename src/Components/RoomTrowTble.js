import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class RtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/room/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/AdminRoomTableView');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.rId}
               </td>
               <td>
                   {this.props.obj.rType}
               </td>
               <td>
                   {this.props.obj.bType}
               </td>
               <td>
                   {this.props.obj.pnumber}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
             
               <td className='profile-actions'>

                   <button><Link to={"/Editroom/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default RtableRow;