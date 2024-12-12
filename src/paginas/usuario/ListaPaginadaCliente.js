import React, { useEffect } from 'react'
import Navegacao from '../../components/mensagem/Navegacao'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import { BUTTON_SIZE_SHOW_MESSAGE } from '../../config/Config'
import TabelaPaginadaCliente from '../../components/tabela/TabelaPaginadaCliente'
import useApi from '../../service/AxiosService'


const headers = [
  { nome: 'id', field: 'idUsuario', sort: false, print:false },
  { nome: 'Foto', field: 'foto', sort: false, print: true},
  { nome: 'Código', field: 'codUsuario', sort: true, print: true },
  { nome: 'Nome', field: 'nomeUsuario', sort: true, print: true },
  { nome: 'E-mail', field: 'email', sort: true, print: true },
  { nome: 'Tipo', field: 'tipo', sort: true, print: true, 
    formatter: (value) => (
      <span className={`badge ${value === 1 ? "bg-success" : "bg-danger"}`}>
        { value === 1 ? "Professor" : "Aluno" }
      </span>
    )
  },
  { nome: 'Cidade', field: 'nomeCidade', sort: false, print: true }
];

const ListaPaginadaCliente = () => {

  const {data, getData} = useApi();

  useEffect(()=>{
    getData('/usuario/listar');
  }, [getData])

  return (
    <>
        <Navegacao
            titulo="Usuário"
            iconTitulo={<AiIcons.AiFillDashboard size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            descricao="Lista de usuários"
            iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            url="/dashboard"
            tituloUrl="Página Principal"
        />

        <div className='row justify-content-center'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <div className='app-windows'>
                    <TabelaPaginadaCliente
                      headers = {headers}
                      data = {data}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default ListaPaginadaCliente
