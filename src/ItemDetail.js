import { useParams } from "react-router-dom";
import useDetail from "./useDetail";
import MoviesCard from "./MoviesCard";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  margin: 5rem 20%;
`;

const Poster = styled.div`
    min-width: 30rem;
  min-height: 40rem;
  padding: 0 20px;
`;

const Description = styled.div`
> div {
    margin-bottom: 1rem;
}`;
const Title = styled.h2`
    margin: 0;
    padding: 0;
`;

const ItemDetail = () => {
  let { type, id } = useParams();
  const detail = useDetail(type, id);
  return (
    <DetailContainer>
      <Poster>
        <MoviesCard movie={detail} />
      </Poster>
      <Description>
        <Title>{detail.title || detail.name}</Title>
        <div>Release Date: {detail.release_date || detail.first_air_date}</div>
        <div>Overview: {detail.overview}</div>
      </Description>
    </DetailContainer>
  );
};

export default ItemDetail;
