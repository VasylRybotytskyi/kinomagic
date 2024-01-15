const movieInfo: string[] = ["Рік", "ageLimit", "category", "length"];

const MovieContent = () => {
  return (
    <div>
      <h2>Назва фільму</h2>

      <ul>
        {movieInfo.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>

      <p>description</p>

      <div>
        <button>favorites</button>
      </div>
    </div>
  );
};

export default MovieContent;
