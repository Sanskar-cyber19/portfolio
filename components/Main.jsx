import style from "../styles/Navbar.module.css";
const Main = ({children}) =>{
	return(
		<main className={style.outMain} style={{
			backgroundColor:"var(--outer-background)",
			padding:"1rem 1rem",
			color:"#ffffff"
		}}>{children}</main>
	)
}

export default Main;

