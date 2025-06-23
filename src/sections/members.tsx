import React from 'react';
import { Pane, Heading, Avatar, Text } from 'evergreen-ui'
import style from './members.module.scss'
import linkedinIcon from '../assets/linkedin.svg'
import gitIcon from '../assets/git.svg'

const officers = [
  {
    "firstName": "Issac",
    "lastName": "Li",
    "title": "Co-President",
    "image": "https://i.imgur.com/BG2eTIW.png",
    "linkedin": "https://www.linkedin.com/in/issactli/",
    "github": "https://github.com/issacli-0821"
  },
  {
    "firstName": "Cathy",
    "lastName": "Di",
    "title": "Co-President",
    "image": "https://i.imgur.com/99D0fOy.png",
    "linkedin": "https://www.linkedin.com/in/catherine-di-559791254/",
    "github": "https://github.com/Maoshu413"
  },
  {
    "firstName": "Spencer",
    "lastName": "Doyle",
    "title": "Co-President",
    "image": "https://i.imgur.com/kUbzXL9.png",
    "linkedin": "https://www.linkedin.com/in/spencer-doyle3/",
    "github": "https://github.com/Spencer04Hire"
  },
  {
    "firstName": "Emily",
    "lastName": "You",
    "title": "Treasurer",
    "image": "https://i.imgur.com/jwAX2NZ.jpeg",
    "linkedin": "https://www.linkedin.com/in/emilyyou220/",
    "github": "https://github.com/emiilyyou"
  },
  {
    "firstName": "Erica",
    "lastName": "Lee",
    "title": "Social Chair",
    "image": "https://i.imgur.com/1nXfGV4.png",
    "linkedin": "https://www.linkedin.com/in/ericayrlee/",
    "github": "https://github.com/ericayrlee"
  },
  {
    "firstName": "Gary",
    "lastName": "Smith",
    "title": "Head of Product",
    "image": "https://i.imgur.com/Mdd9o1O.jpeg",
    "linkedin": "https://www.linkedin.com/in/garydavidsmith/",
    "github": "https://github.com/Gary-D-Smith"
  },
]

const mealTeam = [
  {
    "firstName": "Kevin",
    "lastName": "Liu",
    "title": "HoagieMeal Lead",
    "image": "https://i.imgur.com/lJnHMe7.jpeg",
    "linkedin": "https://www.linkedin.com/in/kevin-liu-2495b6205/",
    "github": "https://github.com/Kevin-Liu-01",
    "lead": true,
  },
  {
    "firstName": "Abu",
    "lastName": "Ahmed",
    "title": "HoagieMeal Lead",
    "image": "https://i.imgur.com/qryGaZb.png",
    "linkedin": "https://www.linkedin.com/in/abu-ahmed-b5469b249/",
    "github": "https://github.com/abubahmed",
    "lead": true,
  },
  {
    "firstName": "Sadat",
    "lastName": "Ahmed",
    "title": "Developer",
    "image": "https://i.imgur.com/cWpY8Lk.jpeg",
    "linkedin": "https://www.linkedin.com/in/sadat-ahmed-495076246/",
    "github": "https://github.com/Sadat246",
    "lead": false,
  },
  {
    "firstName": "Gabriel",
    "lastName": "Centeno",
    "title": "Developer",
    "image": "https://i.imgur.com/XPzeWfV.jpeg",
    "linkedin": "https://www.linkedin.com/in/gabriel-centeno-3487a5281/",
    "github": "https://github.com/gabecenteno75",
    "lead": false,
  },
  {
    "firstName": "Santiago",
    "lastName": "Criado",
    "title": "Developer",
    "image": "https://i.imgur.com/MncosU7.jpeg",
    "linkedin": "https://www.linkedin.com/in/santiago-criado-91b87a31b/",
    "github": "https://github.com/SantiHi",
    "lead": false,
  },
  {
    "firstName": "Shreyas",
    "lastName": "Garimella",
    "title": "Developer",
    "image": "https://i.imgur.com/Vk72iiR.jpeg",
    "linkedin": "https://www.linkedin.com/in/sgarimel/",
    "github": "https://github.com/sgarimel",
    "lead": false,
  },
  {
    "firstName": "Nathan",
    "lastName": "Kang",
    "title": "Developer",
    "image": "https://i.imgur.com/y9crQVk.jpeg",
    "linkedin": "https://www.linkedin.com/in/nathanmkang/",
    "github": "https://github.com/nathankang727",
    "lead": false,
  },
  {
    "firstName": "Andrew",
    "lastName": "Xia",
    "title": "Developer",
    "image": "https://i.imgur.com/53PYPL3.jpeg",
    "linkedin": "https://www.linkedin.com/in/andrew-y-xia/",
    "github": "https://github.com/Andrew-Y-Xia",
    "lead": false,
  },
  {
    "firstName": "Aaron",
    "lastName": "Yang",
    "title": "Developer",
    "image": "https://i.imgur.com/NYpxYyu.jpeg",
    "linkedin": "https://www.linkedin.com/in/yang-aaron/",
    "github": "https://github.com/aaronjyang",
    "lead": false,
  },
]

