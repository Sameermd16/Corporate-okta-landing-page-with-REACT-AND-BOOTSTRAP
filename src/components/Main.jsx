import { appTiles } from "../data/data"
import { Link } from 'react-router-dom'

export default function Main() {

        
    return (
        <>
        <div className='d-flex justify-content-between align-items-center px-3'>
            <p className='fw-bold'>My Apps</p>
            <div className='dropdown'>
                <button className='dropdown-toggle btn btn-outline-primary' data-bs-toggle='dropdown'>sort</button>
                <ul className='dropdown-menu sort p-1'>
                    <li className='dropdown-item text-primary'>Sections</li>
                    <li className='dropdown-item text-primary'>Name ascending</li>
                    <li className='dropdown-item text-primary'>Name descending</li>
                    <li className='dropdown-item text-primary'>Last added</li>
                </ul>
            </div>
        </div>
        <div>
            <div className='app-tiles-wrapper mt-4'>
                {appTiles.map((object) => {
                    return (
                        <div className='app-div shadow'>
                            <Link to={object.url} target='_blank'>
                                <div>
                                    <img src={object.img} style={object.style} />
                                </div>
                            </Link>
                        </div>
                    )
                })}

            </div>        
        </div>
        </>
    )   
   
}

            