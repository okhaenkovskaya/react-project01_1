import {useRef} from 'react';
import styled from "styled-components";

const SortWrap = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
`;

const Select = styled.select`
    width: 40%;
    margin:0 10% 0 0;
    background: #303033;
    border: 0;
    padding-left: 21px;
    height: 56px;
    border-radius: 10px;
    color: #F2F2F2;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
`;

const SortSelects = ({onFilter}) => {
  const mySelectWrap = useRef(null);

  const handleChange = () => {
    const selects = Array.from(mySelectWrap.current.children);

    let filterObj = {
      page: 1,
      per_page: 6,
    };

    selects.forEach(select => {
      const filter = select.dataset.name;
      const value = select.options[select.selectedIndex].value;
      if(value === 'all') return
      filterObj = {
        ...filterObj,
        [filter]: value
      }
    });

    onFilter(filterObj)
  }

  return (
      <SortWrap ref={mySelectWrap} onChange={handleChange}>
        <Select  data-name='hops'>
          <option value="all">Hops</option>
          <option value="all">All hops</option>
          <option value="Fuggles">Fuggles</option>
          <option value="Nelson Sauvin">Nelson Sauvin</option>
          <option value="Dana">Dana</option>
        </Select>
        <Select data-name='yeast'>
          <option value="all">Yeast</option>
          <option value="all">All yeast</option>
          <option value="Wyeast 3522 - Belgian Ardennes">Wyeast 3522 - Belgian Ardennes</option>
          <option value="Wyeast 2126 - Bohemian Lager">Wyeast 2126 - Bohemian Lager</option>
          <option value="Wyeast 3711 - French Saison">Wyeast 3711 - French Saison</option>
        </Select>
      </SortWrap>
  );
};

export default SortSelects;
