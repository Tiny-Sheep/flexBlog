import styled, { css } from 'styled-components'
import { PurpleSilence } from './ColorVars'
import { Link } from 'react-router-dom'


export const Div = styled.div`

${({ marginBottom }) => marginBottom && css`
margin-bottom:${marginBottom}
`};

`

export const Container = styled(Div)`
  display:flex;
  flex-direction:column;
  position:center;
  margin: 0 auto ;
  max-width:80%;
  height:100%;
  background-color:white;
`
//Landing Page Profile Image
export const ImageContainer = styled(Div)`
  display:flex;
  height:45vh;
  width:100%;

  `
export const Image = styled(Div)`
  display:flex;
  flex-direction:column;
  background-image:url(${require('../assets/LamineAlbumCover.jpg')});
  background-repeat:no-repeat;
  background-size:100% 100%;
  height:100%;
  width:100%;
  background-position:center;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  color:white;
  text-shadow: 2px 2px 2px #161616;

  h1 h2 h3{
    margin-bottom:0;
  }
`
export const BottomSocialMediaBar = styled(Div)`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  width:100%;
  height:5%;
  background-color:white;
`


export const UniversalBackground = styled.div`
  display:flex;
  height:100%;
  background-image: url(${require('../assets/UniversalBackground.jpg')});
  background-size:cover;
  z-index:-99;

`

export const Flex = styled(Div)`
  display:flex;

  ${({ direction }) => direction && css`
    flex-direction:${direction}
  `};

  ${({ justify }) => justify && css`
    justify-content:${justify}
  `};

  ${({ align }) => align && css`
    justify-content:${align}
  `};


  ${({ justify }) => justify && css`
    justify-content:${justify}
  `};

`


export const NavContainer = styled(Flex)`
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  height:5%;
  width:100%;

`
export const NavItem = styled(Link)`
  font-size:3vw;
  font-weight:bold;
  cursor:pointer;
  padding: 0 0 0 10px;
  ${({ color }) => color && css`
    color:${color}
  `};

  &:hover{
    color:${PurpleSilence.highlight};
    background:${PurpleSilence.text};
  }
`

export const SocialItem = styled.a`
  color:inherit;

`