const planTeam = [
  {
    "firstName": "Hannah",
    "lastName": "Choi",
    "title": "HoagiePlan Lead",
    "image": "https://i.imgur.com/wbsVpmE.jpeg",
    "linkedin": "https://www.linkedin.com/in/hannah-e-choi/",
    "github": "https://github.com/hannahchoi05",
    "lead": true,
  },
  {
    "firstName": "Emily",
    "lastName": "You",
    "title": "HoagiePlan Lead",
    "image": "https://i.imgur.com/jwAX2NZ.jpeg",
    "linkedin": "https://www.linkedin.com/in/emilyyou220/",
    "github": "https://github.com/emiilyyou",
    "lead": true,
  },
  {
    "firstName": "Lucy",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://i.imgur.com/Y65U2Np.jpeg",
    "linkedin": "https://www.linkedin.com/in/lucy-c1/",
    "github": "https://github.com/lucy-c1",
    "lead": false,
  },
  {
    "firstName": "Lucy",
    "lastName": "Wang",
    "title": "Developer",
    "image": "https://i.imgur.com/g3Lcyi3.png",
    "linkedin": "https://www.linkedin.com/in/lucy-wang-0097b6229/",
    "github": "https://github.com/lucywangj",
    "lead": false,
  },
  {
    "firstName": "Linsey",
    "lastName": "Zhong",
    "title": "Developer",
    "image": "https://i.imgur.com/Upa3UCO.jpeg",
    "linkedin": "https://www.linkedin.com/in/linsey-zhong-686a72309/",
    "github": "https://github.com/linz283",
    "lead": false,
  },
  {
    "firstName": "Rishabh",
    "lastName": "Mohapatra",
    "title": "Developer",
    "image": "https://i.imgur.com/fhOcczM.jpeg",
    "linkedin": "https://www.linkedin.com/in/rishabh-mohapatra-8657a2228/",
    "github": "https://github.com/rmohapatra06",
    "lead": false,
  },
  {
    "firstName": "Luke",
    "lastName": "Sanborn",
    "title": "Developer",
    "image": "https://i.imgur.com/9A6VBIQ.jpeg",
    "linkedin": "https://www.linkedin.com/in/luke-sanborn/",
    "github": "https://github.com/lukesanborn",
    "lead": false,
  },
  {
    "firstName": "Grace",
    "lastName": "Tan",
    "title": "Developer",
    "image": "https://i.imgur.com/wgK68cq.jpeg",
    "linkedin": "https://www.linkedin.com/in/grace-tan-00449132a/",
    "github": "https://github.com/gracezyt",
    "lead": false,
  },
]

const mailTeam = [
  {
    "firstName": "Jenny",
    "lastName": "Fan",
    "title": "HoagieMail Lead",
    "image": "https://i.imgur.com/grwgWFZ.jpeg",
    "linkedin": "https://www.linkedin.com/in/jennyfan04/",
    "github": "https://github.com/jfmath04",
    "lead": true,
  },
  {
    "firstName": "Marvin",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://i.imgur.com/QiHxOHM.jpeg",
    "linkedin": "https://www.linkedin.com/in/chen-marvin/",
    "github": "https://github.com/marvin-chen",
    "lead": false,
  },
  {
    "firstName": "Vishva",
    "lastName": "Ilavelan ",
    "title": "Developer",
    "image": "https://i.imgur.com/Y8saG2h.jpeg",
    "linkedin": "https://www.linkedin.com/in/vishva-ilavelan-36560020b/",
    "github": "https://github.com/VishvaIlavelan2",
    "lead": false,
  },
]

const hacksTeam = [
    {
      "firstName": "Ishaan",
      "lastName": "Javali",
      "title": "Director",
      "image": "https://i.imgur.com/ogd8VIq.png",
      "lead": true,
    },
    {
      "firstName": "Cathy",
      "lastName": "Di",
      "title": "Principal",
      "image": "https://i.imgur.com/99D0fOy.png",
    },
]

const leadership_2024 = [
  {
    "firstName": "George",
    "lastName": "Chiriac",
    "title": "Co-President, Apps Director",
    "image": "https://i.imgur.com/PX77Ymh.png",
    "linkedin": "https://www.linkedin.com/in/george-chiriac/",
    "github": "https://github.com/ggchiriac",
    
  },
  {
    "firstName": "Windsor",
    "lastName": "Nguyen",
    "title": "Co-President, Apps Director",
    "image": "https://i.imgur.com/hZh8iTf.png",
    "linkedin": "https://www.linkedin.com/in/windsornguyen/",
    "github": "https://github.com/windsornguyen",
  },
  {
    "firstName": "Gabriel",
    "lastName": "Marin",
    "title": "HoagiePlan Team Lead",
    "image": "https://i.imgur.com/SP1qA06.jpeg",
    "linkedin": "https://www.linkedin.com/in/gabriel-marin-/",
    "github": "https://github.com/G-Marin",
  },
]



const MemberCard = ({ member, foreground, background, ignoreTint }) => 
  <Pane
    className={style.wrapper}
    display="flex"
    justifyContent="center"
    position="relative"
    marginX="30px"
    marginY="10px"
  >
    {/* MAIN CONTENT */}
    <Pane 
      className={style.card}
      backgroundColor={ignoreTint ? foreground : member.lead ? `color-mix(in srgb, ${background} 15%, ${foreground})` : "#F2EDF8"}
      width="330px"
      borderRadius="100px"
      padding="12px"
      paddingBottom="8px"
      position="relative"
      // border={member.lead ? `1px solid ${background}` : undefined}
      boxShadow={member.lead ? `inset 0 0 0 3px ${background}90` : undefined}
      zIndex={2}
    >
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
        textAlign="center"
        width="200px"
      >
        <Heading size={700} lineHeight="35px" >{member.firstName} {member.lastName}</Heading>
        {/* <br /> */}
        <Text width="150px" size={500}>{member.title}</Text>
      </Pane>
    </Pane>
    {/* SOCIALS */}
    <Pane 
      className={style.socials}
      height="100%"
      position="absolute"
      top={0}
      left={200}
      backgroundColor={background}
      zIndex={1}
    >
      <Pane
        display="flex"
        alignItems="flex-end"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
        padding="10px"
      >
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            style={{ width: '24px', height: '24px', cursor: 'pointer' }}
          />
        </a>
        <a href={member.github} target="_blank" rel="noopener noreferrer">
          <img
            src={gitIcon}
            alt="GitHub"
            style={{ width: '24px', height: '24px', cursor: 'pointer' }}
          />
        </a>
      </Pane>
    </Pane>
  </Pane>




const MemberSection = ({ members, ignoreTint } ) => 
  <Pane
    width="100%"
    display="flex"
    flexWrap="wrap"
  >
    {
      members.map((member) => <MemberCard member={member} foreground={"#F2EDF8"} background={"#57309B"} ignoreTint={ignoreTint} />)
    }
</Pane>

const AppSection = ({ members, app } ) => 
  <Pane
    width="100%"
    maxWidth="95vw"
    position="relative"
    display="flex"
    flexWrap="wrap"
    // backgroundColor="rgba(248, 246, 251, 0.5)"
    borderRadius="10px"
    paddingTop="30px"
    paddingBottom="10px"
    marginTop="10px"
  >
    <Heading paddingBottom={10} marginLeft={30} size={900} width={"100%"} fontFamily="Poppins" fontWeight={600}>
      <span style={{ color: "black" }}>hoagie</span>
      <span style={{ color: app.color }}>{app.name}</span>
    </Heading>
    {
      members.map((member) => <MemberCard member={member} ignoreTint={false} foreground={"#F8F6FB"} background={app.color} />)
    }
</Pane>

const PastSection = ({ members, year } ) => 
  <Pane
    width="100%"
    position="relative"
    display="flex"
    flexWrap="wrap"
    backgroundColor="rgba(255,255,255,0.75)"
    borderRadius="10px"
    paddingTop="20px"
    paddingBottom="10px"
    style={{ transform: "scale(0.9)" }}
  >
    <h2
      style={{
        position: "absolute",
        top: -40,
        left: -10,
        background: "rgb(217, 217, 217)",
        textDecoration: "underline",
        textAlign: "center",
        padding: "10px 20px",
        zIndex: 3,
        borderRadius: "10px"
      }}
    >
      {year}
    </h2>
    {
      members.map((member) => <MemberCard member={member} ignoreTint={true} foreground={"#FCFAFD"} background={"#57309B"} />)
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
            alignItems="center"
            alignContent="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Heading marginLeft={30} fontFamily="Poppins" lineHeight="50px" marginBottom={40} fontSize="42px" color="#57309B">Meet the Team</Heading>
            <Pane marginLeft={30} marginRight={30} paddingBottom={40}><Text lineHeight="30px" fontSize="26px">Hoagie would not be possible without a great team of developers.</Text></Pane>

            <Heading width="100%" marginLeft={30} marginTop={30} size={900}>Officers</Heading>
            <MemberSection members={officers} ignoreTint={true} />

            <AppSection members={planTeam} app={{ name:"plan", color:"#FFAC00" }} />
            <AppSection members={mailTeam} app={{ name:"mail", color:"#F86D01" }} />
            <AppSection members={mealTeam} app={{ name:"meal", color:"#327D00" }} />
            <AppSection members={hacksTeam} app={{ name:"hacks", color:"#4f6077" }} />

            <Heading width="100%" marginLeft={30} marginTop={100} marginBottom={20} size={900}>Past Leadership</Heading>
            <PastSection members={leadership_2024} year="2024" />
          </Pane>
        </Pane>
    );
}

export default Members;