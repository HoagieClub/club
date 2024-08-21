import React from 'react'
import ContentCard from '../components/content_card'
import dottedLine from '../components/dotted_line.svg'
import hoagieIcon from '../components/footer_hoagie.svg'
import style from './learn.module.scss'
import { Button } from 'evergreen-ui'

const introText = (
  <>
    Hoagie Club is built on the idea that the best products come from the joyous collaboration of passionate designers, engineers, and creators.
    So, Hoagie Club is structured such that every member has the chance to drive real impact and learn valuable skills.
  </>
)
const learningText = (
  <> 
    There are two ways that we make sure you always have opportunities to grow at Hoagie. 
    <br />
    <br />
    First, we have <b>development guidelines </b>  
    and a formalized code review process that simulate real-life software companies to allow you to pick up good engineering habits.
    We also believe that the best learning comes from practice and peer mentorship, and so
    we make sure that our teams have members from a variety of backgrounds and encourage stepping out of your comfort zone in development. 
    <br />
    <br />
    Secondly, we provide <b>role flexibility</b>, allowing you to explore different parts of software design and development. From backend APIs and testing infrastructure 
    to frontend UI and command-line scripts, there are many opportunities and many different ways to contribute to Hoagie.
  </>
)

const doingText = (
  <>
    As a rapidly-growing student organization, Hoagie has many exciting opportunities for members!
    At the moment, Hoagie Club is structured into two teams: <b>Apps</b> and <b>Hacks</b>.
    <br />
    <br />
    <b>Apps Team</b> works directly on Hoagie Applications such as <u><a target="_blank" href="https://mail.hoagie.io">Mail</a></u>.
    They use shared elements from the Hoagie API and our UI component library as well as write their own application-specific code. Some potential projects for the Fall semester include
    adding new features to HoagiePlan, officially launching HoagieStuff, maintaining HoagiePlan, and kicking off a brand new application project!
    <br />
    <br />
    <b>Hacks Team</b> organizes HoagieHacks, weekly coding sessions where students form groups to work on programming projects they're passionate about.
    The team gives lectures to fill in the gaps in programmers' knowledge, helps potential startup founders ideate, and offers group mentoring.
  </>
)

const togetherText = (
  <>
  If you are interested in any of this, be on the lookout for opportunities to join Hoagie Club. 
  We usually recruit members in the Fall, but may recruit in the Spring as well, depending on project needs.
  <br />
  <br />
  In the future, we hope to provide enough resources to make contributions to Hoagie applications accessible for everyone.
  Some of our project repositories are already open-source on GitHub, and while we cannot provide contribution guidance right now,
  you can always get in contact with us if you want to add new features to our open-source repositories without being a member!
    If you're interested in any of this, be sure to apply by September 13th!
    <br />
    <br />
    <a href={'/forms/apply'} target="_blank"><Button size="large">Apply to Hoagie!</Button></a>
    <br />
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
