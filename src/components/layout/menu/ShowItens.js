import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ShowItems = ({item}) => {

  const [open, setOPen] = useState(false);
  
  if (item.sub_menu) {
    return (
      <>
        <div className={open ? 'app-sidebar-item open' : 'app-sidebar-item'}>
          <div className='app-sidebar-title'>
            <span>
              {item.icon && <i>{item.icon}</i>}
              {item.page}
            </span>
            <i>
              <BsIcons.BsChevronBarDown
                className='app-toggle-btn'
                onClick={() => setOPen(!open)}
              />
            </i>
          </div>
          <div className='app-sidebar-content'>
            {
              item.sub_menu.map((sub, index) => {
                  return(
                    <ShowItems
                      key={index}
                      item={sub}
                    />
                  )
                }
              )
            }
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <Link to={item.path || '#'} className='app-sidebar-item plain'>
          {item.icon && <i>{item.icon}</i>}
          {item.page}
        </Link>
      </>
    )
  }
}

export default ShowItems
