import React, {useReducer} from 'react';
import Main from '../main/main';
import {reducer, initialState, StoreContext} from '../../store/reducer';


const App = () => {
  // Инициализируем reducer и получаем state + dispatch для записи
  const [state, dispatch] = useReducer(reducer, initialState);

  // Для того, чтобы мы могли использовать reducer в компонентах
  // Воспользуемся ContextApp и передадим (dispatch и state)
  // в компоненты ниже по иерархии

  console.log(`Компонент отрендерился`);

  return (
    <StoreContext.Provider value={{dispatch, state}}>
      <Main />
    </StoreContext.Provider>
  );
}

export default React.memo(App, ()=> false); 
