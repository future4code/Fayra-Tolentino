import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import styled from 'styled-components'

// const SelectStyle = styled.select `
//     width:410px;
//     height: 37px;
//     color:#922fa1;
//     font-weight:bold;
//     border-radius:100px;
//     border: 1px solid rgb(146,47,161);
//     margin-top:20px;
//     outline:none;
//     padding-left:10px;
// `
// -----------------------------------------------------------------------------------------------------------------------

function CountrySelector({handleCountry}) {
    const options = useMemo(() => countryList().getData(), [])
    return <Select options={options} onChange={handleCountry}  />
}

export default CountrySelector