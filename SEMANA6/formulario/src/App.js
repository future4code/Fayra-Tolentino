import React from 'react';
import './App.css';
import React, {useState} from 'react';

const [value, setValues] = useState({
    fullName:'',
    age:'',
    email:'',
    scholarity:''
});

<input
    id="full-name"
    class="form-field"
    type="text"
    placeholder="Digite seu nome completo"
    name="fullName"
    value={values.fullName}
/>

<input
    id="age-person"
    class="form-field"
    type="text"
    placeholder="Digite sua idade"
    name="age"
    value={values.age}
/>

<input
    id="email"
    class="form-field"
    type="text"
    placeholder="Digite seu e-mail"
    name="email"
    value={values.email}
/>

<input
    id="scholarity-person"
    class="form-field"
    type="text"
    placeholder="Digite sua escolaridade"
    name="scholarity"
    value={values.scholarity}
/>









