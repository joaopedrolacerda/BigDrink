import styled from 'styled-components/native';

export const Container = styled.View`
 flex:1;
 flex-direction: column;

`;
export const ImageContainer = styled.Image`
 width:100%;
 height:40%;
`;
export const ContainerDetails = styled.View`
flex:2;
border-width:2px;
border-color:#cececece;
padding:4%;
padding-top:5%;

border-top-right-radius:20px;
border-top-left-radius:20px;
`;
export const Description = styled.Text`
font-size:15px;
`;
export const Title = styled.Text`
font-weight:bold;
font-size:15px;
margin-top:15px;
margin-bottom:15px;
`;
export const Scroll = styled.ScrollView`
flex:1;
`;