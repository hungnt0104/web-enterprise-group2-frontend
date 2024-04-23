
import { useEffect, useState } from 'react';

const Messages = ({ socket }) => {
  const [messagesReceived, setMessagesReceived] = useState([]);

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
    <div className="messagesColumn" style={{ height: '85vh', overflow: 'auto', padding: '10px 10px 10px 40px' }}>
      {messagesReceived.map((msg, i) => (
        <div className="message" key={i} style={{ background: 'rgb(0, 24, 111)', borderRadius: '6px', marginBottom: '24px', maxWidth: '600px', padding: '12px' }}>
          <div className="msgMeta" style={{ color: 'rgb(153, 217, 234)', fontSize: '0.75rem' }}>
            {/* <span>{msg.name}</span> */}
            {/* Check if email exists before accessing it */}
            {msg.email && <span>{msg.email}</span>}
            <span>{new Date(msg.createdTime).toLocaleString()}</span>
          </div>
          <p className="msgText" style={{ color: '#fff' }}>{msg.message}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Messages;
