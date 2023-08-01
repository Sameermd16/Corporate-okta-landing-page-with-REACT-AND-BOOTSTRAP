import { appTiles } from "../data/data"

export default function Main() {

        
    return (
        <>
        <div>
            <div className='app-tiles-wrapper' style={{backgroundColor: 'gray'}}>
                {appTiles.map((object) => {
                    return (
                        <div className='app-div shadow'>
                            <div>
                                <img src={object.img} style={object.style} />
                            </div>
                        </div>
                    )
                })}

            </div>
            
        </div>
        </>
    )   
   
}

            