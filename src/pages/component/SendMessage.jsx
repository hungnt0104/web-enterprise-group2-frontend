// import React, { useState, useEffect } from 'react';

// const SendMessage = ({ socket }) => {
//   const [message, setMessage] = useState('');
//   const [name, setName] = useState('');
//   const [department, setDepartment] = useState('');
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     const storedName = window.localStorage.getItem('name');
//     const storedDepartment = window.localStorage.getItem('department');
//     const storedEmail = window.localStorage.getItem('email');

//     if (storedName) {
//       setName(storedName);
//     }

//     if (storedDepartment) {
//       setDepartment(storedDepartment);
//     }

//     if (storedEmail) {
//       setEmail(storedEmail);
//     }
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() !== '') {
//       const createdTime = Date.now(); // Get the current timestamp
//       // Emit the 'send_message' event with message data
//       socket.emit('send_message', { name, email, department, message, createdTime });
//       setMessage(''); // Clear the message input after sending
//     }
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', backgroundColor: '#222', padding: '20px' }}>
//       <input
//         className="messageInput"
//         style={{ padding: '14px', marginRight: '16px', width: '60%', borderRadius: '6px', border: '1px solid rgb(153, 217, 234)', fontSize: '0.9rem', backgroundColor: '#333', color: 'white', flexGrow: 1 }}
//         placeholder='Message...'
//         onChange={(e) => setMessage(e.target.value)}
//         value={message}
//       />
      
//       <button className="btn btn-primary" style={{ backgroundColor: 'blue' }} onClick={sendMessage}>
//         Send 
//       </button>
//     </div>
//   );
  
// };

// export default SendMessage;



import React, { useState, useEffect } from 'react';

const SendMessage = ({ socket }) => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedName = window.localStorage.getItem('name');
    const storedDepartment = window.localStorage.getItem('department');
    const storedEmail = window.localStorage.getItem('email');

    if (storedName) setName(storedName);
    if (storedDepartment) setDepartment(storedDepartment);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '') {
      const createdTime = Date.now(); 
      socket.emit('send_message', { name, email, department, message, createdTime });
      setMessage(''); 
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', backgroundColor: '#222', padding: '20px' }}>
      <input
        className="messageInput"
        style={{ padding: '14px', marginRight: '16px', width: '60%', borderRadius: '6px', border: '1px solid rgb(153, 217, 234)', fontSize: '0.9rem', backgroundColor: '#333', color: 'white', flexGrow: 1 }}
        placeholder='Message...'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />    
      <button className="btn btn-primary" style={{ backgroundColor: 'blue' }} onClick={sendMessage}>
        Send 
      </button>
    </div>
  );
};

export default SendMessage;
