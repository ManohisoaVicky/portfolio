import React from "react"

import "./ContactSection.css"

function ContactSection({state}) {

  return (
    <section id="contact-section" className={!state.contact && "hide"}>
        <h2>Contacts</h2>
    </section>
  )
}

export default ContactSection