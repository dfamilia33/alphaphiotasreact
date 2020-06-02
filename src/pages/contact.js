import React from "react"
import Toolbar from "../components/toolbar"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function Contact() {
  return (
 
    <div >
      <Toolbar/>
      <h1 style={{ color: `red` }}>Contact Page Coming Soon</h1>
      <DropdownButton id="dropdown-basic-button" title="Subject">
        <Dropdown.Item href="#/action-1">General</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Recruitment/Rush</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Public Relations</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Social Events</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Alumni Relations</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Fundraising Efforts</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Community Service</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}