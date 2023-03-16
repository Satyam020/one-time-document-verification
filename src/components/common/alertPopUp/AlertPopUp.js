import "./AlertPopUp.css";
import { useNavigate } from "react-router-dom";

function AlertPopUp({headerObj=null, msgObj=null, btnObj=null}) {

    /* 
        headerObj: {text, className}
        msgObj: {text, className},
        btnObj: {
            primary: {text, className, func},
            secondary: {text, className, func}
        }
       
     */

    return (
        <div className="pop-up-container">
          <div className="pop-up-content-wrapper">
            {
                Object.keys(headerObj).length > 0 && 
                <div className={`content-heading ${headerObj.className}`}>
                    {headerObj.text}
                </div>

            } 

            {
                Object.keys(msgObj).length > 0 &&
                <div className={`content-body ${msgObj.className}`}>
                    {msgObj.text}
                </div>

            }

            {
                Object.keys(btnObj).length > 0 &&
                <div className="action-container btn-container text-center">
                    {
                        btnObj['primary'] && 
                        <div className={`primary-btn ${btnObj['secondary'] == null  && 'w-100'}`}>
                            <button type = "button" className= {`btn btn-primary ${btnObj.primary.className}`} onClick={()=>btnObj.primary.func?.()}>{btnObj.primary.text}</button>
                        </div>
                    }

                    {   
                        btnObj['secondary'] && 
                        <div className={`secondary-btn`}>
                            <button type = "button" className = {`btn btn-info ${btnObj.secondary.className}`} onClick={()=>btnObj.secondary.func?.()}>{btnObj.secondary.text}</button>
                        </div>
                    }
                </div> 
            }
            </div>
        </div>
    )
}


export default AlertPopUp;