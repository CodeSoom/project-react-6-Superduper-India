import styled from '@emotion/styled';

import facepaint from 'facepaint';

import KakaoMapBtn from '../kakao/KakaoMapBtn';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const VerticalRestaurantsList = styled.div(() => mq({
  borderBottom: ['solid #fff 1vw', 'none', 'none'],
  marginBottom: '1.5rem',
  padding: ['8vw 0', '1rem 5rem', '1rem 5rem'],
}));

const Title = styled.div(() => mq({
  borderBottom: ['none', 'solid 1px #C4C4C4', 'solid 1px #C4C4C4'],
  textAlign: ['center', 'left', 'left'],
  fontSize: ['4vw', '1.25rem', '1.25rem'],
  fontWeight: '700',
  color: '#4F4F4F',
}));

const VerticalRestaurantsList_restaurant = styled.li(() => mq({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  height: ['auto', '10rem', '10rem'],
}));

const VerticalRestaurantsList_restaurant_contents = styled.div(() => mq({
  padding: ['3.75vw 0', 0, 0],
  marginLeft: ['3.75vw', 0, 0],
  '& h4': {
    color: '#4F4F4F',
    fontSize: ['4.2vw', '1rem', '1rem'],
    fontWeight: '700',
    marginBottom: ['1.75vw', '0.5rem', '0.5rem'],
  },
  '& span': {
    color: '#828282',
    fontSize: ['3.5vw', '1rem', '1rem'],
  },
}));

export default function RestaurantAfterCafe({ afterCafes }) {
  return (
    <VerticalRestaurantsList>
      <Title>[밥 먹고 가기 좋은 카페]</Title>
      {afterCafes.map((restaurant) => (
        <VerticalRestaurantsList_restaurant
          key={restaurant.id}
        >
          <VerticalRestaurantsList_restaurant_contents>
            <h4>{restaurant.place_name}</h4>
            <span>{restaurant.category_name}</span>
            <br />
            <span>{restaurant.address_name}</span>
          </VerticalRestaurantsList_restaurant_contents>
          <KakaoMapBtn
            placeUrl={restaurant.place_url}
          />
        </VerticalRestaurantsList_restaurant>
      ))}
    </VerticalRestaurantsList>
  )
}
