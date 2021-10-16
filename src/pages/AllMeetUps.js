import MeetupList from "../meetups/meetupList";
import { useState,useEffect  } from "react";

function AllMeetUpsPage() {
const [isLoading,setIsLoading]=useState(true);
const [loadedMeetups,setLoadedMeetups]=useState([]);
useEffect(()=>{
  setIsLoading(true);
  fetch('https://react-25bb2-default-rtdb.firebaseio.com/meetup.json',).then(
    response =>{
      return response.json();
    }).then(data => {
      const meetups=[];
      for(const key in data){
        const meetup={
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }
setIsLoading(false);
setLoadedMeetups(meetups);
    });
},[]);
    
  
if(isLoading){
return <section><p>Loading.......</p></section>
}
else{



  return <section>
      <h1>All Meet Ups</h1>
     <MeetupList meetups={loadedMeetups}/>
  </section>;}
}

export default AllMeetUpsPage;



// <ul>
//{DUMMY_DATA.map((meetup)=>{
  //  return <li key={meetup.id}>{meetup.title}</li>
//})}
//</ul>