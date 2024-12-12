import React from 'react'
import Itens from './SidebarData';
import './sidebar.css';
import ShowItens from './ShowItens';

const Sidebar = ( {toggleSidebar} ) => {
  return (
    <>
        <div className={toggleSidebar ? 'app-sidebar active' : 'app-sidebar'}>
          {
            Itens.map((item, index) => {
              return  (
                <ShowItens
                  key={index}
                  item={item}
                />
              )
            })
          }
        </div>
    </>
  )
}

export default Sidebar
