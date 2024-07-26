import Image from "next/image";
import style from "../page.module.css";

const Pricing = () => {
	return(
		<section className={style.prices} id="pricing">
					<span className={style.muted}>Prices</span>
					<h3>Check our Pricing</h3>
					<div className={style.price}>
						<div className={style.grid}>
							<div className={style.card}>
								<span className={style.muted}>Free Plan</span>
								<p style={{marginBottom:"30px"}} className={style.darkmuted}>$<b style={{color:'var(--text)',fontSize:"5vh"}}>0</b>/month</p>
								<Image src="/pricing-free.png" width={120} height={100} style={{marginBottom:"10px"}} alt="img" />
								<br/>
								<p>For more information on<br/> how to hold events like<br/> family gatherings children’s<br/> gatherings.</p>
								<button className={style.button}>Buy Now</button>
							</div>
							<div className={style.card}>
								<span className={style.muted}>Starter Plan</span>
								<p style={{marginBottom:"30px"}} className={style.darkmuted}>$<b style={{color:'var(--text)',fontSize:"5vh"}}>249</b>/month</p>
								<Image src="/pricing-starter.png" width={120} height={100} style={{marginBottom:"10px"}} alt="img" />
								<br/>
								<p>For more information on<br/> how to hold events like<br/> family gatherings children’s<br/> gatherings.</p>
								<button className={style.button}>Buy Now</button>
							</div>
							<div className={style.card}>
								<span className={style.muted}>Business Plan</span>
								<p style={{marginBottom:"30px"}} className={style.darkmuted}>$<b style={{color:'var(--text)',fontSize:"5vh"}}>599</b>/month</p>
								<Image src="/pricing-business.png" width={120} height={100} style={{marginBottom:"10px"}} alt="img" />
								<br/>
								<p>For more information on<br/> how to hold events like<br/> family gatherings children’s<br/> gatherings.</p>
								<button className={style.button}>Buy Now</button>
							</div>
							<div className={style.card}>
								<span className={style.muted}>Ultimate Plan</span>
								<p style={{marginBottom:"30px"}} className={style.darkmuted}>$<b style={{color:'var(--text)',fontSize:"5vh"}}>749</b>/month</p>
								<Image src="/pricing-ultimate.png" width={120} height={100} style={{marginBottom:"10px"}} alt="img" />
								<br/>
								<p>For more information on<br/> how to hold events like<br/> family gatherings children’s<br/> gatherings.</p>
								<button className={style.button}>Buy Now</button>
							</div>
						</div>
					</div>
				</section>
	)
}

export default Pricing;
