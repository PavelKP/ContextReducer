import React, {useContext} from 'react';
import {StoreContext} from '../../store/reducer';
import {ActionCreator} from '../../store/action';

const Board = () => {
  // Используем функцию useContext для получения контекста ContextApp
  const {state, dispatch} = useContext(StoreContext);

  return (
    <>
    <div className="board">При нажатии кнопки в стор попадут новые данные</div>
    <button 
      onClick={() => dispatch(ActionCreator.addName(`Вася ${Math.round(Math.random()*100)}`))}>
        Кнопка
    </button>
    <ol>
      {state.names.map((name, i) => <li key={i} style ={{marginBottom: 10}}>{name}</li>)}
    </ol>
    </>
  );
}

export default Board;

