/* eslint-disable no-unused-vars */
import MessagesReceived from './component/Message';
import SendMessage from './component/SendMessage';
import SidebarChat from './component/SidebarChat';
import Header from './component/Header';

const Chat = ({ username, room, socket }) => {
  return (
    <div className="chatContainer" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 4fr', gap: '20px' }}>
      <SidebarChat socket={socket} username={username} room={room} />
      <div>
      <MessagesReceived socket={socket} />
      <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;
