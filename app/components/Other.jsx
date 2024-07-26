"use client"
import React from 'react';
import Link from "next/link";
import style from "../page.module.css";
import { FaArrowDown } from "react-icons/fa";
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function FAQ(){
	return(
		<section className={style.services} id="faq">
			<span className={style.muted}>F.A.Q</span>
			<h3>Frequently Asked Questions</h3>
			<Gap/>
			<div className={style.accordion}>
				<img src="/about.jpg" className={style.image} alt="img" />
				<div>
					<div className={style.faq}>
						<h4 className="accordion-header d-flex" id="headingOne">
							<button id={style.btn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#one' aria-expanded="false" aria-controls="collapseOne">
								fchgfdhvsfyu ds dyds fdy fh?
							</button>
							<FaArrowDown size="1rem" />
						</h4>
						<div id='one' className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
							<div className="accordion-body mt-4">
								dslnbuydvsjhdgis nsdvjcsj csy csjbgc sdcuygs csuyc vcj
							</div>
						</div>
					</div>

					<div className={style.faq}>
						<h4 className="accordion-header d-flex" id="headingOne">
							<button id={style.btn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#two' aria-expanded="false" aria-controls="collapseOne">
								fchgfdhvsfyu ds dyds fdy fh?
							</button>
							<FaArrowDown size="1rem" />
						</h4>
						<div id='two' className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
							<div className="accordion-body mt-4">
								dslnbuydvsjhdgis nsdvjcsj csy csjbgc sdcuygs csuyc vcj
							</div>
						</div>
					</div>

					<div className={style.faq}>
						<h4 className="accordion-header d-flex" id="headingOne">
							<button id={style.btn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#three' aria-expanded="false" aria-controls="collapseOne">
								fchgfdhvsfyu ds dyds fdy fh?
							</button>
							<FaArrowDown size="1rem" />
						</h4>
						<div id='three' className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
							<div className="accordion-body mt-4">
								dslnbuydvsjhdgis nsdvjcsj csy csjbgc sdcuygs csuyc vcj
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

const PortfolioData = [
	{"id":2,"src":"/software.gif","link":"https://www.google.com"},
	{"id":1,"src":"/software.gif","link":"www.google.com"},
	{"id":3,"src":"/software.gif","link":"www.google.com"},
	{"id":4,"src":"/software.gif","link":"www.google.com"},
	{"id":5,"src":"/software.gif","link":"www.google.com"},
	{"id":6,"src":"/software.gif","link":"www.google.com"}
]

export function Portfolio(){
	return(
		<section className={style.center} id="protfolio">
			<span className={style.muted}>Portfolio</span>
			<h3>Check our latest work</h3>
			<div className={style.grid}>
				{PortfolioData.map((p)=>{
					return(
						<Link  href={p.link} className={style.small} key={p.id}><Image width={200} height={200} src={p.src} className={style.full} alt="img"/></Link>
					)
				})}
			</div>
		</section>
	)
}

const team = [
	{"id":1,"img":"/user.jpg","name":"Mr. Sanskar Bandgar","role":"Web Devloper","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"},
	{"id":2,"img":"/user.jpg","name":"Mr. Sanskar Bandgar","role":"CEO","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"},
	{"id":3,"img":"/user.jpg","name":"Mr. Sanskar Bandgar","role":"Web Design","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"},
	{"id":4,"img":"/user.jpg","name":"Mr. Sanskar Bandgar","role":"UI/UX Design","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"}
]

export function Team(){
	return(
		<section className={style.center} id="team">
			<span className={style.muted}>Team</span>
			<h3>Our hard working Team.</h3>
			<div className={style.grid}>
				{team.map((t)=>(
					<div className={style.team} key={t.id} style={{paddingBottom:"1rem"}}>
						<div>
						<Image src={t.img} className="img-fluid" alt='img'/>
						<Image src="/team-shape.svg" className="img-fluid" id={style.teamShape} alt="img"/>
						</div>
						<h5 style={{color:"var(--primary)"}}>{t.name}</h5>
						<span className={style.darkmuted} style={{marginBottom:"25px"}}>{t.role}</span>
						<p style={{padding:"0px 20px"}}>{t.info}</p>
					</div>
				))}
			</div>
		</section>
	)
}

const client = [
	{"id":1,"name":"google","img":"/clients/client-1.png"},
	{"id":2,"name":"google","img":"/clients/client-2.png"},
	{"id":3,"name":"google","img":"/clients/client-3.png"},
	{"id":4,"name":"google","img":"/clients/client-4.png"},
	{"id":5,"name":"google","img":"/clients/client-5.png"},
	{"id":6,"name":"google","img":"/clients/client-6.png"},
	{"id":7,"name":"google","img":"/clients/client-7.png"},
	{"id":8,"name":"google","img":"/clients/client-8.png"}
]

export function Clients(){
	return(
		<section className={style.center} id="clients">
			<span className={style.muted}>Clients</span>
			<h3>Our happy Clients</h3>
			<Gap/>
				<Swiper
					speed={400}
					slidesPerView={3}
					spaceBetween={10}
					centeredSlides={true}
					loop={true}
					className="mySwiper"
					>
					{client.map((c)=>(
						<SwiperSlide key={c.id}>
							<Image width={100} height={100} src={c.img} className="img-fluid" width="100px" alt={c.name}/>
						</SwiperSlide>						
					))}
						
				</Swiper>
		</section>
	)
}

const feedback=[
	{"id":1,"name":"Sanskar Bandgar","rol":"Freelancer","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"},
	{"id":2,"name":"Ayush Panchal","rol":"CEO","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"},
	{"id":3,"name":"Sanskar Bandgar","rol":"designer","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"},
	{"id":4,"name":"Sanskar Bandgar","rol":"client","info":"hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn hii i amdjsdjn sdh sdk cu u sdku jknksdn"}
]

export function Feedback(){
	return(
		<section className={style.center} id="feedback">
			<span className={style.muted}>TESTIMONIALS</span>
			<h3>What they are saying about us.</h3>
			<div className={style.grid}>
				{feedback.map((f)=>(
					<div className={style.team} style={{padding:"2rem 0rem"}} key={f.id}>
						<div className="d-flex text-center gap-1" style={{
							justifyContent:"center",
							padding:"1rem 0rem",
							color:'var(--primary)'
							}}>
							
						</div>
						<p className="px-3">{f.info}</p>
						<Image width={100} height={100} src="/user.jpg" style={{borderRadius:"50px"}} alt="img" />
						<h5 style={{color:"var(--primary)"}}>{f.name}</h5>
						<span className={style.darkmuted}>{f.rol}</span>
					</div>
				))}
			</div>
		</section>
		)
}

export function Subscribe(){
	return(
	<section className={style.subscribe}>
		<span className={style.muted}>SUBSCRIBE</span>
		<h4>Get our first notifications! </h4>
		<form className={style.flex}>
			<input type="email" className="form-control text-center" placeholder='Enter your Email...'/>
			<button className="btn px-5" style={{
				backgroundColor:"var(--primary)",
				color:"var(--text-white)"
				}}>Subscribe</button>
		</form>
		</section>
	)
}

export function Gap(){
	return(
		<div><br/><br/></div>
	)
}
