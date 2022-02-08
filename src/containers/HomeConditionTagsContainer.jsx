import styled from '@emotion/styled';

const HomeContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const TagsBox = styled.div({
  textAlign: 'left',
  margin: '8px 0',
});

const Hashtags = styled.button({
  border: 'none',
  padding: '8px',
  margin: '4px',
  borderRadius: '4px',
});

export default function HomeConditionTagsContainer({ conditionsArr }) {
  return (
    <HomeContainer>
      <TagsBox>
        <p>어떤 상황인가요?</p>
        {conditionsArr.map((obj) => (
          <Hashtags
            type="Hashtags"
            key={obj.id}
          >
            {obj.condition}
          </Hashtags>
        ))}
      </TagsBox>
    </HomeContainer>
  )
}
