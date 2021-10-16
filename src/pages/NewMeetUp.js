import NewMeetUpForm from '../meetups/NewMeetUpForm';
import { useHistory } from 'react-router-dom';
function NewMeetUp() {
  const history =useHistory();
  function onAddNewMeetHandler(meetUpdata) {
    fetch('https://react-25bb2-default-rtdb.firebaseio.com/meetup.json', {
      method: 'POST',
      body: JSON.stringify(meetUpdata),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(()=>{
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>New Meet Up</h1>
      <NewMeetUpForm onAddNewMeet={onAddNewMeetHandler} />
    </section>
  );
}

export default NewMeetUp;
