import React from 'react';
import { Pane, Heading, Avatar, Text } from 'evergreen-ui'

const officers = [
  {
    "firstName": "Liam",
    "lastName": "Esparraguera",
    "title": "President",
    "image": "https://i.imgur.com/bDQXeNp.png"
  },
  {
    "firstName": "Dennis",
    "lastName": "Jacob",
    "title": "Vice President",
    "image": "https://i.imgur.com/Q7bu4r7.png"
  },
  {
    "firstName": "Caroline",
    "lastName": "Zhao",
    "title": "Head of Marketing",
    "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/862d0f46-f5b3-4306-a670-a8ffbb3c8b27"
  },
]

const core = [
  {
    "firstName": "Liam",
    "lastName": "Esparraguera",
    "title": "Team Lead",
    "image": "https://i.imgur.com/bDQXeNp.png"
  },
  {
    "firstName": "Daniel",
    "lastName": "Hu",
    "title": "Software Developer",
    "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/5fff8557-62d1-477a-8d33-39f8ad2982af"
  },
  {
    "firstName": "Shane",
    "lastName": "Brunswick",
    "title": "Software Developer",
    "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/e5cf78fd-7716-49fa-976c-495fe585d817"
  },
  {
    "firstName": "Sean",
    "lastName": "Wang",
    "title": "Software Developer",
    "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/34214260-4657-4e42-9d84-4edbf5e1579b"
  },
  {
    "firstName": "Suhani",
    "lastName": "Balachandran",
    "title": "Software Developer",
    "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/d0fe4548-61f6-4a64-b316-abe86be8ed7b"
  },
  {
    "firstName": "Andrew",
    "lastName": "Tao",
    "title": "Software Developer",
    "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/204a9e39-4a56-4358-8ad6-ff26bd1bc4b5"
  },
  {
    "firstName": "Ananya",
    "lastName": "Grover",
    "title": "Software Developer",
    "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/620070f2-96b9-4857-a414-9477560451b7"
  },
  {
    "firstName": "Arnav",
    "lastName": "Kumar",
    "title": "Software Developer",
    "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/7390dfb0-b29e-40b9-b59a-2e4abc9f2668"
  },
]

const projects = [
    {
      "firstName": "Dennis",
      "lastName": "Jacob",
      "title": "Team Lead",
      "image": "https://i.imgur.com/Q7bu4r7.png"
    },
    {
      "firstName": "Edmund",
      "lastName": "Young",
      "title": "Software Developer",
      "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/41032d4b-6671-419c-babf-7f382b516d81"
    },
    {
      "firstName": "Thanya",
      "lastName": "Begum",
      "title": "Software Developer",
      "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/62f346ab-3b3c-45dd-802c-c97de360f47f"
    },
    {
      "firstName": "Eric",
      "lastName": "Ahn",
      "title": "Software Developer",
      "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/a51eccac-5f47-45dc-8af4-18e0c9a1792a"
    },
    {
      "firstName": "Warren",
      "lastName": "Quan",
      "title": "Software Developer",
      "image": "https://storage.googleapis.com/tally-response-assets/r0pMer/333158f4-c236-4ed5-a2aa-3c4290444572"
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
      align="center"
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
            <Heading marginLeft={30} marginTop={40} marginBottom={20} size={900}>Purple Team</Heading>
            <MemberSection members={projects} />
            <Heading marginLeft={30} marginTop={30} marginBottom={20} size={900}>Orange Team</Heading>
            <MemberSection members={core} />
          </Pane>
        </Pane>
    );
}

export default Members;