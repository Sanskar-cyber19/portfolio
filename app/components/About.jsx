import Image from "next/image";
import style from "../page.module.css";
import { FaGithub, FaFolder, FaUser, FaRegSmile, FaInstagram, FaFacebook,FaArrowRight } from "react-icons/fa";

import { Gap } from "./Other"

export function About(){
	return(
		<section className={style.reverse} id="about">
			<Image width={200} height={200} src="/about.jpg" className={style.image} alt="img" />
					<div>
					<span className={style.muted}>WHO WE ARE</span>
					<h2>About us</h2>
					<p>For more information on how to hold events like<br/> family gatherings children’s gatherings.,dnmgbvldfksnfdf dmjnf<br/> ukf dfdnu fduf fuf k</p>
	
					</div>
				</section>
	)
}

export function Mission(){
	return(
		<section className={style.reverse} id="about">
					<div>
					<span className={style.muted}>Our Mission</span>
					<h3>Mission</h3>
					<p>Our Mission is to provide innovative solution<br/> that einpower business to trive in the digital age.</p>
					</div>
					<Image width={200} height={200} src="/about.jpg" className={style.image} alt="img" />
				</section>
	)
}

export function Services(){
	return(
		<section className={style.services} id="service">
					<span className={style.muted}>Services</span>
					<h3>Our Services</h3>
					<div className={style.grid}>
						<div className={style.small}>
							<FaGithub size="2rem"/>
							<p><b>Web developmet</b><br/>Customized website developmet taileared to your spacific needs.</p>
						</div>
						<div className={style.small}>
							<FaGithub size="2rem"/>
							<p><b>E-commerce Solution</b><br/>Building robust online sores to help you reach more customers and increase sales.</p>
						</div>
						<div className={style.small}>
							<FaGithub size="2rem"/>
							<p><b>UI/UX Design</b><br/> Designing user-friendly interface that enhance the overall user experience.</p>
						</div>
					</div>
				</section>
	)
}

const valueData =[
	{"id":1,"name":"Integrity"},
	{"id":2,"name":"Innovation"},
	{"id":3,"name":"Customer Focus"},
	{"id":4,"name":"Collaboration"},
	{"id":5,"name":"Excellence"},
	{"id":6,"name":"Time Saving"}
]
export function Features(){
	return(
		<section className={style.services}>
			<Gap />
			<span className={style.muted}>Values</span>
			<h3>Our Values</h3>
			<Gap />
			<div className={style.reverse}>
				<ul className={style.features} type="none">
					{valueData.map((v)=>(
						<li className={style.feature} key={v.id}>
							<FaRegSmile /> {v.name}
						</li>
					))}
				</ul>
				<Image width={200} height={200} src="/develop-web.gif" className={style.image} alt="img" />
			</div>
		</section>
	)
}

export function Contact(){
	
	return(
		<section className={style.center}>
			<span className={style.muted}>Contact</span>
			<h3>Contact Us</h3>
			<div className={style.reverse}>
				<form className={style.block}>
					<div className={style.textFlex}>
						<input type="text" className="form-control" placeholder="Full Name"/>
						<input type="email" className="form-control" placeholder="Your Email"/>
					</div><br/>
					<input type="text" className="form-control" placeholder="Subject"/>
					<br/>
					<textarea className="form-control" placeholder="Message...." rows="6"/>
					<br/>
					<button id={style.btn} className={style.button} style={{textAlign:"center"}}>Submit</button>
				</form>
				<Image width={200} height={200} className={style.half} src="/contact.png" alt="img"/>
			</div>
			<Gap/>
		</section>
	
	)
}
