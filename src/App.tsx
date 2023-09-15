import { Box } from '@mui/material';
import { OrderList } from './OrderList/OrderList';
import { getClothingOrder, input } from './utils';
import './App.css';


export const App = () => {
  
  const clothOrder = getClothingOrder(input);

  return (
    <Box className="app">
      <OrderList list={clothOrder} />
    </Box>
  );
}

export default App;
