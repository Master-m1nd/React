import './App.css';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';
import React from 'react';

function App() {
return(
<>
    <div className='wrapper'>
        <Card img='./images/image_1.jpg' title='Dining Chair by esteban+moreno' description='With a new design approach for flexible use: from a dinner for two to a big celebration.' price='$100' onSale={true} inStock={true}/>
        <Card img='./images/image_2.jpg' title='Underwater wearable watches' description='An accessory for any occasion, from a nice dinner to an underwater swim.' price='$90' onSale={false} inStock={false}/>
        <Card img='./images/image_3.jpg' title='Sac Marin Yellow' description='Marinetmarine store backpack. The Sac Marin can be worn as a backpack or as a bag over one shoulder.' price='$108 ' onSale={false} inStock={false}/>
    </div>
    
</>
)
}
 const domContainer = document.querySelector('#root');
 const root = ReactDOM.createRoot(domContainer);
 root.render(<App />);

export default App;
