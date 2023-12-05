import { useState } from 'react';
import './index.css';
import  Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
  const [items, setItems] = useState([]);

function handleAddItems(item){
  setItems((items)=> [ ...items, item])
}

function handleDeleteItem(id){
  setItems((items)=> items.filter((item) => item.id !== id));
}

function handleToggleItem(id){
  setItems((items)=> items.map((item) => 
  item.id === id ? {...item, packed: !item.packed} : item
  ));
}

function handleClearList(){
  const confirmed = window.confirm('Are you sure you want to clear the list?')
  if (confirmed) setItems([])
 }
 
  return (
    <div className="app">
     <Logo />
     <Form onAddItem= {handleAddItems}/>
     <PackingList items = {items} 
     onDeleteItem = {handleDeleteItem}
     onToggleItem = {handleToggleItem}
     onClearItems = {handleClearList}/>
     <Stats items = {items}/>
    </div>
  );
}

export default App;

