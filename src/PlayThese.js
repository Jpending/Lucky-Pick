import React from 'react';

export default function PlayThese(props) {
  const { numbers } = props;
  return (numbers.map(num => <li key={num + 'lucky'}>{num}</li>)
  )
}
