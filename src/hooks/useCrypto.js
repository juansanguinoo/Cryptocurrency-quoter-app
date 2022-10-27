import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

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

const useCrypto = (label, stateInitial, cryptoList) => {
  const [crypto, setCrypto] = useState(stateInitial);

  const handleChange = (e) => {
    setCrypto(e.target.value);
  };

  const SelectCrypto = () => (
    <>
      <Label>{label}</Label>
      <SelectLabel onChange={handleChange} value={crypto}>
        <option value=""> --Select-- </option>
        {cryptoList.map((crypto) => (
          <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
            {crypto.CoinInfo.FullName}
          </option>
        ))}
      </SelectLabel>
    </>
  );

  return [crypto, SelectCrypto, setCrypto];
};

export default useCrypto;
