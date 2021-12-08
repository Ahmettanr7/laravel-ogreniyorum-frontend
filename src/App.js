
import './App.css';
import Dashboard from './layouts/Dashboard';
import ReactLoading from 'react-loading';
import { useState } from 'react';
import $ from 'jquery';
function App() {

  const Example = ({ type, color }) => (
    <ReactLoading type={"cylon"} color={"#2f5e88"} height={334} width={188} />
);

const [loading, setLoading] = useState(false);

$(document).ready(function(){
  setInterval(() => {
    setLoading(true)
  }, 750);
});
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
