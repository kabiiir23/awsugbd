import React, { useEffect, useState } from 'react';

const apiUrl = 'https://type.fit/api/quotes';

export default function RandomQuote({ ref }) {
  const [data, setData] = useState({ quote: '', author: '' });
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        const n = Math.floor(Math.random() * (res.length - 1));
        setData({ ...data, quote: res[n].text, author: res[n].author });
      });
  }, [setData]);
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        position: 'relative',
        fontSize: '1.5rem',
        color: '#4f4f4f',
        fontFamily: 'Open Sans',
        margin: '0 auto',
        width: '70%',
        justifyContent: 'center',
      }}
    >
      {/* <span
        style={{
          fontSize: '5rem',
          position: 'absolute',
          left: '-10%',
          top: '-45%',
        }}
      >
        "
      </span> */}
      <span className='quote'>{data.quote}</span>
      <span
        style={{
          fontSize: '1.3rem',
          position: 'relative',
          alignSelf: 'flex-end',
        }}
      >
        {data.author}
      </span>
    </div>
  );
}
