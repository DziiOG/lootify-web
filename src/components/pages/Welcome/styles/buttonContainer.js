import styled from 'styled-components'




export const ButtonContainer = styled.button `
text-transform:capitalize; 
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props => (props.cart? "var(--mainYellow)": "var(--lightBlue)")};
color:${props => (props.cart? "var(--mainYellow)": "var(--lightBlue)")};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background:${props => (props.cart? "var(--mainYellow)": "var(--lightBlue)")};
  color:var(--mainBlue);
}
&:focus{
  outline: none;
}
`;


export const ButtonContainer2 = styled.button `
font-size: 0.8rem;
text-transform:capitalize; 
background: transparent;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
flex-direction: row !important;
justify-content: center;
align-items: center;
border: none !important;
flex: 1;
&:hover{
  background:#FFFFE0;
  color:#d2d2d2;
}
&:focus{
  outline: none;
}
`;



export const BannerWrapper = styled.div `
width: 100% !important;
min-width: 375px !important;
height: 800px; 
`;

