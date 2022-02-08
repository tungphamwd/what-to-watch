import styled from "styled-components";
const Button = styled.button`
  font-size: 1.5rem;
  margin: 25px;
  padding: 1rem;
  border: 2px solid;
  border-radius: 3px;
  background: ${props => props.actived ? "purple" : "white"};
  color: ${props => props.actived ? "white" : "purple"};

`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const TrendingController = ({action, trending}) => {
  return (
    <ButtonContainer>
      <Button actived={trending === 'movie'} onClick={() => action('movie')}>Movies Trending</Button>
      <Button actived={trending === 'tv'} onClick={() => action('tv')}>TVShows Trending</Button>
    </ButtonContainer>
  );
};

export default TrendingController;
