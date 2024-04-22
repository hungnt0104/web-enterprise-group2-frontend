// import React, { useState, useEffect, useRef } from "react";
// import socketIOClient from "socket.io-client";

// const host = "http://localhost:5000";

// function App() {
//   const [mess, setMess] = useState([]);
//   const [message, setMessage] = useState('');
//   const [userId, setUserId] = useState(() => window.localStorage.getItem("userId") || null);
//   const [error, setError] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState(null);

//   const socketRef = useRef();

//   useEffect(() => {
//     socketRef.current = socketIOClient.connect(host)
  
//     socketRef.current.on('getId', data => {
//       setUserId(data);
//       localStorage.setItem("userId", data); // Save user ID to localStorage
//     })

//     socketRef.current.on('sendDataServer', dataGot => {
//       setMess(oldMsgs => [...oldMsgs, dataGot.data])
//     })

//     return () => {
//       socketRef.current.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if(message.trim() !== '') {
//       const msg = {
//         content: message, 
//         id: userId
//       }
//       socketRef.current.emit('sendDataClient', msg)
//       setMessage('')
//     }
//   }

//   const renderMess =  mess.map((m, index) => {
//     const isOwnMessage = m.id === userId;

//     return (
//       <div 
//         key={index} 
//         style={{
//           marginBottom: '10px',
//           padding: '8px',
//           borderRadius: '8px',
//           maxWidth: '70%',
//           backgroundColor: isOwnMessage ? '#DCF8C6' : '#E5E5EA',
//           alignSelf: isOwnMessage ? 'flex-end' : 'flex-start'
//         }}
//       >
//         {m.content}
//       </div>
//     );
//   });

//   return (
//     <div className="container">
//       <h2 className="label">Chat Application</h2>
//       <div className="card">
//         <div className="card-body">
//           <div className="box-chat_message">
//             {renderMess}
//           </div>
  
//           <div className="send-box">
//             <textarea 
//               value={message}  
//               onChange={(e) => setMessage(e.target.value)} 
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' && !e.shiftKey) {
//                   e.preventDefault();
//                   sendMessage();
//                 }
//               }}
//               className="form-control" 
//               placeholder="Enter your message..." 
//             />
//             <button onClick={sendMessage} className="btn btn-primary">
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {uploadStatus && <p>{uploadStatus}</p>}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

const host = "http://localhost:5000";

function App() {
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState('');
  const [id, setId] = useState(window.localStorage.getItem('userId') || '');
  const [name, setName] = useState(window.localStorage.getItem('name') || ''); // Added state for name
  
  const socketRef = useRef();
  const messagesEnd = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient.connect(host)
  
    socketRef.current.on('getId', data => {
      setId(data);
      window.localStorage.setItem('userId', data); // Save id to localStorage
    })

    socketRef.current.on('sendDataServer', dataGot => {
      setMess(oldMsgs => [...oldMsgs, dataGot.data])
      scrollToBottom()
    })

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if(message !== '') {
      const msg = {
        content: message, 
        id: id,
        name: name // Include name in the message object
      }
      socketRef.current.emit('sendDataClient', msg)
      setMessage('')
    }
  }

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  }

  const renderMess =  mess.map((m, index) => 
    <div 
      key={index} 
      style={{
        width: '50%',
        backgroundColor: m.id === id ? '#009bff' : '#868686',
        margin: '1em',
        borderRadius: '1em',
        padding: '1em',
        color: 'white',
        textAlign: m.id === id ? 'right' : 'left',
        float: m.id === id ? 'right' : 'left'
      }}
    >
      <div>{m.name}</div> {/* Display the name */}
      <div>{m.content}</div> {/* Display the message content */}
    </div>
  );

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const onEnterPress = (e) => {
    if(e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="box-chat">
      <div className="box-chat_message">
        {renderMess}
        <div style={{ float: "left", clear: "both" }} ref={messagesEnd}></div>
      </div>

      <div className="send-box">
        <textarea 
          value={message}  
          onKeyDown={onEnterPress}
          onChange={handleChange} 
          placeholder="Nhập tin nhắn ..." 
          style={{
            width: '80%',
            margin: '0',
            padding: '0.5em',
            background: '#ebf5ff',
            borderRadius: '2em'
          }}
        />
        <button 
          onClick={sendMessage} 
          style={{
            width: '10%',
            background: '#6650ff',
            color: 'white',
            marginLeft: '10px',
            border: 'none',
            borderRadius: '1em',
            cursor: 'pointer',
            padding: '1em',
            textAlign: 'center'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
