import React from 'react'

const OrderConfirmation = ({address,pincode,order}) => {
    return (
        <div className="bg-white border rounded px-8 pt-6 pb-8 mb-4 font-sans">
          <div className="mb-4 ">
            <label className="block text-gray-700 font-bold mb-2 " htmlFor="street">
              Address
            </label>
            <div className="h-24 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="street" type="text" placeholder="123 Main St"  >
             {address}
            </div>
          </div>

          <div className="mb-4 ">
            <label className="block text-gray-700 font-bold mb-2 " htmlFor="street">
              Pincode
            </label>
            <div className="h-12 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="street" type="text" placeholder="123 Main St"  >
             {pincode}
            </div>
          </div>

          <div className="mb-4 ">
            <label className="block text-gray-700 font-bold mb-2 " htmlFor="street">
              Final Order
            </label>
            <div className="flex justify-start items-center ">
                <div className="grid grid-cols-3 gap-10 rounded font-sans border-2 border-gray-100 p-5">
                <div>
                    <h2 className="text-md font-medium mb-4">Starters</h2>
                    {order?.starters.map((starter,index) => 
                    (<div key={starter.id} className="flex items-center mb-2">

                            <label htmlFor={`starter-${starter.id}`}>{index+1}. {starter.name} - {starter.price}</label>
                        </div>)
                    )}
                </div>
                <div>
                    <h2 className="text-md font-medium mb-4">Main Course</h2>
                    {order?.mainCourse.map((course,index) => (
                    <div key={course.id} className="flex items-center mb-2">
        
                        <label htmlFor={`course-${course.id}`}>{index+1}. {course.name}  - {course.price}</label>
                    </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-md font-medium mb-4">Dessert</h2>
                    {order?.dessert.map((dessert,index) => (
                    <div key={dessert.id} className="flex items-center mb-2">
                    <label htmlFor={`dessert-${dessert.id}`}>{index+1}. {dessert.name} -  {dessert.price}</label>
                </div>
                ))}
            </div>
         </div>
            </div>
          </div>

     </div>
      );
}

export default OrderConfirmation