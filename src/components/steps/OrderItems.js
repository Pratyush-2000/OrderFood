import {React,useState} from 'react'
import Menu from '../Menu';
import { menuData } from '../data/data';


const OrderItems = (
    {area,
    changeArea,
    selectedRestaurant, 
    handleRestaurantChange,
    restaurants,
    menu,
    order,
    handleOrder,
    isItemOrdered}) => {

    return (
      <form className="bg-white rounded-md px-8 pt-6 pb-8 mb-4 font-sans border">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="country">
            Area
          </label>
          <div className="relative">
            <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" value={area} onChange={changeArea}>
                {menuData?.areas.map(curr => {

                    return <option key={curr.name} value={curr.name}>{curr.name}</option>

                })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="country">
            Restaurants
          </label>
          <div className="relative">
            <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" value={selectedRestaurant} onChange={handleRestaurantChange}>
              {restaurants?.map(curr => {

                return <option key={curr.name} value={curr.name}>{curr.name}</option>

              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="country">
            Menu
          </label>
           <Menu menu = {menu} handleOrder= {handleOrder} isItemOrdered= {isItemOrdered} order={order}/>
        </div>




        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" value={name} onChange={handleNameChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com" value={email} onChange={handleEmailChange} />
        </div> */}
        
      </form>
    );
}


export default OrderItems