import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children})=>{
 const [isSidebarOpen, setIsSidebarOpen]=useState(false)
 const [isModalOpen, setIsModalOpen]=useState(false)
 //openSidebar
 const openSidebar = ()=>{
 setIsSidebarOpen(true)
 }
 //closeSidebar
  const closeSidebar = ()=>{
 setIsSidebarOpen(false)
 }
 //openModal
 const openModal = ()=>{
 setIsModalOpen(true)
 }
 //closeModal
  const closeModal = ()=>{
 setIsModalOpen(false)
 }


 return(
  <AppContext.Provider value={{isSidebarOpen, isModalOpen, openSidebar, openModal, closeSidebar, closeModal}}>{children}</AppContext.Provider>
 )
}
//customHook
export const useGlobalContext = ()=>{
 return useContext(AppContext)
}

export{AppContext, AppProvider}