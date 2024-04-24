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
                          justifyContent: 'center', alignItems: 'center',
                          backgroundImage: 'url(\'https://getwallpapers.com/wallpaper/full/e/b/f/1029750-vertical-black-elegant-wallpaper-1920x1080.jpg\')', // Provided background URL
                          backgroundSize: 'cover', // Ensure the image covers the entire container
                          backgroundPosition: 'center' // Center the background image
                        }}>
                <div className="formContainer" 
                     style={{ width: '400px', margin: '0 auto 0 auto', padding: '32px', 
                              borderRadius: '6px', display: 'flex', 
                              flexDirection: 'column', alignItems: 'center', gap: '28px',
                              background: 'rgba(255, 255, 255, 0.5)' }}> {/* Semi-transparent white background */}
                    <h1 style={{ color: 'white' }}>Message Room</h1>
              
                    <div style={{ color: 'white' }}>
                        Name: <strong>{name}</strong>
                    </div>
                    <div style={{ color: 'white' }}>
                        Email: <strong>{email}</strong>
                    </div>
                    <div style={{ color: 'white' }}>
                        Department:<strong> {department}</strong>
                    </div>
                    
            
                    <button className="btn btn-primary" style={{ backgroundColor: 'black', color: 'white' }} onClick={joinRoom}>Join Room</button>
                </div>
            </div>
        );
        
    
};
  
export default Chatroom;
