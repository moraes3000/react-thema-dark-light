import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 40px;
  height: 80px;
  width:1200px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  a{
    color: ${props => props.theme.colors.text};
    text-decoration:none;
    font-size:24px;
  }
`;

export const Menu = styled.ul`
  padding-left: 25px;
  list-style-type: none;
  display: flex;

  li{
    margin-right: 15px;
  }

  @media(max-width:650px){
    display: flex;
    width: 100%;
    height: 350px;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 0;
    transition: all 0.5s ease;
    flex-direction: column;
    list-style-type: none;
  
    &.active {
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
      align-content: center;
      padding-left: 0px;
    }
  }

  li{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vw;
    padding: 30px 0px;

    a{
      color: ${props => props.theme.colors.text};
      text-decoration:none;
    }
}
`;


export const BtnHamburguer = styled.div`
  display:none;
  color: ${props => props.theme.colors.text};

  @media(max-width:650px){
    display: block;
    font-size:24px;
  }
`;


