import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import Property from "../../components/properties/Property"
import Popular from "../../components/popular/Popular"
import Mailbox from "../../components/mailbox/Mailbox"
import Footer from "../../components/footer/Footer"
const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
        <Featured />
            <h1 className="homeTitle">Search by property type</h1>
        <Property />
            <h1 className="homeTitle">Most popular</h1>
        <Popular />
        </div>
        <Mailbox />
        <Footer />
    </div>
  )
}

export default Home
