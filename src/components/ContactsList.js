import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



//this is the list of contacts that is accepting the contacts props from App (which is the state holding our data). We'll iterate through our contacts (props) and create a list of contacts that links to a contact info page if the contact is clicked. The Link tag assigns the route based on the id of the contact
const ContactsList = ({contacts}) => (
      <div>
        <div className="row heading">
          <div className="col-md-3 offset-md-1">
            <h1>My Contacts</h1>
          </div>
          <div className="col-md-2 button-div">
            <button><Link to="/contact/new">Add Contact</Link></button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <ul>
              {contacts.map(contact => (
                <li key={contact.id}>
                  <p className="contact-name"><Link to={`/contact/${contact.id}`}>{contact.name}</Link></p>
                  <a><p>edit</p></a><a><p>delete</p></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )



export default ContactsList