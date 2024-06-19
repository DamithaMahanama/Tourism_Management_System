import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class GtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/guide/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/AdminGuideTableView');
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
                   {this.props.obj.age}
               </td>
               <td>
                   {this.props.obj.phoneNu}
               </td>
               <td>
                   {this.props.obj.gender}
               </td>
               <td>
                   {this.props.obj.Licence}
               </td>
               <td>
                   {this.props.obj.Education}
               </td>
               <td>
                   {this.props.obj.sinhala}
               </td>
               <td>
                   {this.props.obj.English}
               </td>
               <td>
                   {this.props.obj.Korean}
               </td>
               <td className='profile-actions'>

                   <button><Link to={"/EditGuide/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default GtableRow;