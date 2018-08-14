import styled, { css } from 'styled-components'
import { PurpleSilence } from './ColorVars'
export const Container = styled.div`
  padding: 30px 120px 0px 120px;
`
//Landing Page Profile Image
export const ImageContainer = styled.div`
  height:100vh;
  background-image:url('${require('../assets/LamineAlbumCover.jpg')}');
  background-repeat:no-repeat;
  background-size:100% 100%;
  background-position:center;

  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  color:${PurpleSilence.text};
  font-size:2em;
  text-shadow: 2px 2px 2px #161616;

  h1{
    margin-bottom:0;
  }

`

export const Flex = styled.div`
  display:flex;
`


