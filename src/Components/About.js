import React from 'react'

const About = () => {

    const style={
        border:"3px solid blue",
        width:"50%",
        padding:"30px 0px 10px ",
        margin:"20%"
    }
    return (
        <div className='text-center my-5' style={style}> 
            <h1>ABOUT US</h1>
            <h3>CREATER OF THIS TODO APP</h3>
             <br />
             <h4>Taranpreet Singh</h4>
             <h4>taranpreets598@gmail.com</h4>
             <h4>9958364621</h4>
             <h4>New Delhi</h4>
        </div>
    )
}

export default About
