import React, {useState} from 'react'
import RegistrationSignup from './RegistrationSignup'
import RegistrationSuccess from './RegistrationSuccess'
import Lottie from 'react-lottie'
import animationData from '../../lotties/her-health.json'

function RegistrationForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    return (
        <>
        <div className="form-container">
           <span className="close-btn">x</span> 
           <div className="form-content-left">
           <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={300}
                    />
            
            <h3>Welcome to HER HEALTH JOURNAL</h3>
            <h4>Create your account today to start tracking your health and creating goals.</h4>
           </div>
        
            {!isSubmitted ? (
            <RegistrationSignup submitForm={submitForm} /> 
            ):(
            <RegistrationSuccess />
            )}
        </div>
        </>
    )
}

export default RegistrationForm
 