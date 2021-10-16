import MeetupItem from './meetupItem';
import classes from './meetupList.module.css'
function MeetupList(props){
return <ul className={classes.list}>
    {props.meetups.map(meetup=><MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address}/>)}
</ul>
}

export default MeetupList;