import { Route, Routes } from 'react-router-dom'

import AboutPage from './components/about.jsx'
import ServicesPage from './components/services.jsx'
import ContactPage from './components/contact.jsx'
import ProjectsPage from './components/projects.jsx'
import HomePage from "./components/home.jsx"

const MainRouter = () => {
    return (<div>
            <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage/>} />
            <Route exact path="/projects" element={<ProjectsPage/>} />
            <Route exact path="/services" element={<ServicesPage />} />
            <Route exact path="/contact" element={<ContactPage/>} />
            </Routes>
        </div>)
}
export default MainRouter
