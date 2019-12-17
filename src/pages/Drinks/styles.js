import styled from 'styled-components/native';

export const Container = styled.View`
 flex:1;
 flex-direction: column;
 /* border-width:2px;
 border-color:red; */
`;
export const ContainerCards = styled.View`
    flex-direction:column;
    /* border-width:2px;
    border-color:tomato; */
`;
export const Title = styled.Text`
    font-size:20px;
    color:#f32;
    font-weight:bold;
    align-self:center;
    margin-top:30px;
`;
export const List = styled.FlatList.attrs({
    showsVerticalscrollIndicator: false,
    contentContainerStyle: { padding: 30 }
})``;
export const Card = styled.View`
margin-top:15px;
padding:20px;
border-radius:4px;
background:#fff;
flex-direction:row;
border-radius:5px;
border-color:#cececece;
border-width:2px;
  /* flex: 1;
  margin-top:15px;
  padding: 20px;
  border-radius:4px;
  background: #fff;
  border-width:2px;
  border-color:#cecece;
  width:100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-between; */

`;
export const Banner = styled.Image`
    width:50px;
    height:50px;
    /* border-radius:25px; */
`;
export const Left = styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
`;
export const Info = styled.View`
    margin-left:15px;
`;
export const Name = styled.Text`
    font-weight:bold;
    font-size:14px;
    color:#333;
`;