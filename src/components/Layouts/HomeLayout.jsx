import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'
import Navbar from '../pages/Navbar'


export default function HomeLayout() {
    
    return (
        <>
            <Navbar />
            <Outlet /> 
            <Footer />
        </>
    )
}