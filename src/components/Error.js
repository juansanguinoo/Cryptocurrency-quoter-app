import React from 'react'
import styled from '@emotion/styled'

const ErrorLabel = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Error = ({message}) => {
  return (
    <ErrorLabel>{ message }</ErrorLabel>
  )
}

export default Error
