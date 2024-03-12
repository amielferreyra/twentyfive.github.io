import React from 'react'
import './components/products.scss'
import Iconright from '../../components/imagenes/Icon feather-arrow-right-circle.png'
import Iconleft from '../../components/imagenes/Icon feather-arrow-left-circle.png'

function Products() {
    return (
        <section className="sau" id="productos">

            <div className="backgr">

                <div className="box">

                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">

                                <h3>Sed ut perspiciatis</h3>
                                <h1>Nemo Enim</h1>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                    aperiam.
                                </p>

                            </div>
                            <div className="carousel-item">

                                <h3>Nemo Enim</h3>
                                <h1>Sed ut perspiciatis</h1>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                    aperiam.
                                </p>

                            </div>
                        </div>



                        <div className="flex">
                            <button className="boton" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span aria-hidden="true">
                                    <img src={Iconleft} alt=""/>
                                </span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="boton mg" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span aria-hidden="true">
                                    <img src={Iconright} alt=""/>
                                </span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>



                    </div>


                </div>


            </div>

        </section>
    )
}

export default Products;