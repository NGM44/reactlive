import Card from '../ui/card';
import classes from './meetupItem.module.css';
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext);

  const itemisFavorite = favoriteCtx.itemisFavorite(props.id);

  function toggleFavorite() {
    if (itemisFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>
            {itemisFavorite ? 'REMOVE Favorite' : 'TO FAVORITE'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
