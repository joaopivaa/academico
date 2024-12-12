import React from "react";
import Navegacao from "../../components/mensagem/Navegacao";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import './usuario.css';

import { BUTTON_SIZE_SHOW_MESSAGE, BUTTON_SIZE, DEFAULT_IMAGEM } from "../../config/Config";
import useValidarDadosUsuario from "./validarDadosUsuario";
import { Link } from "react-router-dom";
import MensagemErro from "../../components/mensagem/MensagemErro";

const Incluir = () => {
  
  const {usuario, errors, setErrors, handleChangeUsuario, isValid, validateAll, isFormValid} = useValidarDadosUsuario();

  const onSubmitDadosUsuario = (e) => {
    e.preventDefault();
    let erros = validateAll();

    if (isValid(erros)) {
      handleSubmitDadosUsuario();
    } 
    else {
      setErrors(erros);
    }
  }

  const handleSubmitDadosUsuario = (e) => {
      
  }

  return (
    <>
      <Navegacao
        titulo="Usuário"
        iconTitulo={<FaIcons.FaUserEdit size={BUTTON_SIZE_SHOW_MESSAGE} />}
        descricao="Manutenção do cadastro de usuários"
        iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE} />}
        path="Usuário"
        url="/usuario/listar"
        tituloUrl="listagem de usuários"
      />

      <div className="app-windows">
        <div className="form-profile">
          <div className="foto">
            <label className="app-label">Foto</label>
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <input type="hidden" id="foto" name="foto" />
                  <input type="hidden" id="contentType" name="contentType" />
                  <img src={DEFAULT_IMAGEM} className="avatar" alt="Usuário" />
                </div>
                <div className="fileInput">
                  <input type="file" />
                  <button
                    id="upload"
                    className="btn btn-success btn-lg upload"
                    title="upload de foto"
                  >
                    <i>
                      <FaIcons.FaUpload size={BUTTON_SIZE} />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <form onSubmit={onSubmitDadosUsuario}>
              <div className="cadastro">
                <div className="form-cadastro-usuario">
                  <div className="form-group">
                    <label
                      htmlFor="codUsuario"
                      className="control-label app-label"
                    >
                      Código do Usuário:
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="codUsuario"
                        name="codUsuario"
                        value={usuario.codUsuario}
                        onChange={handleChangeUsuario}
                        className={
                          errors.codUsuario
                            ? "form-control is-invalid app-label"
                            : "form-control app-label"
                        }
                      />
                      {
                        errors.codUsuario ? (
                          <MensagemErro
                            errors = {errors.codUsuario}
                          />
                        ) : null
                      }
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="nomeUsuario"
                      className="control-label app-label"
                    >
                      Nome do Usuário:
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="nomeUsuario"
                        name="nomeUsuario"
                        value={usuario.nomeUsuario}
                        onChange={handleChangeUsuario}
                        className={
                          errors.nomeUsuario
                            ? "form-control is-invalid app-label"
                            : "form-control app-label"
                        }
                      />
                      {
                        errors.nomeUsuario ? (
                          <MensagemErro
                            errors = {errors.nomeUsuario}
                          />
                        ) : null
                      }
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="control-label app-label">
                      Email:
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={usuario.email}
                        onChange={handleChangeUsuario}
                        className={
                          errors.email
                            ? "form-control is-invalid app-label"
                            : "form-control app-label"
                        }
                      />
                      {
                        errors.email ? (
                          <MensagemErro
                            errors = {errors.email}
                          />
                        ) : null
                      }
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="senha" className="control-label app-label">
                      Senha:
                    </label>
                    <div className="input-group">
                      <input
                        type="password"
                        id="senha"
                        name="senha"
                        value={usuario.senha}
                        onChange={handleChangeUsuario}
                        className={
                          errors.senha
                            ? "form-control is-invalid app-label"
                            : "form-control app-label"
                        }
                      />
                      {
                        errors.senha ? (
                          <MensagemErro
                            errors = {errors.senha}
                          />
                        ) : null
                      }
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="confirmSenha"
                      className="control-label app-label"
                    >
                      Confirme a Senha:
                    </label>
                    <div className="input-group">
                      <input
                        type="password"
                        id="confirmSenha"
                        name="confirmSenha"
                        value={usuario.confirmSenha}
                        onChange={handleChangeUsuario}
                        className={
                          errors.confirmSenha
                            ? "form-control is-invalid app-label"
                            : "form-control app-label"
                        }
                      />
                      {
                        errors.confirmSenha ? (
                          <MensagemErro
                            errors = {errors.confirmSenha}
                          />
                        ) : null
                      }
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="tipo" className="control-label app-label">
                      Tipo:
                    </label>
                    <div className="input-group">
                      <select
                        id="tipo"
                        name="tipo"
                        value={usuario.tipo}
                        onChange={handleChangeUsuario}
                        className={
                          errors.tipo
                            ? "form-control is-invalid app-label"
                            : "form-control app-label"
                        }
                      >
                        <option value="">Escolha o tipo do Usuário</option>
                        <option value="1">Professor</option>
                        <option value="2">Aluno</option>
                      </select>
                      {
                        errors.tipo ? (
                          <MensagemErro
                            errors = {errors.tipo}
                          />
                        ) : null
                      }
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cidade" className="control-label app-label">
                      Código da Cidade:
                    </label>
                    <div className="input-group">
                      <select
                        id="idCidade"
                        name="idCidade"
                        value={usuario.idCidade}
                        onChange={handleChangeUsuario}
                        className={
                          errors.idCidade
                            ? "form-control is-invalid app-label"
                            : "form-control app-label"
                        }
                      >
                        <option value="">Escolha a cidade</option>
                        <option value="1">Birigui</option>
                        <option value="2">Araçatuba</option>
                      </select>
                      {
                        errors.idCidade ? (
                          <MensagemErro
                            errors = {errors.idCidade}
                          />
                        ) : null
                      }
                    </div>
                  </div>

                  <div></div>
                  {usuario.tipo === "2" && (
                    <>
                      <div className="form-group">
                        <label
                          htmlFor="codAluno"
                          className="control-label app-label"
                        >
                          Código do Aluno:
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            id="codAluno"
                            name="codAluno"
                            value={usuario.codAluno}
                            onChange={handleChangeUsuario}
                            className={
                              errors.codAluno
                                ? "form-control is-invalid app-label"
                                : "form-control app-label"
                            }
                          />
                          {
                            errors.codAluno ? (
                              <MensagemErro
                                errors = {errors.codAluno}
                              />
                            ) : null
                          }
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="nomeAluno"
                          className="control-label app-label"
                        >
                          Nome do Aluno:
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            id="nomeAluno"
                            name="nomeAluno"
                            value={usuario.nomeAluno}
                            onChange={handleChangeUsuario}
                            className={
                              errors.nomeAluno
                                ? "form-control is-invalid app-label"
                                : "form-control app-label"
                            }
                          />
                          {
                            errors.nomeAluno ? (
                              <MensagemErro
                                errors = {errors.nomeAluno}
                              />
                            ) : null
                          }
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="idade"
                          className="control-label app-label"
                        >
                          Idade:
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            id="idade"
                            name="idade"
                            value={usuario.idade}
                            onChange={handleChangeUsuario}
                            className={
                              errors.idade
                                ? "form-control is-invalid app-label"
                                : "form-control app-label"
                            }
                          />
                          {
                            errors.idade ? (
                              <MensagemErro
                                errors = {errors.idade}
                              />
                            ) : null
                          }
                        </div>
                      </div>
                      <div>
                        
                      </div>
                    </>
                  )}

                  {usuario.tipo === "1" && (
                    <>
                      <div className="form-group">
                        <label
                          htmlFor="codProfessor"
                          className="control-label app-label"
                        >
                          Código do Professor:
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            id="codProfessor"
                            name="codProfessor"
                            value={usuario.codProfessor}
                            onChange={handleChangeUsuario}
                            className={
                              errors.codProfessor
                                ? "form-control is-invalid app-label"
                                : "form-control app-label"
                            }
                          />
                          {
                            errors.codProfessor ? (
                              <MensagemErro
                                errors = {errors.codProfessor}
                              />
                            ) : null
                          }
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="nomeProfessor"
                          className="control-label app-label"
                        >
                          Nome do Professor:
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            id="nomeProfessor"
                            name="nomeProfessor"
                            value={usuario.nomeProfessor}
                            onChange={handleChangeUsuario}
                            className={
                              errors.nomeProfessor
                                ? "form-control is-invalid app-label"
                                : "form-control app-label"
                            }
                          />
                          {
                            errors.nomeProfessor ? (
                              <MensagemErro
                                errors = {errors.nomeProfessor}
                              />
                            ) : null
                          }
                        </div>
                      </div>
                    </>
                  )}
                  <button
                    type="submit"
                    title="Incluir dados do Usuário"
                    className="btn btn-success btn-lg app-button app-label mt-2"
                  >
                    <FaIcons.FaSave size={BUTTON_SIZE}/>
                    Salvar
                  </button>
                  <Link to='/usuario/listar'
                        type="button"
                        title="Cancelar inclusão do usuário"
                        className="btn btn-danger btn-lg app-button app-label mt-2"
                  >
                    <MdIcons.MdCancel size={BUTTON_SIZE}/>
                    Cancelar
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Incluir;
