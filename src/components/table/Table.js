import React from 'react'
import '../table/table.css';

const Table = ({children}) => {
  return (
    <>
      <table className='app-tabela table table-striped table-bordered table-hover cf'>
        {children}
      </table>
    </>
  )
}

export default Table