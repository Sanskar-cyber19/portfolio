"use client"
import { useEffect } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";


const Menu =[{"id":1,"menu":"Home","link":""},
			{"id":2,"menu":"About","link":"about"},
			{"id":3,"menu":"Services","link":"#service"},
			{"id":4,"menu":"Portfolio","link":"#protfolio"},
			{"id":5,"menu":"Team","link":"#team"}]
			
const DropMenu =[{"id":1,"menu":"Pricing","link":"#priceing"},
			{"id":2,"menu":"F.A.Q","link":"#faq"},
			{"id":3,"menu":"Feedback","link":"#feedback"},
			{"id":4,"menu":"Clients","link":"#clients"},
			{"id":5,"menu":"Career","link":"career"}]

const Navbar = () => {
		useEffect(()=>{
			if(typeof window !== "undefined"){
				require('bootstrap/dist/js/bootstrap.min.js');
			}
		},[])
	return(
		<main>
			<nav className="navbar navbar-expand-lg w-100 navbar-light bg-light px-5" id={style.main}>
			<div className="container-fluid gap-3">
			  <Link className="navbar-brand d-flex gap-2 align-items-center" href="/"><h4>Sxber Tech</h4></Link>
			  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbar">
			  <div className={style.menu}>
				<ul className="navbar-nav gap-3">
				  {Menu.map((menu)=>(
					<li key={menu.id} style={{display:"flex", alignItems:"center"}}>
						<b><Link href={`/${menu.link}`} className="nav-link">{menu.menu}</Link></b>
					</li>
				  ))}
				  <li className="dropdown">
					<span className="nav-link dropdown-toggle" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false"><b>Other</b></span>
					 <ul className="dropdown-menu bg-light" aria-labelledby="dropdown">
					 {DropMenu.map((d)=>(
						<li key={d.id}>
							<b><Link className="dropdown-item" href={`/${d.link}`} style={{color:"var(--text)"}}>{d.menu}</Link></b>
						</li>
					 ))}
					</ul>
				  </li>
				  <li  style={{display:"flex", alignItems:"center"}}>
					<b><Link href="/contact" className="nav-link">Contact Us</Link></b>
					</li>
				</ul>
				</div>
				<button className={style.button}>Get Satart</button>
			  </div>
			</div>
		  </nav>
		</main>
	)
}

export default Navbar;