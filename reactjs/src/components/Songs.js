//* Songs page

const Songs = ({ search }) => {
  return (
    <section>
      <a href={search.song_url} target="_blank" rel="noreferrer">
        <img src={search.album_image} alt={search.song} width="200" />
        <p> {search.song}</p>
      </a>
    </section>
  );
};

export default Songs;
