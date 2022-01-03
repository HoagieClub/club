import React from 'react'
import ContentCard from '../components/content_card'
import dottedLine from '../components/dotted_line.svg'
import hoagieIcon from '../components/footer_hoagie.svg'
import style from './learn.module.scss'
import { Button } from 'evergreen-ui'

const introText = (
  <>
    Hoagie Club is structured to make sure everyone involved has the chance to make impact and learn a lot. 
  </>
)
const learningText = (
  <> 
    There's two ways we make sure you always have opportunities to grow at Hoagie. 
    <br />
    <br />
    First, we have <b>development guidelines </b>  
    and a formalized code review process to simulate real-life software companies and allow you to pick up good engineering habits. We also believe best learning comes from practice and mentorship, 
    so we make sure our teams have people from a variety of backgrounds. 
    <br />
    <br />
    Secondly, we provide <b>role flexibility</b> allowing you to explore different parts of software development. From backend APIs and infrastructure 
    to frontend and command-line scripts, there's many opportunities to contribute to Hoagie.
  </>
)

const doingText = (
  <>
    While Hoagie is still early in its development on campus, we have many exciting opportunities for members to be part of.
    At the moment, Hoagie Club is structured into two teams: <b>Core</b> and <b>Projects</b>.
    <br />
    <br />
    <b>Core Team</b> deals with features which are shared by all Hoagie Applications as well as the platform itself. This includes
    things like authentication, the central database, and all shared UI elements like buttons. 
    <br />
    <br />
    <b>Projects Team</b> works directly on Hoagie Applications such as <u><a target="_blank" href="https://mail.hoagie.io">Mail</a></u>.
    They use shared elements made by the Core Team as well as write their own application-specifc code. Some potential projects for the Fall semester
    include adding new features to the Mail app as well as working on Trade, our student trading application.
  </>
)

const togetherText = (
  <>
  If you are interested in any of this, be on the lookout for opportunities to join Hoagie Club. 
  We usually recruit members in the Fall but depending on project needs may have recruit in the Spring as well.
  <br />
  <br />
  In the future, we hope to provide enough resources to make contributions to Hoagie applications accessible for everyone.
  Some of our project repositories are already open-source on GitHub and while we cannot provide contribution guidance right now,
  you can always get in contact with us if you want to add new features to our open-source repositories without being a member.
    {/* If you're interested in any of this, be sure to apply by September 12th!
    <br />
    <br />
    <a href="https://tally.so/r/nPROP3" target="_blank"><Button size="large">Apply to Hoagie!</Button></a>
    <br /> */}
  </>
)

const doingTitle = 'Doing'
const learningTitle = 'Learning'
const togetherTitle = 'Joining'

const Learn = () => {
  return (
    <div id="learn" className={style.section + ' section'}>
      <img src={dottedLine} />
      <ContentCard 
        title="How is Hoagie Club run?"
        text={introText} />
      <img src={dottedLine} />
      <ContentCard
        title={learningTitle}
        color="green"
        text={learningText}
      />
      <img src={dottedLine} />
      <ContentCard
        title={doingTitle}
        color="red"
        text={doingText}
      />
      <img src={dottedLine} />
      <ContentCard
        title={togetherTitle}
        color="purple"
        text={togetherText}
      />
      <a href="#intro"><img width="65px" src={hoagieIcon} className={style.footerIcon} /></a>
    </div>
  )
}

export default Learn
