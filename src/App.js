import styled from '@emotion/styled';
import Form from './components/Form';
import image from './crypto.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Quoter from './components/Quoter';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [currency, setCurrency] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const consultAPI = async () => {
      if (currency === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
      const result = await axios.get(url);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        setResult(result.data.DISPLAY[cryptocurrency][currency]);
      }, 3000);
    };

    consultAPI();
  }, [currency, cryptocurrency]);

  const component = loading ? <Spinner /> : <Quoter result={result} />;

  return (
    <Container>
      <div>
        <Image src={image} alt="crypto" />
      </div>
      <div>
        <Heading>Trade crypto instantly</Heading>

        <Form setCurrency={setCurrency} setCryptocurrency={setCryptocurrency} />

        {component}
      </div>
    </Container>
  );
}

export default App;
