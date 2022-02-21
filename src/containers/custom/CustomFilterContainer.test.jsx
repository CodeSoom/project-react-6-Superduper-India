import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import CustomFilterContainer from './CustomFilterContainer';

jest.mock('react-redux');

describe('CustomFilterContainer', () => {
  const mock = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    mock.mockClear();
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => (
      selector.categoryColor = 'selector',
      selector.placeColor = 'selector',
      selector.selectedCategory = [ // 양식
        {
          "id": "10",
          "name": "더다이닝랩",
          "situation": "소개팅",
          "age": "20대",
          "place": "홍대/합정",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "none",
          "2nd-course": "none",
        },
        {
          "id": "36",
          "name": "보이어",
          "situation": "데이트",
          "age": "20대",
          "place": "성수",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "2nd-course": "none",
        },
      ],
      selector.selectedPlace = [ // 광화문/종로
        {
          "id": "21",
          "name": "갈리나데이지",
          "situation": "썸",
          "age": "20대",
          "place": "광화문/종로",
          "category": "이탈리안",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "2nd-course": "none",
        },
        {
          "id": "17",
          "name": "고가빈커리하우스",
          "situation": "소개팅",
          "age": "30대",
          "place": "광화문/종로",
          "category": "인도음식",
          "priceRange": "3만원 이하",
          "mood": "캐주얼한",
          "2nd-course": "none",
        },
      ],
      selector.restaurantsData = [
        {
          "id": "10",
          "name": "더다이닝랩",
          "situation": "소개팅",
          "age": "20대",
          "place": "홍대/합정",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "none",
          "2nd-course": "none",
        },
        {
          "id": "36",
          "name": "보이어",
          "situation": "데이트",
          "age": "20대",
          "place": "성수",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "2nd-course": "none",
        },
        {
          "id": "21",
          "name": "갈리나데이지",
          "situation": "썸",
          "age": "20대",
          "place": "광화문/종로",
          "category": "이탈리안",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "2nd-course": "none",
        },
        {
          "id": "17",
          "name": "고가빈커리하우스",
          "situation": "소개팅",
          "age": "30대",
          "place": "광화문/종로",
          "category": "인도음식",
          "priceRange": "3만원 이하",
          "mood": "캐주얼한",
          "2nd-course": "none",
        },
      ]
    ));
  });

  const renderCustomFilterContainer = () => render((
    <MemoryRouter>
      <CustomFilterContainer />
    </MemoryRouter>
  ));

  describe('map', () => {
    const restaurantsData = [
      {
        "id": "10",
        "name": "더다이닝랩",
        "situation": "소개팅",
        "age": "20대",
        "place": "홍대/합정",
        "category": "양식",
        "priceRange": "3만원 이하",
        "mood": "none",
        "2nd-course": "none",
      },
      {
        "id": "36",
        "name": "보이어",
        "situation": "데이트",
        "age": "20대",
        "place": "성수",
        "category": "양식",
        "priceRange": "3만원 이하",
        "mood": "고급스러운",
        "2nd-course": "none",
      },
      {
        "id": "21",
        "name": "갈리나데이지",
        "situation": "썸",
        "age": "20대",
        "place": "광화문/종로",
        "category": "이탈리안",
        "priceRange": "3만원 이하",
        "mood": "고급스러운",
        "2nd-course": "none",
      },
      {
        "id": "17",
        "name": "고가빈커리하우스",
        "situation": "소개팅",
        "age": "30대",
        "place": "광화문/종로",
        "category": "인도음식",
        "priceRange": "3만원 이하",
        "mood": "캐주얼한",
        "2nd-course": "none",
      },
    ]

    const uniqCategories = uniqBy(restaurantsData, 'category');
    const uniqPlaces = uniqBy(restaurantsData, 'place');

    it('calls its argument with a non-null argument (1)', () => {
      const { container } = renderCustomFilterContainer();

      expect(container).toHaveTextContent('무엇을 드시고 싶으세요?');

      uniqCategories.map(category => mock(category))
      expect(mock).toBeCalled();
    });

    it('calls its argument with a non-null argument (2)', () => {
      const { container } = renderCustomFilterContainer();

      expect(container).toHaveTextContent('어디로 가고 싶나요?');

      uniqPlaces.map(place => mock(place))
      expect(mock).toBeCalled();
    });
  });

  context('when click "#양식" tag', () => {
    it('calls dispatch with action : setCategoryFilter', () => {
      const { getByText } = renderCustomFilterContainer();

      expect(getByText('#양식')).toBeInTheDocument();

      fireEvent.click(getByText('#양식'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when click "#광화문/종로" tag', () => {
    it('calls dispatch with action : setPlaceFilter', () => {
      const { getByText } = renderCustomFilterContainer();

      expect(getByText('#광화문/종로')).toBeInTheDocument();

      fireEvent.click(getByText('#광화문/종로'))

      expect(dispatch).toBeCalled();
    });
  });
});
