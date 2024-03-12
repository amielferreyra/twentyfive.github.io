import React from 'react'
import './components/home.scss'
import NavBar from './components/NavBar';

function Home() {
    return (
        <header id='inicio'>

            <NavBar/>

            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active back-first">
                        <main className='header'>
                            <h2 className="title">Sed ut perspiciatis unde omnis iste natus</h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                            </p>
                            <div className="btn-home">
                                <a href="#nosotros" class="btn">Read more</a>
                            </div>
                        </main>
                    </div>
                    <div className="carousel-item back-first">
                        <main className='header'>
                            <h2 className="title">Sed ut perspiciatis unde omnis iste natus</h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                            </p>
                            <div className="btn-home">
                                <a href="#productos" class="btn">Read more</a>
                            </div>
                        </main>
                    </div>
                    <div className="carousel-item back-first">
                        <main className='header'>
                            <h2 className="title">Sed ut perspiciatis unde omnis iste natus</h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                            </p>
                            <div className="btn-home">
                                <a href="#contacto" class="btn">Read more</a>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Home;