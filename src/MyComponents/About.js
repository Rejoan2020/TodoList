import React from 'react'

const About = () => {
let myStyle = {
    minHeight:"90vh",
    position: "Relative",
}
  return (
    <div style={myStyle}>
      <h3>About</h3>
      <p>
        Though it is a very basic todolist, it is useful. You can list your to-dos and manage them.
      </p>
    </div>
  )
}

export default About
