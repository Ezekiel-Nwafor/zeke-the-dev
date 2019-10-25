import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <p>&#9400; 2019 Ezekiel Nwafor </p>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>

                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div>  
            </div>
        </footer>
    )
};

export default Footer;