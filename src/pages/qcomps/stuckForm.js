import { useState } from 'react';

export default function Form() {
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');

  function handleReset() {
   setFName(' ');
   setLName(' '); 
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input 
        placeholder="First name"
        value={firstName} onChange={e => setFName(e.target.value)} 
      />
      <input
        placeholder="Last name"
        value={lastName} onChange={e => setLName(e.target.value)} 
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
