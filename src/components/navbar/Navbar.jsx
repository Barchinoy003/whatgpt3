import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLin, RiCloseLine} from 'react-icons/ri'
import './Navbar.css'
import logo from '../../assets/GPT-3.svg';



const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#whpt3">What is GPT</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)

//BEM --> Block Element Modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar-links'>
        <div className='gpt3_navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3_navbar-links_container'>
          <Menu/>

        </div>
      </div>
      <div className='gpt3_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3_navbar-menu'>
         {toggleMenu 
         ? <RiCloseLine color="#fff" size={27} onClick = {() => setToggleMenu(false)}/>
         : <RiMenu3Line color="#fff" size={27} onClick = {() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3_navbar-menu_container scale-up-center'>
            <div className='gpt3_navbar-menu_container-links'>
            <Menu/>
            <div className='gpt3_navbar-menu_container-links-sign'>
            <p>Sign in</p>
            <button type='button'>Sign up</button>
          </div>
            </div>
          </div>
        )

        }
      </div>
    </div>
  )
}

export default Navbar