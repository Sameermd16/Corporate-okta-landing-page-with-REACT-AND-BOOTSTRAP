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
    {/* add setion => modal */}
        <div class="modal fade" id="addSection" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="modal-title fs-5" id="exampleModalLabel">Create section</p>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p className='fs-6'>Section name</p>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )   
   
}

            