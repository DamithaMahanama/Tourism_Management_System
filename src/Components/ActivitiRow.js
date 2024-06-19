import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class ActivityRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/activity/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/AdminActivityViewTable');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.name}
               </td>
               <td>
                   {this.props.obj.company}
               </td>
               <td>
                   {this.props.obj.contactNo}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.category}
               </td>
               <td>
                   {this.props.obj.information}
               </td>
               {/* <td>
                   {this.props.obj.image}
               </td> */}
              
               <td className='profile-actions'>

                   <button><Link to={"/EditActivityAdmin/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default ActivityRow;