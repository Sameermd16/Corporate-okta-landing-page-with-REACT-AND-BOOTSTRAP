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

            {/* <div className="row gap-3 p-3">
                <a href="#" className="col-md-6 bg-light shadow-lg d-flex flex-column align-items-center justify-content-center gap-2" style={{width: "110px", height: "120px"}}>
                    <img src="slack.png" style={{width: "70%", height: ""}} />
                    <p>slack</p>
                </a>
                <div className="col-6 bg-light shadow-lg d-flex flex-column align-items-center justify-content-center gap-2" style={{width: "110px", height: "120px"}}>
                    <img src="figma.png" style={{width: "100%"}} />
                    <p>Figma</p>
                </div>
                <div className="col-6 bg-light shadow-lg d-flex flex-column align-items-center justify-content-center" style={{width: "110px", height: "120px"}}>
                    <img src="workday.jpg" style={{width: "100%"}} />
                    <p>workday</p>
                </div>
                <div className="col-6 bg-light shadow-lg d-flex flex-column align-items-center justify-content-center" style={{width: "110px", height: "120px"}}>
                    <img src="jamfpro.png" style={{width: "100px"}} />
                    <p>jamf pro</p>
                </div>
                <div className="col-6 bg-light shadow-lg d-flex flex-column align-items-center justify-content-center" style={{width: "110px", height: "120px"}}>
                    <img src="servicenow.png" style={{width: "100px", height: "100px"}} />
                </div>
                <div className="col-6 bg-light shadow-lg d-flex flex-column justify-content-center align-items-center" style={{width: "110px", height: "120px"}}>
                    <img src="github.webp" style={{width: "100%", height: "50px"}} />
                </div>   
                <div className="col-6 bg-light shadow-lg d-flex flex-column justify-content-center align-items-center" style={{width: "110px", height: "120px"}}>
                    <img src="onedrive.png" style={{width: "100%"}} />
                </div>  
                <div className="col-6 shadow-lg bg-light d-flex flex-column align-items-center justify-content-center" style={{width: "110px", height: "120px"}}>
                    <img src="outlook.png" style={{width: "100px"}} />
                </div> 
                <div className="col-6 shadow-lg bg-light d-flex flex-column justify-content-center align-items-center" >

                </div>
            </div> */}