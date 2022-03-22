import React from 'react'
import './App.css';
import Get from './useJsonFetch/Get';

const url = ' http://localhost:7070/'

function App() {
  return (
    <div className="App">
      <Get url={`${url}data`} title={'Успешное получение данных - '} />
      <Get url={`${url}error`} title={'Получение ошибки - '} />
      <Get url={`${url}loading`} title={'Индикатор загрузки - '} />
    </div>
  );
}

export default App;
