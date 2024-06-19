import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class AtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/ayurvedic/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/AdminAyurwedicTableView');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.firstName}
               </td>
               <td>
                   {this.props.obj.age}
               </td>
               <td>
                   {this.props.obj.country}
               </td>
               <td>
                   {this.props.obj.state}
               </td>
               <td>
                   {this.props.obj.gender}
               </td>
               <td className='profile-actions'>

                   <button><Link to={"/EditAyurwedic/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default AtableRow;