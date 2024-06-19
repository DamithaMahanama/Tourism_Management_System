import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Register from "./Components/Register";
import GuideSearch from "./Components/GuideSearch";
import GuideRegister from "./Components/GuideRegister";
import HotelSearch from "./Components/HotelSearch";
import NavbarHome from "./Components/NavBar_home";
import HotelRegister from "./Components/HotelRegister";
import HotelBookingDetails from "./Components/HotelBookingDetails";
import GuideBookingDetails from "./Components/GuideBookingDetails";
import AdvertisingPayments from "./Components/AdvertisingPayments";
import Payment from "./Components/Payment";
import RPayment from "./Components/RPayment";
import Spayment from "./Components/Spayment";
import EPayment from "./Components/EPayment";
import BankCard from "./Components/BankCard";

import TPayment from "./Components/TPayment";
import HPayment from "./Components/HPayment";
import APayment from "./Components/APayment";
import GPayment from "./Components/GPayment";
import Destinations from "./Components/Destinations";
import DestinationDetailsSigiriya from "./Components/DestinationDetailsSigiriya";
import DestinationDetailsPinnawala from "./Components/DestinationDetailsPinnawala";
import MapLocation from "./Components/Map";
import AddtoMap from "./Components/AddtoMap";
import VehicleHomePage from "./Components/VehicleHomePage";
import AddVehicle from "./Components/AddVehicle";
import addActivity from "./Components/addActivity";
import AddDestination from "./Components/AddDestination";
import VehicleDetails from "./Components/VehicleDetails";
import AyurvedicRegister from "./Components/AyurvedicRegister";
import AyurvedicTreatmentHomePage from "./Components/AyurvedicTreatmentHomePage";
import Appointment from "./Components/AddAppointment";
import AppointmentDelete from "./Components/TreatmentAppointmentDelete";
import AyurvedicFeedback from "./Components/AyurvedicFeedback";
// import SlideShow from "./Components/SlideShow";
import AdventureAndExperienceCard from "./Components/AdventureAndExperienceCard";
import OrderAndAdventureExperience from "./Components/OrderAndAdventureExperience";
import Activity_c from "./Components/Activity_c";
import BookingDetails from "./Components/BookingDetails";
import ActivityRegister from "./Components/ActivityRegister";
import ActivityDashboard from "./Components/ActivityDashboard";
import BookingRequest from "./Components/BookingRequest";
import BookedActivities from "./Components/BookedActivities";
import RequestBooking from "./Components/RequestBooking";
import HomepageAdmin from "./Components/HomepageAdmin";
import index from "./Components/index.profile";
import vehicleadminView from "./Components/vehicleadminView";
import AdminDestinationView from "./Components/AdminDestinationView";
import BankCardView from "./Components/BankCardView";
import AdminActivityViewTable from "./Components/AdminActivityViewTable";
import vehicleEdit from "./Components/edit.vehicle";
import EditDestination from "./Components/Edit.destination";
import EditBankCard from "./Components/EditBankCard";

import Edithotel from "./Components/Edit.Hotel";
import PageNotFound from "./Components/PageNotFound";
import AdminHotelTableView from "./Components/AdminHotelTableView";
import AdminAyurwedicTableView from "./Components/AdminAyurwedicTableView";
import EditAyurwedic from "./Components/Edit.Ayurwedic";
import AdminAppointmentViewTable from "./Components/AdminAppointmentViewTable";
import EditAppointment from "./Components/Edit.Appointment";
import AdminGuideTableView from "./Components/AdminGuideTableView";
import EditGuide from "./Components/Edit.guide";
import RoomRegister from "./Components/RoomRegister";
import Editroom from "./Components/Edit.Room";
import AdminRoomTableView from "./Components/AdminRoomTableView";
import Editregister from "./Components/Edit.register";
import myvehicleoder from "./Components/MyVehicleOder";
import MyActivityOders from "./Components/MyActivityOders";
import MyAdvaticementOders from "./Components/MyAdvaticementOders";
import MyOderRoom from "./Components/MyOderRoom";
import mytreatemetoder from "./Components/mytreatemetoder";
import MySpecialOders from "./Components/MySpecialOders";
import MyOderGuide from "./Components/MyOderGuide";
import MyHotelOder from "./Components/MyHotelOder";
import TreatmentOderView from "./Components/TreatmentOderView";
import ActivityViewTable from "./Components/ActivityViewTable";
import AdvaticementOdersview from "./Components/AdvaticementOdersview";
import Refund from "./Components/Refund";
import SpecialOderView from "./Components/SpecialOderView";
import VehicleOderView from "./Components/VehicleOderView";
import RoomOderView from "./Components/RoomOderView";

