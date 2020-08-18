import React from 'react';

export default function MyNumbers(props) {
  const { numbers } = props;
  return (numbers.map(number => <li key={number + 'myNums'}>{number}</li>))

}
