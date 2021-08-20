import React from 'react'
import '../../scss/RegForm.scss'
import Lottie from 'react-lottie'
import animationData from '../../lotties/celebrate.json'


function RegistrationSuccess() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
       <div className="form-content-right">
           <div className="form-success">
               <h4>Congratulations!</h4>
               <h4> You are now a registered Her Health Journal member!</h4>
            </div>
           <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={300}
                    />
            
       </div>
    )
}

export default RegistrationSuccess
