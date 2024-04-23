import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoomAndUsers = ({ socket }) => {
  const [roomUsers, setRoomUsers] = useState([]);
  const [department, setRoom] = useState('');
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedDepartment = window.localStorage.getItem('department');
    const storedUserId = window.localStorage.getItem('userId');
    const storedName = window.localStorage.getItem('name');
    
    if (storedDepartment && storedUserId && storedName) {
      setRoom(storedDepartment);
      setUserId(storedUserId);
      setName(storedName);
    }

    socket.on('chatroom_users', (data) => {
      setRoomUsers(data);
    });

    return () => {
      socket.off('chatroom_users');
    };
  }, [socket]);

  const handleLeaveRoom = () => {
    const __createdtime__ = Date.now();
    // Send userId along with other data when leaving the room
    socket.emit('leave_room', { userId, name, department , __createdtime__ });
    navigate('/chatroom');
  };

  return (
    <div className="roomAndUsersColumn" style={{ borderRight: '1px solid #dfdfdf' }}>
      <h2 className="roomTitle" style={{ marginBottom: '60px', textTransform: 'uppercase', fontSize: '2rem', color: 'black' }}>
        ROOM: {department}
      </h2>

      <div>
        {roomUsers.length > 0 && <h5 className="usersTitle" style={{ fontSize: '1.2rem', color: 'black' }}>Users:</h5>}
        <ul className="usersList" style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '60px', color: 'rgb(153, 217, 234)' }}>
          {roomUsers.map((user) => (
            <li style={{ marginBottom: '12px', fontWeight: user.name === name ? 'bold' : 'normal' }} key={user.userId}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      <button className="btn btn-primary" onClick={handleLeaveRoom}>
        Leave
      </button>
    </div>
  );
};

export default RoomAndUsers;
