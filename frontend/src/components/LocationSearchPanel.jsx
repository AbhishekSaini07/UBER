import React from 'react'
import PropTypes from 'prop-types';

const LocationSearchPanel = (props) => {

  // sample array for location
  const locations = [
    "24b, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "23-B, Near Chai Sutta Bar, Sector C, Indrapuri, Bhopal",
    "9/B Indrapuri, Bhopal, Madhya Pradesh 462021",
    "186, 3rd floor, near Hotel Galaxy Star, Near Sargam Cinema, Zone-II, Maharana Pratap Nagar, Bhopal",
    "195 A, Zone 1, M P Nagar, Bhopal",
    "Plot No.224, Near Books & Books, 2nd Floor, Zone-2, MP Nagar, Bhopal",
    "1st Floor, 27, Noble Plaza, Near Patidar Studio, Zone-II, MP Nagar, Bhopal",
    "C-8 3rd Floor, Raisen Rd, Indrapuri, Bhopal",
    "176, Berasia Rd, DIG Bunglow, Green Park Colony, Jamalpura, Bhopal",
    "Rama Complex, S2/163, Near Axis Bank, Zone-I, Maharana Pratap Nagar, Bhopal",
    "210 A, 2nd Floor, Corporate Zone, C21 Mall, Hoshangabad Road, Misrod, Bhopal",
    "B-Sector Indrapuri Raisen Road, MainRoad, in front of GubliGate, Indrapuri B Sector, Bhopal",
    "73 Sector 2, Near Chetak Bridge, Chetak Bridge, Shanti Niketan, Bhopal",
    "3rd Floor, kalpataru Towers, Near Time Coaching, Zone-II, Maharana Pratap Nagar, Bhopal",
    "B-23, 2nd Floor, Sector C, Indrapuri, Bhopal",
    "Vishwatech Building, 71-B, Chetak Bridge, Near Chetak Bridge, Chetak Bridge, Housing Board Colony, Kasturba Nagar, Bhopal",
    "35-B, Raisen Rd, Indrapuri B Sector, Sector B, Indrapuri, Bhopal",
    "23-B, 1st Floor, Sector C, Indrapuri, Bhopal",
    "House No.24, Sr. MIG, B-Sector, Jubliee Gate, Near Aapoorti, Indrapuri, BHEL, Bhopal",
    "2nd Floor 145 Near Kautilya Academy Behind Indian Bank, Zone-II, Bhopal",
    "Plot No 90 Secter C, Secter C, Indrapuri, Bhopal",
    "28, Surya Colony, Kolar Road, Bhopal, Madhya Pradesh",
    "PB-5, Block C, Top Floor, Mansarovar Complex, Shivaji Nagar, Bhopal"
  ];
  
  return (
       
    <div>
          {
        locations.map(function(elem, index){ 
            return  <div key={index} onClick={()=>{props.setVehiclePanel(true);
            props.setPanelOpen(false);}
            } className='flex gap-4 border-2 border-gray-100 active:border-black p-3 my-2 rounded-xl items-center justify-start'>
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-16 rounded-full "><i className="ri-map-pin-fill "></i></h2>
            <h4 className='font-medium'>{elem}</h4>
            </div>
        })
}
        {/* this is just a sample data */}
       
       
    </div>
  )
}
LocationSearchPanel.propTypes = {
  setPanelOpen: PropTypes.func.isRequired,
  setVehiclePanel: PropTypes.func.isRequired,
};

export default LocationSearchPanel