import React from 'react'
import  Formulario  from './components/formulario'
import './components/contact.scss'
import axios from 'axios'
import { useState } from "react"

function Contact() {
    const [newUser, setNewUser] = useState({ name: "", phone: "", email: "", message: "", notifications: false })
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("Something went wrong! Try again")


    const disableSubmit = !newUser.name || !newUser.phone || !newUser.email || !newUser.message 


    const handleChange = (event) => {
        const property = event.target.id
        const value = event.target.value
        setNewUser({ ...newUser, [property]: value })
        if (success) setSuccess(false)
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post('https://25wattsanam.online/public/index.php/api/insert-personas', newUser)
        .then(
            response => {
                setSuccess(true)
                setNewUser({ name: "", phone: "", email: "", message: "", notifications: false })
            }
        ).catch(
            error => {
                setError(true)
                error.message ? setErrorMessage(error.message) : setErrorMessage("Something went wrong! Try again")
            }
        )
    }

    return (
        <Formulario newUser={newUser} errorMessage={errorMessage} error={error} success={success} disableSubmit={disableSubmit} handleChange={handleChange} handleSubmit={handleSubmit} />
    )
}

export default Contact;