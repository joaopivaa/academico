import React from 'react'
import Navegacao from '../components/mensagem/Navegacao'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import { BUTTON_SIZE_SHOW_MESSAGE } from '../config/Config'

const Dashboard = () => {
  return (
    <>
        <Navegacao
            titulo="Dashboard"
            iconTitulo={<AiIcons.AiFillDashboard size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            descricao="Páginal principal do sistema"
            iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            url="/dashboard"
            tituloUrl="Dashboard"
        />
    </>
  )
}

export default Dashboard
