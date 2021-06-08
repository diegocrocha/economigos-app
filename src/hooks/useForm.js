import React from 'react';

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido'
    },
    senha: {
        regex: /^.{8,}$/,
        message: 'A senha deve conter no mínimo 8 caracteres'
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [erro, setError] = React.useState(null);

    function validate(value) {
        if (type == false) return true;

        if(value.length == 0) {
            setError("Preencha o campo");
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError (types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({target}) {
        if (erro) validate(target.value);

        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        erro,
        validate: () => validate(value),
        onBlur: () => validate(value)
    }
}

export default useForm;