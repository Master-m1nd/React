import './App.css';
import Hello from "./components/hello.jsx";
import ReactDOM from 'react-dom/client';

function App() {
//1

let usersNames = ['Mike', 'Bob', 'Nikola'];
let users = {};

[users.mike, users.bob, users.nikola] = usersNames;

console.log(users);

//2

let salaries = {
    'Mike': 1500,
    'Bob': 1800,
    'Nikola': 1700
};

function maxSalary(salaries) {
    let maxSalary = 0;
    let maxSalaryName = '';
    
    for (let [name, salary] of Object.entries(salaries)) {
      if (salary > maxSalary) {
        maxSalary = salary;
        maxSalaryName = name;
      }
    }
  
    return maxSalaryName;
  }

maxSalary(salaries);

//3

let newUsers = {mike: 'Mike', bob: 'Bob', nikola: 'Nikola'};


let {mike: userMike, bob: userBob, nikola: userNikola} = newUsers;

console.log(userMike);
console.log(userBob);
console.log(userNikola);

//4

return (
    <div style={{ backgroundColor: '#46B1DE' }} className="wrapper">
     <Hello></Hello>
    <button onClick={() => console.log('Click on button')}>Button</button>
     </div>
     );
 }
 const domContainer = document.querySelector('#root');
 const root = ReactDOM.createRoot(domContainer);
 root.render(<App />);

export default App;
