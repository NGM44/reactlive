import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../meetups/meetupList';

function Favorites(props) {
  const favoriteCtx = useContext(FavoritesContext);

  const itemisFavorite = favoriteCtx.itemisFavorite(props.id);

  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>No Favorite available.........</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }
  return (
    <div>
      <h1>Favorites</h1>
      {content}
    </div>
  );
}

export default Favorites;
