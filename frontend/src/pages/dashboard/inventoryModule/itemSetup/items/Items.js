import React from 'react'
import { MdAddToQueue } from "react-icons/md";
import "./Items.css";
import Button from 'react-bootstrap/Button';
import { FiSearch } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import {NavDropdown } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FaEdit } from "react-icons/fa";
import Dashboard from '../../../Dashboard';

const Items = () => {
    return (
        <div>
          <Dashboard/>
    <div className='items-main d-flex justify-content-between align-items-center'>
        <div className='items-left m-1' >
            <h2>Items</h2>
        </div>
        <div>
        <Button variant="success" >Upload</Button>{' '}
       
            <Button variant="dark" className='m-1' ><i> <MdAddToQueue/> Create</i></Button>
            </div>
        </div>
               <div className='items-second'>

              <div className='items-third'>
    
                <i><FiSearch /></i>
                <i><MdArrowDropDown /></i>
              
                <input placeholder='Search: All Text Columns' className='my-1'/>
                <button>Go</button>


                  <button>
                  <NavDropdown title="" id="main-nav-dropdown" >
                  <NavDropdown.Item>Filter</NavDropdown.Item>
                  <NavDropdown.Item>Data</NavDropdown.Item>
                  <NavDropdown.Item>Format</NavDropdown.Item>
                  <NavDropdown.Item>Selection</NavDropdown.Item>
                  <NavDropdown.Item>Chart</NavDropdown.Item>
                  <NavDropdown.Item>Report</NavDropdown.Item>
                    </NavDropdown>
                  </button>

                </div>
              

<div className='items-table'>
   <Table>
   <thead>
          <tr>
            <th>Edit</th>
            <th>Name</th>
            <th>Full Name</th>
            <th>Unit Types</th>
            <th>Stock Unit</th>
            <th>Item Category</th>
            <th>Type Name</th>
            <th>Purchase Unit</th>
            <th>Purchase Order</th>
            <th>Sale Unit</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><FaEdit /></td>
            <td>FOH Item</td>
            <td>1254544</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td><FaEdit /></td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td><FaEdit /></td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td><FaEdit /></td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
   </Table>
</div>
                  
</div>
            </div>
  )
}

export default Items