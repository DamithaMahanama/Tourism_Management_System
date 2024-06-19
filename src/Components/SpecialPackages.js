import React from "react";
import '../Styles/SpecialPackages.css'
import NavbarLogin from "./NavBar_login";

function SpecialPackages() {
	return (
		<div className="specialPackages">
			<NavbarLogin />
			<h1>Tour Packages</h1>
			<div className='packages'>
				<div className='package'>
					<h3>Budget Explorer</h3>
					<h4>$1000</h4>
					<ul>
						<li>Basic hotel accommodations</li>
						<li>Public transportation</li>
						<li>Self-guided tours</li>
						<li>Local food experiences</li>
					</ul>
					<button type="submit">Buy</button>
				</div>
				<div className='package'>
					<h3>Cultural Immersion</h3>
					<h4>$2500</h4>
					<ul>
						<li>Mid-range hotel accommodations</li>
						<li>Guided tours to cultural and historical sites</li>
						<li>Local cuisine and cooking classes</li>
						<li>Authentic cultural experiences</li>
					</ul>
					<button type="submit">Buy</button>
				</div>
				<div className='package'>
					<h3>Luxury Explorer</h3>
					<h4>$5000</h4>
					<ul>
						<li>Luxury hotel accommodations</li>
						<li>Private transportation</li>
						<li>Private guided tours</li>
						<li>Fine dining and wine experiences</li>
					</ul>
					<button type="submit">Buy</button>
				</div>
			</div>
		</div>
	);
}

export default SpecialPackages;
