import React from "react";
import "../Styles/Activity_c.css";
// import VideoPlayer from "./VideoImport";
// import NavBarHome from "./NavBar_home";
import Footer from "./Footer";
// import SlideShow from './SlideShow'

function Activity_c() {
	return (
		<div className='ActivityPage'>
			{/* <NavBarHome /> */}
            {/* <SlideShow /> */}
			<div className='activity'>
                
				<div className='left-side'>
					<div className='advertisement'>
						<div className='add'>
							<img
								src='https://officefitoutblog.com.au/wp-content/uploads/2017/09/sample_placeholder-1200x581.png'
								alt=''
								srcset=''
							/>
						</div>
						<hr />
						<div className='add'>
							<img
								src='https://officefitoutblog.com.au/wp-content/uploads/2017/09/sample_placeholder-1200x581.png'
								alt=''
								srcset=''
							/>
						</div>
						<hr />
						<div className='add'>
							<img
								src='https://officefitoutblog.com.au/wp-content/uploads/2017/09/sample_placeholder-1200x581.png'
								alt=''
								srcset=''
							/>
						</div>
						<hr />
						<div className='add'>
							<img
								src='https://officefitoutblog.com.au/wp-content/uploads/2017/09/sample_placeholder-1200x581.png'
								alt=''
								srcset=''
							/>
						</div>
					</div>
				</div>
				<div className='right-side'>
					<div className='options'>
						<ul>
							<li>Info</li>
							<li>Packages</li>
							<li>Places</li>
						</ul>
						<div className='paragraph'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non,
							et quasi, labore deleniti nemo, modi amet recusandae pariatur
							atque magnam error nihil sunt beatae quos rerum incidunt est
							illum?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Accusantium ratione nemo odio eos non, sed pariatur esse animi
							eligendi minima! Officiis accusantium fuga maiores aperiam quas
							hic ab labore culpa?
						</div>
						<button>Book</button>

						<div>
							{/* <VideoPlayer
								src='https://example.com/video.mp4'
								type='video/mp4'
								width='440'
								height='260'
							/> */}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Activity_c;
