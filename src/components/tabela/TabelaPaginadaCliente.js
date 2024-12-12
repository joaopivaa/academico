import React from 'react'
import Table from '../table/Table'
import TableBody from '../table/TableBody'
import TableHeader from '../table/TableHeader'

const TabelaPaginadaCliente = ({headers, data}) => {
  return (
    <>
      <Table>
        <TableHeader
          headers={headers}
        />
        <TableBody 
          headers={headers}
          currentRecords={data}
        />
      </Table>   
    </>
  )
}

export default TabelaPaginadaCliente