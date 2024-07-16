import React from 'react';
import Display from './components/display';

const App = () => {
  const Name = "Maneesha MA"; 
  const Biodata = "Post graduated from Calicut University.Aspiring full stack web developer";

  return (
    <div>
      <Display Name={Name}  Biodata={Biodata} />
    </div>
  );
};

export default App;