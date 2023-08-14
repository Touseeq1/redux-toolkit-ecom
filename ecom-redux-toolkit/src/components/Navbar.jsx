import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const item = useSelector((state) => state.cart)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                   <strong><h4>Cart item: {item.length}</h4></strong>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="navLink" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="navLink" to="/cart">Select Cart</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar