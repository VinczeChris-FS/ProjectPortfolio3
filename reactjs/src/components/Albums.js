//* Albums page

const Albums = ({ search }) => {
  return (
    <section>
      <a href={search.album_url} target="_blank" rel="noreferrer">
        <img src={search.album_image} alt={search.album} width="200" />
        <p> {search.album}</p>
      </a>
    </section>
  );
};

export default Albums;
