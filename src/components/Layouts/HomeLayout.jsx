import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'


export default function HomeLayout() {
    
    return (
        <>
            <Navbar />
            <Outlet /> 
            <Footer />
        </>
    )
}