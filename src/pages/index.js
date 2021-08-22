import React from 'react';
import Intro from '../sections/intro';
import Learn from '../sections/learn'
import '../styles/index.scss';
import ClubLayout from '../components/layout';
import Layout from '../../lib/hoagie-ui/Layout';
import Theme from '../../lib/hoagie-ui/Theme';
import '../../lib/hoagie-ui/theme.css'

export default function Home() {
  return (
  <Theme>
  <Layout name="club">
  <ClubLayout >
    <Intro />
    <Learn />
  </ClubLayout>
  </Layout>
  </Theme>
  )
}
