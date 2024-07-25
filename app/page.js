"use client"
import Image from "next/image";
import style from "./page.module.css";
import { useEffect,useState } from "react";
import { FaGithub, FaFolder, FaUser, FaRegSmile, FaInstagram, FaFacebook,FaArrowRight } from "react-icons/fa";

import Pricing from "./components/Pricing";
import Main from "@/components/Main";
import {About,Services,Features,Contact} from "./components/About";
import {FAQ,Portfolio,Team,Clients,Gap,Feedback,Subscribe} from "./components/Other";

export default function Home() {
	useEffect(()=>{
			if(typeof window !== "undefined"){
				require('./counter.jsx');
			}
		},[])
	return(
		<>
			<header className={style.hero}>
				<h1>Modern solutions for growing your business</h1>
				<p>We are team of talented designers making websites with Bootstrap</p>
				<button className={style.button}>Get Start</button>
			</header>
			<Main>
			<main className={style.main}>
				<About />
				<Gap/>
				<Services />
				<section className={style.counter}>
					<div className={style.count}>
						<FaRegSmile size="3rem" />
						<p><span className="num" end="230">0</span><span>+</span><br/>
						Happy Client</p>
					</div>
					<div className={style.count}>
						<FaFolder size="3rem" />
						<p><span className="num" end="300">0</span><span>+</span><br/>
						Our Projects</p>
					</div>
					<div className={style.count}>
						<FaUser size="3rem" />
						<p><span className="num" end="30">0</span><span>+</span><br/>
						Our Workers</p>
					</div>
					<div className={style.count}>
						<FaRegSmile size="3rem" />
						<p><span className="num" end="400">0</span><span>+</span><br/>
						Spporting hours</p>
					</div>
				</section>
				<Features />
				<Gap />
				
				<Pricing />
				<Gap />
				
				<FAQ />
				<Gap />
				
				<Portfolio />
				<Gap />
				
				<Feedback />
				<Gap />
				
				<Team />
				<Gap />
				
				<Clients />
				<Gap />
				
				<Contact/>
				<Gap/>
			</main>
			<Subscribe />
		</Main>
		</>
	)
}