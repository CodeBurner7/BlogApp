import React from 'react'

const Contact = () => {
  const css={
    color: "#333", /* Dark grey text color */
  fontSize: "36px", /* Larger font size */
  textAlign: "center",
  padding: "20px", /* Add some padding for spacing */
  backgroundColor:" #f9f9f9", /* Light grey background */
  borderRadius: "10px", /* Rounded corners */
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", /* Add a subtle shadow */
  transition: "background-color 0.3s ease" /* Smooth transition on hover */
  }
  return (
    <div style={css}>Contact</div>
  )
}

export default Contact