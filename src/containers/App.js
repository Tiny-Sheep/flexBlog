import React, { Component } from 'react'
import { Container, ImageContainer, Image, SocialItem, BottomSocialMediaBar } from '../themes'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import NavBar from './NavBar'




class App extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <ImageContainer>
          <Image>
            <h1>Lamine Sadoun</h1>
            <h2>Fullstack Web Developer</h2>
          </Image>
        </ImageContainer>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim enim sit amet venenatis urna cursus eget nunc. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Pretium lectus quam id leo in vitae turpis massa. Dolor sit amet consectetur adipiscing elit. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Eget velit aliquet sagittis id consectetur purus ut. Varius quam quisque id diam vel quam elementum. Lorem sed risus ultricies tristique nulla. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Adipiscing elit ut aliquam purus sit amet. In massa tempor nec feugiat nisl pretium fusce id velit. Pellentesque habitant morbi tristique senectus et.
        </p>
        <BottomSocialMediaBar>
          <SocialItem href='https://github.com/Tiny-Sheep'><FaGithub /></SocialItem>
          <SocialItem href='https://www.linkedin.com/in/lamine-sadoun-873159134/'><FaLinkedin /></SocialItem>
          <SocialItem href='https://twitter.com/lamine_sadoun'><FaTwitter /></SocialItem>
        </BottomSocialMediaBar>
      </Container>
    );
  }
}

export default App;
