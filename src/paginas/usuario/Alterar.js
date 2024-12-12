import React from 'react'
import Navegacao from '../../components/mensagem/Navegacao'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import { BUTTON_SIZE_SHOW_MESSAGE } from '../../config/Config'

const Alterar = () => {
  return (
    <>
        <Navegacao
            titulo="Usuario"
            iconTitulo={<FaIcons.FaUserEdit size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            descricao="Manutenção do cadastro de usuários"
            iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            path="Usuário"
            url="/usuario/listar"
            tituloUrl="listagem de usuários"
        />
    </>
  )
}

export default Alterar
