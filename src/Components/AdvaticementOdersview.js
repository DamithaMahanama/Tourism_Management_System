/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import Footer from "./Footer";
import "../Styles/VehicleTable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AdvaticementRow from "./AdvaticementRow";

export default class AdvaticeOder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			advaticeOder: [],
			search: "",
			email: this.props.match.params.id,
		};
		// this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		axios
			.get(
				"http://localhost:4000/tourist/aalloder/" + this.props.match.params.id
			)
			.then((response) => {
			// alert('Pass una')

				this.setState({ advaticeOder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.advaticeOder.map(function (object, i) {
			return <AdvaticementRow obj={object} key={i} />;
		});
		// return <OrderTableRow obj={this.state.orders}/>
	}

	exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "My Oder Report";
        const headers = [["title", "category","email", "description","price","days","status"]];
    
        const data = this.state.advaticeOder.map(elt=> [elt.title, elt.category,  elt.email,elt.description, elt.price, elt.days, elt.status]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
      }


	render() {
		return (
			<div className='adminVehicleProfile'>
				
				<br /> <h3 align='center'>Advatice Management</h3>

				{/* <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type ="text" required value={this.state.search} onChange = {this.onChangeSearch} className="form-control"/>
                                </div>
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/searchorder/"+this.state.search+"/"+ this.props.match.params.id} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Search</a>
                                </div>
                            </from> */}

				<div className='row-frm'>
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>title</th>
								<th>category</th>
								<th>email</th>
								<th>description</th>
								<th>price</th>
                                <th>days</th>
                                <th>status</th>

								<th colSpan='3'>Action</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
					<center>
                        <button onClick={() => this.exportPDF()}style={{background:'blue',padding:10, color:'white', border:'none',borderRadius:'20'}}>- Export All -</button>
                    </center>
				</div>
				<br />
				<br />
				<div>
					<hr className='shadow-lg card-footer' />
				</div>
				<Footer />
			</div>
		);
	}
}
