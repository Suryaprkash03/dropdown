import React, { useState } from 'react';
import MultiSelect from './components/Multiselect';


const options = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  { id: '4', text: 'Item 4' },
  { id: '5', text: 'Item 5' },
];

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (items) => {
    setSelectedItems(items);
  };
  return (
    <div>
      <MultiSelect
        options={options}
        placeholder="DropDown Menu"
        onChange={handleSelect} />
    </div>
  );
};

export default App;