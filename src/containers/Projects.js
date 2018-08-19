import React, { Component } from 'react'
import { Container, ProjectDesc, SocialItem, BottomSocialMediaBar, Project, ProjectImage } from '../themes'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { NavBar } from './'

export default class Projects extends Component {
    render() {
        console.log("getting into my portfolio page")
        return (
            <Container>
                <NavBar />
                <h1>Lamine's Projects</h1>

                <Project color='red' marginBottom='10px'>
                    <ProjectImage src={require('../assets/LamineAlbumCover.jpg')} alt=' ' />
                    <ProjectDesc>This is the description of this project</ProjectDesc>
                </Project>

                <Project color='green' marginBottom='10px' >
                    <ProjectImage src={require('../assets/LamineAlbumCover.jpg')} alt=' ' />
                    <ProjectDesc>This is the description of this project</ProjectDesc>
                </Project>

                <Project color='powderblue' marginBottom='10px'>
                    <ProjectImage src={require('../assets/LamineAlbumCover.jpg')} alt=' ' />
                    <ProjectDesc>This is the description of this project</ProjectDesc>
                </Project>

                <BottomSocialMediaBar>
                    <SocialItem href='https://github.com/Tiny-Sheep'><FaGithub /></SocialItem>
                    <SocialItem href='https://www.linkedin.com/in/lamine-sadoun-873159134/'><FaLinkedin /></SocialItem>
                    <SocialItem href='https://twitter.com/lamine_sadoun'><FaTwitter /></SocialItem>
                </BottomSocialMediaBar>
            </Container>

        )
    }
}