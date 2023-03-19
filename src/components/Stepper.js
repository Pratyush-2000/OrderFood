import React from 'react'
import { FaCheck } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import { VscCircle, VscCircleLargeFilled } from "react-icons/vsc";



const Stepper = ({steps,currentStep}) => {


  const noOfSteps = steps?.length ;



  return (
    <div className='mx-4 px-28 mb-20 flex justify-between items-center font-sans'>

        {
            steps?.map( (curr,index) => {

                const textClassBasedOnCurrentStep = index+1 <=  currentStep  ? "text-white bg-black" : "text-gray-400"
                
                const borderClassBasedOnCurrentStep = index+1 < currentStep  ? "border-black" : ""

                return (
                    <React.Fragment key={index}>
                        <div className="relative flex flex-col items-center">
                            <div className={`w-12 h-12 py-3 rounded-full flex items-center justify-center border-2 border-gray-300 ${textClassBasedOnCurrentStep}`}
                            >
                                {index+1 < currentStep   ?  <MdCheck/> : index+1}
                            </div>
                            <div className="absolute top-0 mt-16 w-64 text-md text-center">
                                {curr.stepAction}
                            </div>
                        </div>

                        {
                            
                            !(index+1 == noOfSteps) && 
                            (
                                <div className={`flex-auto border-t-8 mx-2 rounded-lg ${borderClassBasedOnCurrentStep} `}>
                                </div>
                            )
                        }

                    </React.Fragment>

                )

            })
        }
       
    </div>
  )
}

export default Stepper