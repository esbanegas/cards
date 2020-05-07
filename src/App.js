import React from 'react';
import styled from 'styled-components';
import Cards from './Control';

const AppStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: grid;
  grid-template-rows: 80px calc(100% - 80px);
`;

const CardStyled = styled.div`
 height: 100px;
`;

const App = () => {
  const items = [];
  for (let index = 0; index < 100; index++) {
    items.push({
      item: `item ${index + 1}`,
      index,
    })
  }

  const onRenderCard = item => (
    <CardStyled>
      <h3>{item.item}</h3>
      <span>{item.index}</span>
    </CardStyled>
  )

  const handleSelectedItem = item => {

  }


  const onRenderActions = (item) => (
    <div>
      <button>Add</button>
    </div>
  )

  return (
    <AppStyled>
      <h1>Cards</h1>
      <Cards
        items={items}
        onRenderItem={onRenderCard}
        onSeletedItemChange={handleSelectedItem}
        onRenderActions={onRenderActions}
      />
    </AppStyled>
  );
}

export default App;
