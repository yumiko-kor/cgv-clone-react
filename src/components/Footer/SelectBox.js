import styled from 'styled-components';

const SelectBox = () => {
  return (
    <WrapSelectBox>
      <form action="#">
        <SelectBoxBlock name="cjGroup" id="cjGroup">
          <option value="" hidden>
            계열사 바로가기
          </option>
          <optgroup label="CJ 그룹">
            <option value="cjCorp">CJ주식회사</option>
          </optgroup>
          <optgroup label="식품 & 식품 서비스">
            <option value="cjChailJedang">CJ제일제당</option>
            <option value="cjFoodWil">CJ푸드윌</option>
            <option value="cjFreshWay">CJ프레시웨이</option>
          </optgroup>
          <optgroup label="생명공학">
            <option value="cjBio">CJ제일제당 BIO사업부문</option>
            <option value="cjFeedCard">CJ Feed&Card</option>
          </optgroup>
          <optgroup label="물류 & 신유통">
            <option value="cjPost">CJ대한통운</option>
            <option value="cjPostPart">CJ대한통운 건설부문</option>
            <option value="cjOliveYoung">CJ올리브영</option>
            <option value="cjOliveNetworks">CJ올리브네트웍스</option>
            <option value="cjEnmCommerce">CJ ENM 커머스부문</option>
          </optgroup>
          <optgroup label="엔터테인먼트 & 미디어">
            <option value="cjEnmEntertaiment">CJ ENM 엔터테인먼트부문</option>
            <option value="cjCgv">CJ CGV</option>
          </optgroup>
        </SelectBoxBlock>
        <SubmitButton type="submit" value="GO" />
      </form>
    </WrapSelectBox>
  );
};

const WrapSelectBox = styled.div`
  margin-left: auto;
  margin-top: 60px;
  display: flex;
`;

const SelectBoxBlock = styled.select`
  height: 35px;
  width: 180px;
  color: #7a7a7a;
  font-weight: bold;
  background: none;
  border: 1px solid #d8d8d8;
  padding-left: 3px;
`;

const SubmitButton = styled.input`
  background-color: #9e9e9e;
  color: white;
  border: none;
  font-weight: bold;
  width: 35px;
  height: 35px;
  text-align: center;
  margin-left: 3px;
`;

export default SelectBox;
