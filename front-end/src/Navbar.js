import React, { useState } from 'react'
import * as Falcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

      <div className='navbar'>
        <Link to="#" className='menu-bars'>
          <div class='text-black'>
            <Falcons.FaBars onClick={showSidebar} />
          </div>
        </Link>
      </div>
      <div >
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle' class='ml-52 text-2xl'>
              <Link to='#' className='menu-bars'>
                <div class='text-slate-100'>
                  <Falcons.FaRegWindowClose />
                </div>
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div class='mt-0.5'>
                      {item.icon}
                    </div>
                    <div>
                      <span>{item.title}</span>
                    </div>
                  </Link>
                </li>
              )
            })}

          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
