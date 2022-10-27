import React from 'react';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';
import Error from './Error';

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ setCurrency, setCryptocurrency }) => {
  const [cryptoList, setCryptoList] = useState([]);
  const [error, setError] = useState(false);

  const COINS = [
    { code: 'USD', name: 'Dollar' },
    { code: 'MXN', name: 'Mexican peso' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Pound sterling' },
    { code: 'COP', name: 'Colombian peso' },
  ];

  const [coin, SelectCoin] = useCoin('Choose your coin', '', COINS);

  const [crypto, SelectCrypto] = useCrypto(
    'Choose your crypto',
    '',
    cryptoList
  );

  useEffect(() => {
    const consultAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios.get(url);
      setCryptoList(result.data.Data);
    };
    consultAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (coin === '' || crypto === '') {
      setError(true);
      return;
    }
    setError(false);
    setCurrency(coin);
    setCryptocurrency(crypto);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="All fields are required" /> : null}

      <SelectCoin />

      <SelectCrypto />

      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
