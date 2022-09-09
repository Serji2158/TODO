import React from 'react'
import {useNavigate} from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>About Service</h1>
      <p>You have probably come across the need to write down all sorts of tasks that you must remember to do. To do this, you are constantly looking for a piece of paper to make a note at your fingertips. Sensitively nervous when it is not at hand.<br/> Maybe it's time to change your habits. <br/> Why paper if you are constantly working with a computer?<br/>
        This service will help save you from "paper addiction". Record and control the execution of tasks on the computer. It's convenient, save your nerves, and makes the planet better by keeping on paper)))<br />
      Let's do it!</p>
      <button className='btn' onClick={() => navigate('/')}>BACK TO TASK LIST</button>
    </>
  )
}
