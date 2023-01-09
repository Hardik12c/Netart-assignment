import './App.css';
import trophy from './assets/1.png'
import personimage from './assets/2.png'
import accesories from './assets/3.png'
import callingimage from './assets/calling.png'
import facebookimage from './assets/facebook.png'
import webnetimage from './assets/webnet.png'
import logo from './assets/logo.png'
function App() {
  return (
    <div className="container">
      <div className="navbox">
        <img src={logo} alt="" />
      </div>
      <div className="mainbox">
        <div className="left">
          <img src={trophy} alt="" />
        </div>
        <div className="right">
          <h5>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h5>
          <div className="list">
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </div>
          <div className="mainimage">
            <img src={personimage} alt="" />
          </div>
          <div className="caption">
            Government of India has awarded the<b
              >"National Energy Conservation Award 2018"</b
            >
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </div>
        </div>
      </div>
      <div className="div_text">
        <span className="span_text"
          >INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </span>
      </div>
      <div className="productbox">
        <img src={accesories} alt="error" />
        <div className="accessoriesname">
          <span
            >Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </span>
        </div>
      </div>
      <hr
        style={{height: "1.2px", border: 'none', backgroundColor: 'rgb(186, 39, 43)'}}
      />
      <div className="productdiscriptionbox">
        <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
        <div className="product_texts">
          <span> CHEMICALS & PROCESS </span>
          <span> POWER </span>
          <span> WATER & WASTE WATER </span>
          <span> OILS & GAS </span>
          <span> PHARMA </span>
          <span> SUGARS & DISTILLERIES </span>
          <span> PAPER & PULP </span>
          <span> MARINE & DEFENCE </span>
          <span> METAL & MINING </span>
          <span> FOOD & BEVERAGE </span>
          <span> PETROCHEMICAL &REFINERIES </span>
          <span> SOLAR </span>
          <span> BUILDING </span>
          <span> HVAC </span>
          <span> FIRE FIGHTING </span>
          <span style={{border: `none`}}> AGRICULTURE & RESIDENTIAL </span>
        </div>
      </div>
      <footer>
        <div className="element">
          <img src={callingimage} alt="" />
          <span>Toll free 18002001234</span>
        </div>
        <div className="element">
          <img src={facebookimage} alt="" />
          <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
        </div>
        <div className="element">
          <img src={webnetimage}alt="" />
          <a href="www.crigroups.com">www.crigroups.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
