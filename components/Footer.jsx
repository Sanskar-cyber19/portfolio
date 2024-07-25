import style from "../styles/Footer.module.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	return(
		<>
			<main className={style.main}>
				<div className={style.top}>
					<h4>Syber tech</h4>
					<div className={style.icons}>
						<FaGithub size="1.5rem" />
						<FaGithub size="1.5rem" />
						<FaGithub size="1.5rem" />
					</div>
				</div>
				<div className={style.body}>
					<div className={style.box}>
						<h5>About us</h5>
						<div className={style.link}>
							<p>For more information on how to <br/>hold events like family<br/> gatherings children’s gatherings.</p>
						</div>
					</div>
					<div className={style.box}>
						<h5>Pages</h5>
						<div className={style.links}>
							<h6><Link href="/" className={style.link}>Home</Link></h6>
							<h6><Link href="/" className={style.link}>Home</Link></h6>
							<h6><Link href="/" className={style.link}>Home</Link></h6>
							<h6><Link href="/" className={style.link}>Home</Link></h6>
						</div>
					</div>
					<div className={style.box}>
						<h5>Pages</h5>
						<div className={style.links}>
							<h6><Link href="/" className={style.link}>Home</Link></h6>
							<h6><Link href="/" className={style.link}>Home</Link></h6>
							<h6><Link href="/" className={style.link}>Home</Link></h6>
							<h6><Link href="/" className={style.link}>Home</Link></h6>
						</div>
					</div>
					<div className={style.box}>
						<h5>Contact Us</h5>
						<p>
							<b>Email:</b><Link href="mail:bac19@gmail.com" className={style.link}>sansoa</Link><br/>
							<b>Phone no:</b><Link href="phone:1234567890" className={style.link}>1234567980</Link>
						</p>
					</div>
				</div>
				<div className={style.bottom}>
					© Copyright<b style={{color:"var(--text)"}}> Syber Tech</b>. All Rights Reserved<br/>
					Designed by Sanskar Bandgar
				</div>
			</main>
		</>
	)
}

export default Footer;