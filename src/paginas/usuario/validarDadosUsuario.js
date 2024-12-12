import { useState } from "react";
import { ERROR_USUARIO, USUARIO as usuarioModel } from "../../types/Usuario";

const useValidarDadosUsuario = () => {
    const [usuario, setUsuario] = useState(usuarioModel);
    const [errors, setErrors] = useState(ERROR_USUARIO);

    const handleChangeUsuario = (e) => {
        const { name, value } = e.target;
        setUsuario(( prev )=>({ ...prev, [name]:value }));
    };

    const isValid = (erros) => {
        let keys = Object.keys(erros);
        let count = keys.reduce((acc, curr) => errors[curr] ? acc + 1 : acc, 0);
    }

    const validateField = (name, value) => {
        const validationRules = {
            
            nomeUsuario:(val) => [
                (!val || val.trim() === "") && "Informe o nome do usuário", 
                (val && val.trim().length < 5) && "O nome do usuário deve ter mais de 5 caracteres",
            ].filter(Boolean),
            
            email:(val) => [
                (!val || val.trim() === "") && "Informe o email", 
                (val && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
            ].filter(Boolean),

            senha:(val) => [
                (val === null || val === undefined || val === "") && "Informe a senha",
                (val && val.length < 8 && "A senha deve ter ao menos 8 caracteres"),
            ].filter(Boolean),

            confirmSenha:(val) => [
                (val === null || val === undefined || val === "") && "Informe a senha",
                (val && val.length < 8 && "A senha deve ter ao menos 8 caracteres"),
                (val && usuario.senha && val !== usuario.senha) && "As senhas são diferentes",
            ].filter(Boolean),

            tipo:(val) => [
                (!val || val === null || val === undefined) && "Informe o tipo do usuário",
            ].filter(Boolean),

            codUsuario:(val) => [
                (!val || val.trim() === "") && "Informe o código do usuário",
            ].filter(Boolean),

            idCidade:(val) => [
                (!val || val === null || val === undefined) && "Informe uma cidade válida",
            ].filter(Boolean),

            codProfessor:(val) => {
                if (String(usuario.tipo) === "1") {
                    return [
                        (!val || val === null || val === undefined) && "Informe o código do professor",
                    ].filter(Boolean);
                }
                return [];
            },

            nomeProfessor:(val) => {
                if (String(usuario.tipo) === "1") {
                    return [
                        (!val || val.trim() === "") && "Informe o nome do professor", 
                        (val && val.trim().length < 5) && "O nome do professor deve ter mais de 5 caracteres",
                    ].filter(Boolean);
                }
                return [];
            },

            codAluno:(val) => {
                if (String(usuario.tipo) === "2") {
                    return [
                        (!val || val === null || val === undefined) && "Informe o código do aluno",
                    ].filter(Boolean);
                }
                return [];
            },

            nomeAluno:(val) => {
                if (String(usuario.tipo) === "2") {
                    return [
                        (!val || val.trim() === "") && "Informe o nome do aluno", 
                        (val && val.trim().length < 5) && "O nome do aluno deve ter mais de 5 caracteres",
                    ].filter(Boolean);
                }
                return [];
            },

            idade:(val) => {
                if (String(usuario.tipo) === "2") {
                    return [
                        (!val || val === null || val === undefined) && "Informe a idade do aluno",
                        (val && (isNaN(val) || val <= 0)) && "Idade deve ser maior que 0",
                    ].filter(Boolean);
                }
                return [];
            },
        };

        return validationRules[name] ? validationRules[name](value) : [];
    }

    const validateAll = () => {
        const newErrors = Object.keys(usuario).reduce((acc, field) => {
            const fieldErros = validateField(field, usuario[field]);

            if (fieldErros.length > 0) {
                acc[field] = validateField(field, usuario[field]);
            }
            return acc;
        }, {});
        setErrors(newErrors);
        return newErrors;
    }

    const isFormValid = () => {
        const currentErrors = validateAll();
        return isValid(currentErrors);
    }

    const validBlurInput = (name, value) => {
        const erros = {...errors};
        erros[name] = validateField(name, value);
    }

    return {
        usuario,
        errors,
        setErrors,
        handleChangeUsuario,
        isValid,  
        validateAll, 
        isFormValid
    }
}

export default useValidarDadosUsuario