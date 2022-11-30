import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './navbar2.css';

function Navbar2() {
  return (
    <div>
        <Sidebar className='main-nav'>
            <Menu>
                <MenuItem>Create Class</MenuItem>
                <MenuItem>Calendar</MenuItem>
                <MenuItem>Settings</MenuItem>
            </Menu>
        </Sidebar>
    </div>
  )
}

export default Navbar2
