import React from 'react'
import AddTodo from '../Components/AddTodo'
import TodoList from '../Components/TodoList'
import './Home.css'
function Home() {
  return (
    <>
  

<section className="vh-100" style={{ backgroundColor: 'rgb(9 124 239 / 27%)' }}>
    <h1 className='text-center ' style={{color:'black'}}>To do List</h1>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center  h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '15px' }}>
              <div className="card-body p-5">
                
                <AddTodo />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Home
