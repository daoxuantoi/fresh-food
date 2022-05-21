import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateContainer, Header, MainContainer } from './components'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'

const App = () => {

  const [{foodItems}, dispatch] = useStateValue()

  const fetchAllFoodItems = async()=>{
    const foodItems = await getAllFoodItems()
    dispatch({
      type: actionType.SET_FOOD_ITEMS,
      foodItems: foodItems,
    } )
  }

  useEffect(()=>{
    fetchAllFoodItems();
    
  },[])

  return (
    <AnimatePresence>
      <div className="bg-primary w-full h-auto flex flex-col">
      <Header />
      <main className="mt-14 md:mt-20 md:px-16 px-4 py-4 p-8 w-full">
        <Routes>
          <Route path="/" element={<MainContainer />}/>
          <Route path="/createItem" element={<CreateContainer />}/>

        </Routes>
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App
