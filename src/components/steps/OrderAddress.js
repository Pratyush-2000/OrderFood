import {React,useState} from 'react'

const OrderAddress = ({address,pincode,handleAddressChange,handlePinChange}) => {
 
  
    return (
      <form className="bg-white border rounded px-8 pt-6 pb-8 mb-4 font-sans">
        <div className="mb-4 ">
          <label className="block text-gray-700 font-bold mb-2 " htmlFor="street">
            Address
          </label>
          <textarea className="h-32 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="street" type="text" placeholder="123 Main St" value={address} onChange={handleAddressChange} />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="zip">
            Pin Code
          </label>
          <input type="number" className = "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" placeholder="123456" value={pincode} onChange={handlePinChange} />
        </div>
      </form>
    );
}

export default OrderAddress