import HotelOderView from "./Components/HotelOderView";
import GuideOderView from "./Components/GuideOderView";

import EditVehicleOder from "./Components/EditVehicleOder";
import EditHotelOder from "./Components/Edit.HotelOder";
import EditOderRoom from "./Components/EditOderRoom";
import EditGuideOder from "./Components/EditGuideOder";
import EditTreatmentOder from "./Components/Edit.TreatmentOder";
import EditSpecialOders from "./Components/EditSpecialOders";
import EditActivity from "./Components/EditActivity";
import EditActivityAdmin from "./Components/Edit.Activity";
import EditAdvaticement from "./Components/Edit.Advaticement";

import RoomHomePage from "./Components/RoomHomepage";
import TourguideHomepage from "./Components/TourguideHomepage";
import AppointmentHomepage from "./Components/AppointmentHomepage";
import HotelHomepage from "./Components/HotelHomepage";
import ExperienceHomepage from "./Components/ExperienceHomePage";
import AdvaticementHomePage from "./Components/AdvaticementHomePage";

import AdminRegisterViewTable from "./Components/AdminRegisterViewTable";

import Slideshow2 from "./Components/SlideShow2";  
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Features from "./Components/Features";
import HomepageNormal from "./Components/HomepageNormal";
import SpecialPackages from "./Components/SpecialPackages";
import festivalsHomepage from "./Components/Festivals";
import SearchRoomOders from "./Components/SearchRoomOders";
// import Refund from "./Components/Refund";
class App extends Component {
	render() {
		return (

			<div>
				<Router>
					<Switch>
						<Route exact path='/' component={HomepageNormal} />
						<Route path='/Login' component={Login} />
						<Route  path='/Homepage/:id' component={Homepage} />
						<Route path='/GuideBookingDetails' component={GuideBookingDetails} />
						<Route  path='/Register' component={Register} />
						<Route path='/GuideSearch' component={GuideSearch} />
						<Route path='/guideregister' component={GuideRegister} />
						<Route path='/HotelSearch' component={HotelSearch} />
						<Route path='/VehicleHomePage/:id' component={VehicleHomePage} />
						<Route path='/Payment/:id' component={Payment} />
						<Route path='/RPayment/:id' component={RPayment} />
						<Route path='/Spayment/:id' component={Spayment} />
						<Route path='/EPayment/:id' component={EPayment} />
						<Route path='/TPayment/:id' component={TPayment} />
						<Route path='/GPayment/:id' component={GPayment} />
						<Route path='/HPayment/:id' component={HPayment} />
						<Route path='/APayment/:id' component={APayment} />
						<Route path='/BankCard' component={BankCard} />
						<Route path='/AddVehicle' component={AddVehicle} />
						<Route path='/AddDestination' component={AddDestination} />
						<Route path='/VehicleDetails/:id' component={VehicleDetails} />
						<Route path='/AyurvedicRegister' component={AyurvedicRegister} />
						<Route
							path='/AyurvedicTreatmentHomePage/:id'
							component={AyurvedicTreatmentHomePage}
						/>
						<Route path='/Appointment' component={Appointment} />
						<Route path='/AppointmentDelete' component={AppointmentDelete} />
						<Route path='/AyurvedicFeedback' component={AyurvedicFeedback} />
						<Route
							path='/AdventureAndExperienceCard'
							component={AdventureAndExperienceCard}
						/>
						<Route
							path='/OrderAndAdventureExperience'
							component={OrderAndAdventureExperience}
						/>
						<Route path='/Activity_c' component={Activity_c} />
						<Route path='/addActivity' component={addActivity} />
						<Route path='/BookingDetails' component={BookingDetails} />
						<Route path='/ActivityRegister' component={ActivityRegister} />
						<Route path='/ActivityDashboard' component={ActivityDashboard} />
						<Route path='/BookingRequest' component={BookingRequest} />
						<Route path='/RequestBooking' component={RequestBooking} />
						<Route path='/Hotelregister' component={HotelRegister} />
						<Route path='/BookedActivities' component={BookedActivities} />
						<Route path='/HomepageAdmin' component={HomepageAdmin} />

						<Route path='/GuideSearch' component={GuideSearch} />
						<Route path='/index/:id' component={index} />
						{/* <Route  path='/RequestBooking' component={RequestBooking}/> */}

						<Route path='/vehicleadminView' component={vehicleadminView} />
						<Route path='/AdminDestinationView' component={AdminDestinationView} />
						<Route path='/BankCardView' component={BankCardView} />
						<Route path='/AdminActivityViewTable' component={AdminActivityViewTable} />
						<Route path='/vehicleEdit/:id' component={vehicleEdit} />
						<Route path='/EditDestination/:id' component={EditDestination} />
						<Route path='/EditBankCard/:id' component={EditBankCard} />
						<Route path='/PageNotFound' component={PageNotFound} />
						<Route path='/destinationdetailssigiriya/:id' component={DestinationDetailsSigiriya} />
						<Route  path='/destinationdetailspinnawala/:id' component={DestinationDetailsPinnawala} />
						<Route path='/destinations/:id' component={Destinations} />
						<Route path='/addtomap' component={AddtoMap} />
						{/* <Route path='/mycomponent' component={MyComponent} /> */}
						<Route path='/addappointment' component={Appointment} />

						<Route path='/edithotel/:id' component={Edithotel} />
						<Route path='/AdminHotelTableView' component={AdminHotelTableView} />

						<Route path='/EditAyurwedic/:id' component={EditAyurwedic} />
						<Route path='/AdminAyurwedicTableView' component={AdminAyurwedicTableView} />

						<Route path='/EditAppointment/:id' component={EditAppointment} />
						<Route path='/AdminAppointmentViewTable' component={AdminAppointmentViewTable} />

						<Route path='/EditGuide/:id' component={EditGuide} />
						<Route path='/AdminGuideTableView' component={AdminGuideTableView} />
						
						<Route path='/roomregister' component={RoomRegister} />  

						<Route path='/Editroom/:id' component={Editroom} />
						<Route path='/AdminRoomTableView' component={AdminRoomTableView} />

						<Route path='/Slideshow2' component={Slideshow2} />

						<Route path='/Editregister/:id' component={Editregister} />
						<Route path='/EditVehicleOder/:id' component={EditVehicleOder} />
						<Route path='/EditHotelOder/:id' component={EditHotelOder} />
						<Route path='/EditOderRoom/:id' component={EditOderRoom} />
						<Route path='/EditGuideOder/:id' component={EditGuideOder} />
						<Route path='/EditTreatmentOder/:id' component={EditTreatmentOder} />
						<Route path='/EditSpecialOders/:id' component={EditSpecialOders} />
						<Route path='/EditActivity/:id' component={EditActivity} />
						<Route path='/EditActivityAdmin/:id' component={EditActivityAdmin} />
						<Route path='/EditAdvaticement/:id' component={EditAdvaticement} />
						<Route path='/AdminRegisterViewTable' component={AdminRegisterViewTable} />
						<Route path='/aboutus' component={AboutUs} />
						<Route path='/contactus' component={ContactUs} />
						<Route path='/features' component={Features} />
						<Route path='/specialpackages' component={SpecialPackages} />

{/* //if we nee to pass the pass the value from another page need to use this :id */}
						<Route path='/myvehicleoder/:id' component={myvehicleoder} />
						<Route path='/MyActivityOders/:id' component={MyActivityOders} />
						<Route path='/MyAdvaticementOders/:id' component={MyAdvaticementOders} />
						<Route path='/MyOderRoom/:id' component={MyOderRoom} />

						<Route path='/MyOderGuide/:id' component={MyOderGuide} />
						<Route path='/mytreatemetoder/:id' component={mytreatemetoder} />
						<Route path='/MySpecialOders/:id' component={MySpecialOders} />
						<Route path='/TreatmentOderView' component={TreatmentOderView} />
						<Route path='/ActivityViewTable' component={ActivityViewTable} />
						<Route path='/AdvaticementOdersview' component={AdvaticementOdersview} />
						<Route path='/SpecialOderView' component={SpecialOderView} />
						<Route path='/VehicleOderView' component={VehicleOderView} />
						<Route path='/RoomOderView' component={RoomOderView} />
						<Route path='/HotelOderView' component={HotelOderView} />
						<Route path='/GuideOderView' component={GuideOderView} />
						<Route path='/MyHotelOder/:id' component={MyHotelOder} />

						<Route path='/RoomHomePage/:id' component={RoomHomePage} />
						<Route path='/TourguideHomepage/:id' component={TourguideHomepage} />
						<Route path='/AppointmentHomepage/:id' component={AppointmentHomepage} />
						<Route path='/HotelHomepage/:id' component={HotelHomepage} />
						<Route path='/ExperienceHomepage/:id' component={ExperienceHomepage} />
						<Route path='/AdvaticementHomePage/:id' component={AdvaticementHomePage} />
						<Route path='/festivals' component={festivalsHomepage} />
						<Route path='/Refund' component={Refund} />						
						<Route path="/404" component={PageNotFound} />

						<Route  path='/searchorder/:pathParam1?/:pathParam2?' component={SearchRoomOders}/>

						<Redirect from='*' to='/404' />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
