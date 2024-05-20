//File Name: Portfolio
//Student Name: Johaen Gnanakumar
//Student ID: 300880309
//Date: May 20 2024
import { Link } from 'react-router-dom';

export default function Layout(){
    return (
        <>
            <h1>My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link>
            </nav>
            <hr />
        </>
    )
}