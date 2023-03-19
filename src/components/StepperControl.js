import React from 'react'

const StepperControl = ({nextStep,prevStep,currentStep}) => {
  return (
    <div className='container flex justify-center mt-5 mb-8 font-sans'>

        {(currentStep > 1  && currentStep < 4 )&&

            (<button className='py-2 px-6 mx-5 bg-gray-200'
            onClick={prevStep}
                >
                    Back
            </button>)
        
        
        }

        {currentStep < 4 &&

            (<button className='py-2 px-6 mx-5 bg-gray-200'
            onClick={nextStep}
                >
                    {currentStep == 3 ? "Confirm" : "Next"}
            </button>)


        }

        
    </div>
  )
}

export default StepperControl