import React from 'react'

const TableHeader = ({headers}) => {
  return (
    <> 
        <thead className='cf'>
            <tr>
                {
                    headers.map((header) => (
                        header.print !== false && (
                            <th className='app-cabecalho-tablea p-3 mb-2 bg-success text-white'>
                                {header.nome}
                            </th>
                        )
                    ))
                }
                <th className='app-cabecalho-tablea p-3 mb-2 bg-success text-white'>Ações</th>
            </tr>
        </thead>
    </>
  )
}

export default TableHeader