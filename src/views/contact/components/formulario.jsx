import React from 'react'
import contimg from '../../../components/imagenes/contact-image.png'
import './contact.scss'

function formulario(props) {
    return (
      <section>
        <div className="contact-wrapper" id="contacto">
          <div className="contact-form">
            <h1 className="titulo">Get in touch <br />
              <span>We are hiring!</span></h1>
            <form onSubmit={props.handleSubmit}>
              <div>
                <label htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  maxLength="40"
                  onChange={props.handleChange}
                  value={props.newUser.name}
  
                />
              </div>
              <div className="separador">
                <label htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="e-mail"
                  maxLenght="60"
                  aria-describedby="emailHelp"
                  onChange={props.handleChange}
                  value={props.newUser.email}
                />
              </div>
              <div className="separador">
                <label htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone number"
                  maxLenght="12"
                  onChange={props.handleChange}
                  value={props.newUser.phone}
                />
              </div>
              <div className="separador-mensaje">
                <label htmlFor="message">
                  Message
                </label>
                <input
                  type="text-area"
                  id="message"
                  placeholder="Please, leave your message"
                  maxLenght="500"
                  onChange={props.handleChange}
                  value={props.newUser.message}
                />
              </div>
              <div className="boton">
                <button disabled={props.disableSubmit} type="submit" className="botoncito">
                  Send
                </button>
              </div>
              {props.success &&
                <div className="mensaje-exito" role="alert">
                  Thank you! Your information has been received!
                </div>}
              {props.error &&
                <div className="mensaje-error" role="alert">
                  {props.errorMessage}
                </div>}
            </form>
          </div>
  
          <div>
            <img className='globo' src={contimg} alt="" />
          </div>
        </div>
      </section>
  
    );
  }

export default formulario;

