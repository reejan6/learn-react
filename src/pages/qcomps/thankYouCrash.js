import { useState } from 'react';


export default function FeedbackForm() {

  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  function handleSend(){
    message.length > 0 ? setIsSent(true) : setIsSent(false);
  }

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleSend}>Send</button>
      </form>
    );
  }
}