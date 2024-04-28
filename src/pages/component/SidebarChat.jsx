// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RoomAndUsers = ({ socket }) => {
//   const [roomUsers, setRoomUsers] = useState([]);
//   const [department, setRoom] = useState('');
//   const [userId, setUserId] = useState('');
//   const [name, setName] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedDepartment = window.localStorage.getItem('department');
//     const storedUserId = window.localStorage.getItem('userId');
//     const storedName = window.localStorage.getItem('name');
    
//     if (storedDepartment && storedUserId && storedName) {
//       setRoom(storedDepartment);
//       setUserId(storedUserId);
//       setName(storedName);
//     }

//     socket.on('chatroom_users', (data) => {
//       setRoomUsers(data);
//     });

//     return () => {
//       socket.off('chatroom_users');
//     };
//   }, [socket]);

//   const handleLeaveRoom = () => {
//     const __createdtime__ = Date.now();
//     // Send userId along with other data when leaving the room
//     socket.emit('leave_room', { userId, name, department , __createdtime__ });
//     navigate('/chatroom');
//   };

//   return (
//     <div className="roomAndUsersColumn" style={{ position: 'relative', borderRight: '1px solid #dfdfdf', backgroundColor: '#222', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//       <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', width: '100%' }}>
//         <h2 className="roomTitle" style={{ marginBottom: '60px', textTransform: 'uppercase', fontSize: '3rem', fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
//           ROOM: {department}
//         </h2>
  
//         {roomUsers.length > 0 && (
//           <div>
//             <h5 className="usersTitle" style={{ fontSize: '1.2rem', color: 'white', textAlign: 'center' }}>Members in room:</h5>
//             <ul className="usersList" style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '60px', color: 'rgb(153, 217, 234)', textAlign: 'center' }}>
//               {roomUsers.map((user) => (
//                 <li style={{ marginBottom: '12px', fontWeight: user.name === name ? 'bold' : 'normal' }} key={user.userId}>
//                   {user.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
  
//       <button className="btn btn-primary" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',backgroundColor: 'red' }} onClick={handleLeaveRoom}>
//         Leave
//       </button>
//     </div>
//   );
  
  
  
  
  
// };

// export default RoomAndUsers;



import { useEffect, useState } from 'react';

const RoomAndUsers = ({ socket }) => {
  const [roomUsers, setRoomUsers] = useState([]);
  const [department, setRoom] = useState('');
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const storedDepartment = window.localStorage.getItem('department');
    const storedUserId = window.localStorage.getItem('userId');
    const storedName = window.localStorage.getItem('name');
    
    if (storedDepartment && storedUserId && storedName) {
      setRoom(storedDepartment);
      setUserId(storedUserId);
      setName(storedName);
    }

    const handleChatroomUsers = (data) => {
      setRoomUsers(data);
    };

    socket.on('chatroom_users', handleChatroomUsers);

    return () => {
      socket.off('chatroom_users', handleChatroomUsers);
    };
  }, [socket]);

  const handleLeaveRoom = () => {
    const __createdtime__ = Date.now();
    socket.emit('leave_room', { userId, name, department , __createdtime__ });
  };

  return (
    <div className="roomAndUsersColumn" style={{ position: 'relative', borderRight: '1px solid #dfdfdf', backgroundColor: '#222', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', width: '100%' }}>
        <h2 className="roomTitle" style={{ marginBottom: '60px', textTransform: 'uppercase', fontSize: '3rem', fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
          ROOM: {department}
        </h2>
        {roomUsers.length > 0 && (
          <div>
            <h5 className="usersTitle" style={{ fontSize: '1.2rem', color: 'white', textAlign: 'center' }}>Members in room:</h5>
            <ul className="usersList" style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '60px', color: 'rgb(153, 217, 234)', textAlign: 'center' }}>
              {roomUsers.map((user) => (
                <li style={{ marginBottom: '12px', fontWeight: user.name === name ? 'bold' : 'normal' }} key={user.userId}>
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button className="btn btn-primary" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'red' }} onClick={handleLeaveRoom}>
        Leave
      </button>
    </div>
  );
};

export default RoomAndUsers;
