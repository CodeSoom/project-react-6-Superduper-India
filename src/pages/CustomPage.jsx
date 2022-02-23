// 관심사: 화면 구성과 레스토랑 저장, 스토어에서 레스토랑 컨테이너에 뿌려주기
import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import CustomCategoryFilterContainer from '../containers/custom/CustomCategoryFilterContainer';
import CustomPlaceFilterContainer from '../containers/custom/CustomPlaceFilterContainer';
import CustomRestaurantsContainer from '../containers/custom/CustomRestaurantsContainer';

import {
  setRestaurantsData,
} from '../actions';

const CustomPageLayout = styled.div({
  display: 'flex',
  height: '100vh',
});

const TitleBox = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: '3rem',
  '& h4': {
    fontWeight: '700',
    color: '#0E0E0E',
  },
  '& span': {
    marginRight: '0.5rem',
    color: '#0E0E0E',
  },
});

const Container = styled.div({
  padding: '4rem 3rem',
  width: '50%',
});

const ResultRestaurants = styled.div({
  padding: '4rem 3rem',
  width: '50%',
  backgroundColor: '#F5F5F5',
  boxShadow: 'inset 0.5rem 0 5rem rgba(0,0,0,0.05)',
});

export default function CustomPage({ restaurants }) {
  const dispatch = useDispatch();

  const situationRestaurantsData = useSelector((state) => (
    state.situationRestaurantsData
  ))

  function filter(restaurants, situationRestaurantsData) {
    if (situationRestaurantsData.length === 0) {
      return restaurants
    }

    return situationRestaurantsData
  }

  // 상황별로 솔팅된 레스토랑 없으면 최초 레스토랑으로 셋함
  const restaurantsData = filter(restaurants, situationRestaurantsData)

  // 최초 레스토랑 혹은 상황별로 솔팅된 레스토랑으로 업데이트
  useEffect(() => {
    dispatch(setRestaurantsData(restaurantsData));
  }, []);

  const filteredRestaurantsData = useSelector((state) =>
    (state.filteredRestaurantsData));

  return (
    <CustomPageLayout>
      <Container>
        <TitleBox>
          <Link to='/home'>
            <span className="material-icons">
              arrow_back
            </span>
          </Link>
          <h4>선택해주세요 !</h4>
        </TitleBox>
        <CustomCategoryFilterContainer />
        <CustomPlaceFilterContainer />
      </Container>
      {filteredRestaurantsData.length !== 0 ?
        <ResultRestaurants>
          <CustomRestaurantsContainer />
        </ResultRestaurants> :
        <ResultRestaurants>
        </ResultRestaurants>
      }
    </CustomPageLayout>
  )
}
