import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import Home from './Home'

export default function () {
  return (
    <div className='container'>
        <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container'>
                        <ul className='nav nav-pills nav-justified'>
                            <li className='nav-item'>
                                <Link className='nav-link' to=""><div >Home</div></Link>
                             
                            </li>
                            <li className='nav-item'>
                             <Link className='nav-link' to="opt1"><div >Opt1</div></Link>
                             
                            </li>
                            <li className='nav-item'>
                               <Link className='nav-link' to="opt2"><div >Opt2</div></Link>
                             
                            </li>
                            
                            <li className='nav-item'>
                               <Link className='nav-link' to="opt3"><div >Opt3</div></Link>
                             
                            </li>
                        </ul>
                        
                    </div>

        </nav>
        <Outlet/>


    </div>
  )
}
