import "./footer.css"
import { FaHome, FaTags, FaBus } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLists">
        
        {/* First List with House Icon */}
        <div className="footerListContainer">
          <FaHome className="listIcon"/> <span className="footer-first">Interesting:</span> {/* House Icon */}
          <ul className="footerList">
            <li className="footerListItems">Countries</li>
            <li className="footerListItems">Regions</li>
             <li className="footerListItems">Cities</li>
             <li className="footerListItems">Districts</li>
             <li className="footerListItems">Hotels</li>
            {/* ... other list items */}
          </ul>
        </div>

        {/* Second List with Tags Icon */}
        <div className="footerListContainer">
          <div className="footer-first"><FaTags className="listIcon" /> <span>Promotions:</span></div>
          <ul className="footerList">
            <li className="footerListItems">Members</li>
            <li className="footerListItems">Offers</li>
            <li className="footerListItems">Discounts</li>
            <li className="footerListItems">Deals</li>
            {/* ... other list items */}
          </ul>
        </div>

        {/* Third List with Bus Icon */}
        <div className="footerListContainer">
          <FaBus className="listIcon" /> <span className="footer-first">Transports and Other:</span>
          <ul className="footerList">
            <li className="footerListItems">Monuments</li>
            <li className="footerListItems">Must-visit</li>
            <li className="footerListItems">Top places</li>
            <li className="footerListItems">Nightlife</li>
            <li className="footerListItems">Points of interests</li>
            {/* ... other list items */}
          </ul>
        </div>

      </div>
      <div className="footerText">Copyright &copy; 2023</div>
    </div>
  )
  // return (
  //   <div className="footer">
  //     <div className="footerLists">
  //       <ul className="footerList">
  //           <li className="footerListItems">Countries</li>
  //           <li className="footerListItems">Regions</li>
  //           <li className="footerListItems">Cities</li>
  //           <li className="footerListItems">Districts</li>
  //           <li className="footerListItems">Airports</li>
  //           <li className="footerListItems">Hotels</li>
  //       </ul>
  //       {/* second */}

  //       <ul className="footerList">
  //           <li className="footerListItems">Members</li>
  //           <li className="footerListItems">Offers</li>
  //           <li className="footerListItems">Discounts</li>
  //           <li className="footerListItems">Deals</li>
           
  //       </ul>
  //       {/* third */}

  //       <ul className="footerList">
  //           <li className="footerListItems">Monumets</li>
  //           <li className="footerListItems">Must-visit</li>
  //           <li className="footerListItems">Top places</li>
  //           <li className="footerListItems">Nightlife</li>
  //           <li className="footerListItems">Points of interests</li>
  //       </ul>
  //     </div>
  //     <div className="footerText">Copyright &copy; 2023</div>
  //   </div>
  // )
}

export default Footer
