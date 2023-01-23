//* Artists page

const Artists = ({ search }) => {
  return (
    <section>
      {/* <a href={search.artist_url}>{search.artist}</a> */}
      <a href={search.artist_url} target="_blank" rel="noreferrer">
        <img src={search.album_image} alt={search.artist} width="200" />
        <p> {search.artist}</p>
      </a>
    </section>
  );
};

export default Artists;
