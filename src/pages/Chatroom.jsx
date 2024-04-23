import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Chatroom = ({ socket }) => {
    const navigate = useNavigate();
    const [name, setUsername] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setID] = useState('');

    useEffect(() => {
        const storedUsername = window.localStorage.getItem('name');
        const storedDepartment = window.localStorage.getItem('department');
        const storedID = window.localStorage.getItem('userId');
        const storedEmail = window.localStorage.getItem('email');
        

        if (storedUsername) {
            setUsername(storedUsername);
        }

        if (storedDepartment) {
            setDepartment(storedDepartment);
        }

        if (storedID) {
            setID(storedID);
        }
        if (storedEmail) {
          setEmail(storedEmail);
      }
    }, []);

    const joinRoom = () => {
        if (userId !== '') {
            socket.emit('join_room', { userId, name, department, email });
        }
        navigate('/message', { replace: true });
    };

    return (
        <div className="container" 
             style={{ height: '100vh', 
                      width: '100%', 
                      display: 'flex', 
                      justifyContent: 'center', alignItems: 'center'
                    }}>
            <div className="formContainer" 
                 style={{ width: '400px', margin: '0 auto 0 auto', padding: '32px', 
                          background: 'blue', borderRadius: '6px', display: 'flex', 
                          flexDirection: 'column', alignItems: 'center', gap: '28px' }}>
                <h1>{`Message Room`}</h1>
          
                <input className="form-outline mb-4" 
                       style={{ width: '100%', padding: '12px', 
                                borderRadius: '6px', border: '1px solid rgb(63, 73, 204)', fontSize: '0.9rem' }} 
                       placeholder='Username...' 
                       value={name}
                       readOnly
                />

                <input className="form-outline mb-4" 
                       style={{ width: '100%', padding: '12px', 
                                borderRadius: '6px', border: '1px solid rgb(63, 73, 204)', fontSize: '0.9rem' }} 
                       placeholder='Department...'
                       value={department}
                       readOnly
                />

                <input className="form-outline mb-4" 
                       style={{ width: '100%', padding: '12px', 
                                borderRadius: '6px', border: '1px solid rgb(63, 73, 204)', fontSize: '0.9rem' }} 
                       placeholder='Email...'
                       value={email}
                       readOnly
                />
  
                <button className="btn btn-primary" onClick={joinRoom}>Join Room</button>
            </div>
        </div>
    );
};
  
export default Chatroom;
