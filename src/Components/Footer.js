import React from 'react'
//import './footer.css'

const Footer = () => {
  let footerStyle={
    position: "relative",
    top: "70vh",
    width: "100%",
    border:"4px solid red",
    margin:"40px auto"
  }
  return (
    <footer className='bg-dark text-light py-3 my-3' style={footerStyle}>
      <div className="text-center">
      Copyright &copy; MyTodosList.com

      </div>
    </footer>
  )
}

export default Footer
