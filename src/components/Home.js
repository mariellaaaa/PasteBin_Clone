import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div class="card">
      <div class="card-header">
        Hello!
      </div>
      <div class="card-body">
        <h5 class="card-title">Welcome to our comunity!</h5>
        <p class="card-text">This is a Web application that allows you to upload and share text online. You can also find a lot of useful information shared by other users. Enjoy it!</p>
      </div>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <Link to="/create" type="button" class="btn btn-outline-warning">Here you can create something amazing!</Link>
        <Link to="/search" type="button" class="btn btn-outline-success">Here you can find exactly what you're looking for!</Link>
      </div>
    </div>
  )
}
