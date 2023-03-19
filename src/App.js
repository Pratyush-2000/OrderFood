import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { useEffect, useState } from "react";
import OrderAddress from "./components/steps/OrderAddress";
import OrderItems from "./components/steps/OrderItems";
import OrderComplete from "./components/steps/OrderComplete";
import { menuData } from "./components/data/data";
import Menu from "./components/Menu";
import OrderConfirmation from "./components/steps/OrderConfirmation";

function App() {

  console.log("curRestaurantName",menuData.areas[0].restaurants[0].menu);

  const [currentStep,setCurrentStep] = useState(1);
  const [area, setArea] = useState(menuData.areas[0].name);
  const [restaurants,setRestaurants] = useState(menuData.areas[0].restaurants);
  const [selectedRestaurant,setSelectedRestaurant] = useState(menuData.areas[0].restaurants[0].name)
  const [menu,setMenu] = useState(menuData.areas[0].restaurants[0].menu)
  const [order,setOrder] = useState({
    starters : [],
    mainCourse : [],
    dessert: []
})
  const [address,setAddress] = useState("");
  const [pincode,setPincode] = useState(""); 
  const [error,setError] = useState({display:false,message:""})



  console.log("curMenu",menu,area);

  useEffect(() => {
    
    const curArea = menuData?.areas.find(curr => curr?.name == area);
    console.log("useEffect1");  
    const newRestaurants = curArea?.restaurants
    setRestaurants(newRestaurants)

  

  }, [area])

  useEffect(() => {

    setSelectedRestaurant(restaurants[0].name)
    setOrder({
      starters : [],
      mainCourse : [],
      dessert: []
  }) 

  }, [restaurants])


  useEffect(() => {
    
    console.log("useEffect3");  
    const curArea = menuData?.areas.find(curr => curr?.name == area);
    const newRestaurant = curArea?.restaurants?.find(curr => curr?.name == selectedRestaurant)
    const newMenu = newRestaurant?.menu
    console.log(selectedRestaurant);  
    setMenu(newMenu)
  
    
  }, [selectedRestaurant])
  

  const handleAddressChange = (event) => {

    setAddress(event.target.value);
  }

  const handlePinChange = (event) => {

    setPincode(event.target.value);
  }
 

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  }

  const isItemOrdered = (itemCategory,item) => {

    console.log("Called IsitemOrdered",order[itemCategory].find(curr => curr.id == item.id) != undefined) ;
    return order[itemCategory].find(curr => curr.id == item.id) != undefined
  }

  const handleRestaurantChange = (event) => {

    setSelectedRestaurant(event.target.value);
    setOrder({
      starters : [],
      mainCourse : [],
      dessert: []
    }) 
  }

  const handleOrder = (itemCategory,item) => {

    if(order[itemCategory].find(curr => curr.id == item.id) != undefined)
      {
        const newCategoryOrder = order[itemCategory].filter( curr => curr.id != item.id)
        const newOrder = {...order};
        newOrder[itemCategory] = [...newCategoryOrder]
        setOrder(newOrder)
        return;
      }
    else{
      const newOrder = {...order};
      newOrder[itemCategory].push(item);
      setOrder(newOrder);
      return ;
      
    }



  }


  console.log(currentStep);

  const steps = [

    { 
      stepName : "OrderDetails",
      stepAction : "Select area, restaurant, items"
    },
    {
      stepName : "OrderAddress",
      stepAction : "Provide Address"
    },
    {
      stepName : "OrderConfirmation",
      stepAction : "Confirm Order"
    }

  ]

  const displayStep = (currentStep) => {


    switch(currentStep) {

      case 1:
        return (<OrderItems 
                area ={area} 
                restaurants= {restaurants} 
                selectedRestaurant = {selectedRestaurant}
                handleRestaurantChange = {handleRestaurantChange}
                menu = {menu}
                order={order}
                handleOrder ={handleOrder}
                isItemOrdered = {isItemOrdered}
                changeArea={handleAreaChange}/>)
        break;
      case 2:
        return (<OrderAddress address={address}
               pincode={pincode}
               handlePinChange={handlePinChange}
               handleAddressChange={handleAddressChange}/>
               ) 
        break;
      case 3:
        return (<OrderConfirmation address={address} pincode={pincode} order={order}/>)
        break;
      case 4:
        return (<OrderComplete/>);
        break;
      default:
        break;

    }


  }

  const setNextStep = () => {

    if(currentStep > 3)
      return;
    
    if(handleError()){

      setCurrentStep(cur => cur+1);

    }



  }

  const handleError =() => {

    if(currentStep == 1){

      if(!order.starters.length && !order.mainCourse.length && !order.dessert.length )
      {
        
        setError({display:true,message:"No Order Items Selected!"})
        setTimeout(() => setError({display:false,message:""}),1000);
        return false;
      }

    }
    if(currentStep == 2) {

      if(address.length ==0){
        setError({display:true,message:"Address must not be empty !"})
        setTimeout(() => setError({display:false,message:""}),1000);
        return false;

      }

      if(address.length < 10){
        setError({display:true,message:"Address must be at least 10 characters !"})
        setTimeout(() => setError({display:false,message:""}),1000);
        return false;

      }

      if(pincode.length == 0){
        setError({display:true,message:"Pincode must not be empty"})
        setTimeout(() => setError({display:false,message:""}),1000);
        return false;

      }

      if(pincode.length != 6){
        setError({display:true,message:"Pincode must be exactly 6 digits"})
        setTimeout(() => setError({display:false,message:""}),1000);
        return false;

      }


    }

    return true ;

  }

  const setPrevStep = () => {

    if(currentStep == 1)
      return;
    
    setCurrentStep(cur => cur-1);


  }


  return (
    <div className="md:w-2/3 mx-auto p-5 mt-5 shadow bg-white relative">
      <div className="container mt-5">
        <Stepper steps={steps} currentStep = {currentStep}/>
      </div>
        {displayStep(currentStep)}

        {error?.display &&
      
            (
              <div class="right-0 text-center py-4 lg:px-4">
              <div class="p-2 bg-gray-800 items-center text-white leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span class="flex rounded-full black uppercase px-2 py-1 text-xs font-bold mr-3">Error</span>
                <span class="font-semibold mr-2 text-left flex-auto">{error?.message}</span>
              </div>
              </div>
            )
            
      
        }
      <StepperControl 
        nextStep = {setNextStep}
        prevStep = {setPrevStep}
        currentStep ={currentStep}
      />

      
      
    </div>
  );
}

export default App;
