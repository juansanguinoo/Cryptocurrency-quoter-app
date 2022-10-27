import React from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const SelectLabel = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCoin = (label, stateInitial, COINS) => {

  const [coin, setCoin] = useState(stateInitial)

  const handleChange = e => {
    setCoin(e.target.value);
  }

  const SelectCoin = () => (
    <>
      <Label>{label}</Label>
      <SelectLabel onChange={handleChange} value={coin}>
        <option value=""> --Select-- </option>
        {COINS.map((coin) => (
          <option key={coin.code} value={coin.code}>
            {coin.name}
          </option>
        ))}
      </SelectLabel>
    </>
  );

  return [coin, SelectCoin, setCoin];
}

export default useCoin
