import React from 'react'
import styles from 'styled-components'
import { Link } from "react-router-dom";
const Container =styles.div`
height:60px;
width:100%;
background-color: orange;
`
const Lists=styles.ul`
list-style-type: none;
display:flex;
justify-content:space-between;
`
const ListItem=styles.li`
padding:5px;
`

export default function Navbar() {
  return (
    <div>
      <Container>
<Lists>
<ListItem><Link to ="/">Home</Link></ListItem>
<ListItem><Link to ="/about">About</Link></ListItem>
<ListItem><Link to="/contact">Contact</Link></ListItem>
</Lists>



      </Container>
    </div>
  )
}
