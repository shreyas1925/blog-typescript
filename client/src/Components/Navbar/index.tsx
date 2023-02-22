import React from 'react'
import "./Navbar.css"

const NavBar= ():JSX.Element  => {
  return (
         <header data-testid='navbar'>
                <div className="logo--header">
                    <h1>The Artifact</h1>
                    <h3>Culture & Art Blog</h3>
                </div>
                <nav>
                    <ul>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
          </header>
  )
}

export default NavBar