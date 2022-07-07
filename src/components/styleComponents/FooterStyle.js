import styled from 'styled-components';

export const Box = styled.div`
padding: 40px 30px;
background: #235f83;
position: relative;
bottom: 0;
width: 100%;
left: 0; 
right: 0;
-webkit-box-shadow: 0px -3px 17px -2px rgba(0,0,0,0.7); 
box-shadow: 0px -3px 17px -2px rgba(0,0,0,0.7);

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  align:center;
  margin-left:100px;
  width:100%;
  flex-direction: row;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 10px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 12px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;
