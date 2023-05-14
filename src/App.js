import { React, useState } from 'react';
import Room from './components/room';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import uuid from 'react-uuid';
import LandingPage from './components/landingPage';
import Main from './views/Main';
// import FindDev from './views/FindDev';
import NotFound from './components/NotFound';
import Rating from './components/rating/Rating';
import ThankYou from './components/rating/ThankYou';

function App() {
  //JOIN VIDEO CHAT ROOM 
  const [joined, setJoined] = useState(false)
  const [userID, setUserID] = useState('')
  const [userName, setUserName] = useState('')
  const [roomName, setRoomName] = useState('')
  const [invitationLink, setinvitationLink] = useState('')
  const navigate = useNavigate();

  const [isSubmited,setIsSumbited]=useState(false);
  const [item,setItems]=useState();
  const changeStateSubmited=()=>{
    setIsSumbited(true);
  }
  function changeItem(m){
    setItems(m);

  }
  const createRoom = (e) => {
    e.preventDefault();
    const hasSpaces = Boolean(userName.indexOf(' '))
    if (roomName === undefined || userName === undefined || !hasSpaces) {
      setJoined(false)
      navigate('/invalid')
    }
    setUserID(uuid())
    setJoined(true)
    const roomNameWithoutSpace = roomName.replace(/ /g, '-');
    const room_id = uuid().substring(0, 8) + '@' + roomNameWithoutSpace;
    navigate(`/room/${room_id}`);
  }

  const joinRoom = (e) => {
    e.preventDefault();
    const hasSpaces = Boolean(userName.indexOf(' '))
    if (userName === undefined || !hasSpaces || !invitationLink.includes("-") || !invitationLink.includes("@")) {
      setJoined(false)
      navigate('/invalid')
    }
    setUserID(uuid())
    setJoined(true)
    navigate(`/room/${invitationLink}`);
  }

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Main />} /> */}
        {/* <Route path='/devs' element={<FindDev />} /> */}
        <Route path="/" element={
          !joined && <LandingPage createRoom={createRoom} userName={userName} setUserName={setUserName} roomName={roomName} setRoomName={setRoomName} joinRoom={joinRoom} invitationLink={invitationLink} setinvitationLink={setinvitationLink} />
        } />
        <Route path='/feedback' element={!isSubmited && <Rating changeStateSubmited={changeStateSubmited} changeItem={changeItem} /> } 
        />      
      
      {isSubmited && (
        <>
          <Route path="/thankyou" element={<ThankYou item={item} />} />
          {setTimeout(() => navigate("/"), 3000)}
        </>
      )}     
        

        <Route path="/room/:ROOMID" element={<Room joined={joined} setJoined={setJoined} userID={userID} userName={userName} roomName={roomName} setUserName={setUserName} setRoomName={setRoomName} setinvitationLink={setinvitationLink}/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
