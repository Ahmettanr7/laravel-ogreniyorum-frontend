
import './App.css';
import Dashboard from './layouts/base/Dashboard';
import ReactLoading from 'react-loading';
import { useState } from 'react';
import $ from 'jquery'; 
function App() {

  const Example = ({ type, color }) => (
    <ReactLoading type={"cylon"} color={"#2f5e88"} height={334} width={188} />
);

const [loading, setLoading] = useState(false);
const load = () => {
  setInterval(() => {
    setLoading(true)
  }, 750);
}

load();
  return (
  <>
    {!loading 
    ? 
    (<div className="kapsar"><div className="loading"><Example/></div></div>) 
    : 
    (<Dashboard/>)}
  </>
  );
}

export default App;
