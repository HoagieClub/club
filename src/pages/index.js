import React from 'react';
import Intro from '../sections/intro';
import Learn from '../sections/learn'
import Members from '../sections/members'
import '../styles/index.scss';
import ClubLayout from '../components/layout';
import Layout from '../hoagie-ui/Layout';
import Nav from '../hoagie-ui/Nav';
import Theme from '../hoagie-ui/Theme';
import '../hoagie-ui/theme.css'

export default function Home() {
  return (
    <Theme>
      <Layout>
        <a id="header" href="#header" aria-label="Navigation header">
          <Nav name="club" />
        </a>
        <ClubLayout>
          <Intro />
          <Members />
          <Learn />
        </ClubLayout>
      </Layout>
    </Theme>
  )
}
