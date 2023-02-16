import react from 'react'
import  './Navbar.css'
const Navbar = () => {

    return (
        <>
            <nav class="navbar sticky-top navbar-expand-lg bg-white border border-1">
                <div class="container-fluid mt-2 mb-1">
                    <a class="navbar-brand" href="#">
                        <img src="https://companieslogo.com/img/orig/ABNB-4aaade0f.png?t=1633511992" alt="Logo" width="35" height="34" class="d-inline-block align-text-top" />
                        <span className='mt-4'>
                            <b>TraveSon</b>
                        </span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                            <div className='rounded-pill px-2 shadow-sm border border-2'>
                                <form class="d-flex w-100 me-2 m-1" role="search">
                                    <input class="form-control me-1 rounded-pill input-lg border-0" type="search" placeholder="Start your search" aria-label="Search" />
                                    <button class=" rounded-circle px-2 border-0 searchButton" type="submit"><i class="bi bi-search m-1 text-light"></i></button>
                                </form>
                            </div>
                        </ul>
                        <span class="nav-item me-2">
                            <div>TraveSon your home</div>
                        </span>
                        <span class="nav-item dropdown me-2">
                            <div class="dropdown">
                                <button class="dropdown-toggle bg-white rounded-pill p-1 border border-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-person-circle m-2 fs-5"></i>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" type="button">Action</button></li>
                                    <li><button class="dropdown-item" type="button">Another action</button></li>
                                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </div>
                        </span>
                    </div>
                </div>
            </nav>
            </>
    )
}

export default Navbar;