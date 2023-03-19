import React, { useState } from 'react';



function Menu({menu,handleOrder,order,isItemOrdered}) {

    

  return (
    <div className="flex justify-start items-center ">
        <div className="grid grid-cols-3 gap-10 rounded font-sans border-2 border-gray-100 p-5">
        <div>
            <h2 className="text-md font-medium mb-4">Starters</h2>
            {menu?.starters.map((starter) => 
            (<div key={starter.id} className="flex items-center mb-2">
                    <input
                    id={`starter-${starter.id}`}
                    type="checkbox"
                    name="starters"
                    checked={order.starters.find((curr) => curr.id == starter.id) != undefined}
                    className="mr-2"
                    onChange={() => handleOrder("starters",starter)}
                    />
                    <label htmlFor={`starter-${starter.id}`}>{starter.name} - {starter.price}</label>
                </div>)
            )}
        </div>
        <div>
            <h2 className="text-md font-medium mb-4">Main Course</h2>
            {menu?.mainCourse.map((course) => (
            <div key={course.id} className="flex items-center mb-2">
                <input
                id={`course-${course.id}`}
                type="checkbox"
                name="mainCourse"
                checked={order.mainCourse.find((curr) => curr.id == course.id) != undefined}
                onChange={() => handleOrder("mainCourse",course)}
                className="mr-2"
                />
                <label htmlFor={`course-${course.id}`}>{course.name}  - {course.price}</label>
            </div>
            ))}
        </div>
        <div>
            <h2 className="text-md font-medium mb-4">Dessert</h2>
            {menu?.dessert.map((dessert) => (
            <div key={dessert.id} className="flex items-center mb-2">
                <input
                id={`dessert-${dessert.id}`}
                type="checkbox"
                name="dessert"
                checked={order.dessert.find((curr) => curr.id == dessert.id) != undefined}
                onChange={() => handleOrder("dessert",dessert)}

            className="mr-2"
            />
            <label htmlFor={`dessert-${dessert.id}`}>{dessert.name} -  {dessert.price}</label>
        </div>
        ))}
    </div>
    </div>
</div>
);
}
export default Menu