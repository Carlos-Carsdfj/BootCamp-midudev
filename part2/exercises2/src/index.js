
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const phoneBoos = [
  {
    name:'Maria',
    number: '0412-555-55-55',
    id:1

  },
  {
    name:'Antonio',
    number: '0455-555-55-55',
    id:2

  }
]
ReactDOM.render(
  
    <App phones={phoneBoos} />,
  document.getElementById('root')
);


