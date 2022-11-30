import React from 'react'
import { Header } from "./components"
import Button from 'react-bootstrap/Button';
import "./home.css";


function Home() {
  return (
    <div>
      <Header />
      <div className='options'>
        <Button variant="secondary" className="mx-3" size="lg" href="/teacher">
          Teacher
        </Button>
        <Button variant="secondary" className="mx-3" size="lg" href="/student">
          Student
        </Button>
      </div>

    </div>
  )
}

export default Home;




