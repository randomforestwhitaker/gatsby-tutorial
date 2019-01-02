import React from "react"
import { Link } from "gatsby"
import Header from "..//components/header"

export default () => (
    <div style={{ color: `purple`}}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/fbl-eng-pr-arsenal-tottenham-5c065f433d3f02f033000004.jpg"></img>
    </div>
)