import React from 'react';
import { Pane, Heading, Avatar, Text } from 'evergreen-ui'

const officers = [
  {
    "firstName": "George",
    "lastName": "Chiriac",
    "title": "Co-President",
    "image": "https://i.imgur.com/PX77Ymh.png"
  },
  {
    "firstName": "Windsor",
    "lastName": "Nguyen",
    "title": "Co-President",
    "image": "https://i.imgur.com/hZh8iTf.png"
  },
  {
    "firstName": "Ishaan",
    "lastName": "Javali",
    "title": "Co-President",
    "image": "https://i.imgur.com/ogd8VIq.png"
  },
  {
    "firstName": "Erica",
    "lastName": "Lee",
    "title": "Marketing Director",
    "image": "https://i.imgur.com/1nXfGV4.png"
  },
  {
    "firstName": "Cathy",
    "lastName": "Di",
    "title": "Officer",
    "image": "https://i.imgur.com/99D0fOy.png"
  },
  {
    "firstName": "Issac",
    "lastName": "Li",
    "title": "Officer",
    "image": "https://i.imgur.com/BG2eTIW.png"
  },
  {
    "firstName": "Gabriel",
    "lastName": "Marin",
    "title": "Officer",
    "image": "https://i.imgur.com/HdGvZvh.png"
  },
  {
    "firstName": "Spencer",
    "lastName": "Doyle",
    "title": "Officer",
    "image": "https://i.imgur.com/kUbzXL9.png"
  },
  {
    "firstName": "Ijay",
    "lastName": "Narang",
    "title": "Officer",
    "image": "https://i.imgur.com/cJvIQiW.png"
  },
]

const appsTeam = [
  {
    "firstName": "George",
    "lastName": "Chiriac",
    "title": "Director",
    "image": "https://i.imgur.com/PX77Ymh.png"
  },
  {
    "firstName": "Windsor",
    "lastName": "Nguyen",
    "title": "Director",
    "image": "https://i.imgur.com/hZh8iTf.png"
  },
  {
    "firstName": "Cathy",
    "lastName": "Di",
    "title": "Program Manager",
    "image": "https://i.imgur.com/99D0fOy.png"
  },
  {
    "firstName": "Issac",
    "lastName": "Li",
    "title": "Program Manager",
    "image": "https://i.imgur.com/BG2eTIW.png"
  },
  {
    "firstName": "Gabriel",
    "lastName": "Marin",
    "title": "Program Manager",
    "image": "https://i.imgur.com/HdGvZvh.png"
  },
  {
    "firstName": "Spencer",
    "lastName": "Doyle",
    "title": "Program Manager",
    "image": "https://i.imgur.com/kUbzXL9.png"
  },
]

const hacksTeam = [
    {
      "firstName": "Ishaan",
      "lastName": "Javali",
      "title": "Director",
      "image": "https://i.imgur.com/ogd8VIq.png"
    },
    {
      "firstName": "Cathy",
      "lastName": "Di",
      "title": "Principal",
      "image": "https://i.imgur.com/99D0fOy.png"
    },
]

const MemberCard = ({ member }) => <Pane width="300px" marginX="30px" marginY="5px">
    <Pane float="left">
      <Avatar color="purple" size={100} src={member.image} name={member.firstName + " " + member.lastName} />
    </Pane>
    <Pane 
      float="right"
      height="100px"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      width="200px"
    >
      <Heading size={700}>{member.firstName} {member.lastName}</Heading>
      <br />
      <Text width="150px" size={500}>{member.title}</Text>
    </Pane>
  </Pane>

const MemberSection = ({ members } ) => 
  <Pane
    width="100%"
    display="flex"
    flexWrap="wrap"
  >
    {
      members.map((member) => <MemberCard member={member} />)
    }
</Pane>

const Members = ()  => {
    return (
        <Pane
          width="100%"
          paddingTop="120px"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          backgroundColor="#F2EDF8"
        >
          <Pane 
            maxWidth="1200px"
            width="100%"
          >
            <Heading marginLeft={30} fontFamily="Poppins" lineHeight="50px" marginBottom={40} fontSize="42px" color="#57309B">Meet the Team</Heading>
            <Pane marginLeft={30}><Text lineHeight="30px" fontSize="26px">Hoagie would not be possible without a great team of developers.</Text></Pane>
            <Heading marginLeft={30} marginTop={30} marginBottom={20} size={900}>Officers</Heading>
            <MemberSection members={officers} />
            <Heading marginLeft={30} marginTop={40} marginBottom={20} size={900}>Apps Team</Heading>
            <MemberSection members={appsTeam} />
            <Heading marginLeft={30} marginTop={30} marginBottom={20} size={900}>Hacks Team</Heading>
            <MemberSection members={hacksTeam} />
          </Pane>
        </Pane>
    );
}

export default Members;