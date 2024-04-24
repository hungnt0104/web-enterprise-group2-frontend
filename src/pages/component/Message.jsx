
import { useEffect, useState } from 'react';

const Messages = ({ socket }) => {
  const [messagesReceived, setMessagesReceived] = useState([]);
  const yourEmailAddress = window.localStorage.getItem('email');

  useEffect(() => {
    // Define a function to handle incoming messages
    const handleReceiveMessage = (data) => {
      // Update state with the received message data
      setMessagesReceived((prevMessages) => [...prevMessages, data]);
    };

    // Add event listener for 'receive_message' event
    socket.on('receive_message', handleReceiveMessage);

    // Add event listener for 'last_100_messages' event
    const handleLast100Messages = (last100Messages) => {
      // Sort messages in date order (most recent at the bottom)
      const sortedMessages = [...last100Messages].sort((a, b) => new Date(a.createdTime) - new Date(b.createdTime));
      // Update state with the received messages
      setMessagesReceived(sortedMessages);
    };
    socket.on('last_100_messages', handleLast100Messages);

    // Clean up event listeners on unmount
    return () => {
      socket.off('receive_message', handleReceiveMessage);
      socket.off('last_100_messages', handleLast100Messages);
    };
  }, [socket]); // Dependency array ensures effect runs only when socket changes

  // Scroll to the most recent message when messagesReceived is updated
  useEffect(() => {
    const messagesColumn = document.querySelector('.messagesColumn');
    if (messagesColumn) {
      messagesColumn.scrollTop = messagesColumn.scrollHeight;
    }
  }, [messagesReceived]);

  return (
    <div className="messagesColumn" style={{ height: '85vh', overflow: 'auto', padding: '10px 10px 10px 40px', backgroundColor: '#222', color: '#fff' }}>
      {messagesReceived.map((msg, i) => (
        <div className="message" key={i} style={{ background: msg.email === yourEmailAddress ? '#007bff' : 'white', borderRadius: '6px', marginBottom: '24px', maxWidth: '600px', padding: '12px', marginLeft: msg.email === yourEmailAddress ? 'auto' : '0', marginRight: msg.email !== yourEmailAddress ? 'auto' : '0' }}>
          <div className="msgMeta" style={{ color: msg.email === yourEmailAddress ? 'white' : 'black', fontSize: '1rem' }}>
            {msg.email && <span>{msg.email}</span>}
            {/* <span>{new Date(msg.createdTime).toLocaleDateString()}</span> */}
            <span>&nbsp;</span>
            <span>{new Date(msg.createdTime).toLocaleTimeString()}</span>
          </div>
          <p className="msgText" style={{ fontSize: '1.5rem', color: msg.email === yourEmailAddress ? 'white' : 'black' }}>{msg.message}</p>
        </div>
      ))}
    </div>
  );
  
  
  
};

export default Messages;
