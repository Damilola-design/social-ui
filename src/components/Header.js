import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosNotifications } from 'react-icons/io';
import { FaEnvelope, FaBuffer } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi'; 
import { RiArrowDropDownLine } from 'react-icons/ri';
import img1 from '../image/image1.jpg';
import img3 from '../image/image3.png';
import {useState, useEffect} from 'react';


export default function Header() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    
    return (
        <div>
    <section className=" header">
       <div className="m-5 m-sm-1 row" onClick={handleClick}>
         <div className="col-7">
           <ul className="list-group list-group-horizontal">
           <li className="bg-transparent border-0 list-group-item"  onClick={closeMobileMenu}><FaBuffer className="" id="logo"/></li>
             <li className="bg-transparent border-0 list-group-item" ><img src={img1} class="rounded-circle image-1" alt="..." /><RiArrowDropDownLine className="" id="dropdown"/></li>
             <li className="m-1 mt-2 text-white bg-transparent border-0 ml-lg-2 list-group-item text-name">jonathan doe</li>
           </ul>
         </div>
         <div className="col-lg-5 col-sm-8">
           <ul className="list-group list-group-horizontal">
             <li className="bg-transparent border-0 list-group-item"  onClick={closeMobileMenu}><img src={img3} class="rounded flag " alt="..." /></li>
             <li className="bg-transparent border-0 list-group-item"  onClick={closeMobileMenu}> <FaEnvelope  className="icon" id="icon"/></li>
             <li className="bg-transparent border-0 list-group-item"  onClick={closeMobileMenu}> <IoIosNotifications className="" id="icon"/></li>
             <li className="bg-transparent border-0 list-group-item"  onClick={closeMobileMenu}><span className="border-0 search input-group-text input-group" id="addon-wrapping"><BiSearch id="dropdown"/> <input type="text" className="bg-transparent border-0 rounded-end form-control" placeholder="search"  ></input>
              </span></li>
              
           </ul>
         </div>
       </div>
     </section>
     
        </div>
    )
}


