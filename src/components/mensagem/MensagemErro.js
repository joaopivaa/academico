import React from 'react'

const MensagemErro = ({error, mensagens}) => {
  return (
    <>
        {
          error && (
            <div className='invalid-feedback'>
              {
                mensagens.map((erro, index) => (
                  <p 
                    key={index} 
                    style={
                      { margin: "0", color: "red" }
                    }
                  >
                    <span>{erro}</span>
                  </p>
                ))
              }
            </div>
          )
        }
    </>
  )
}

export default MensagemErro