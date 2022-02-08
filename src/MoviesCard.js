import styled from "styled-components";

const Card = styled.img`
  border-radius: 2rem;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const MoviesCard = ({ movie }) => {
  return (
    <Card
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      alt={movie.title}
    />
  );
};

export default MoviesCard;
