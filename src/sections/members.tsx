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
    "image": "https://i.imgur.com/xEdlqLI.jpeg",
    "linkedin": "https://www.linkedin.com/in/abu-ahmed-b5469b249/",
    "github": "https://github.com/abubahmed",
    "lead": true,
  },
  {
    "firstName": "Yusuf",
    "lastName": "Abdelnur",
    "title": "Product Manager",
    "image": "https://i.imgur.com/DomKt8N.jpeg",
    "linkedin": "https://www.linkedin.com/in/yusuf-abdelnur/",
    "github": "https://github.com/fusuy4",
    "lead": false,
  },
  {
    "firstName": "Mathias",
    "lastName": "Nguyen-Van-Duong",
    "title": "Product Manager",
    "image": "https://i.imgur.com/MrWM4K8.jpeg",
    "linkedin": "https://www.linkedin.com/in/mathiasnvd/",
    "github": "https://github.com/matnvd",
    "lead": false,
  },
  {
    "firstName": "Zashaan",
    "lastName": "Shaik",
    "title": "Developer",
    "image": "https://i.imgur.com/if627iA.jpeg",
    "linkedin": "https://www.linkedin.com/in/zashaan-shaik/",
    "github": "https://github.com/Zashaan",
    "lead": false,
  },
  {
    "firstName": "John",
    "lastName": "Wu",
    "title": "Developer",
    "image": "https://i.imgur.com/oS84xrq.jpeg",
    "linkedin": "https://www.linkedin.com/in/john-wu-76b62829a/",
    "github": "https://github.com/jon3350",
    "lead": false,
  },
  {
    "firstName": "Malachi",
    "lastName": "Noel",
    "title": "Developer",
    "image": "https://i.imgur.com/MPwu9Nc.jpeg",
    "linkedin": "https://www.linkedin.com/in/malachi-noel/",
    "github": "https://github.com/MalachiNoel3",
    "lead": false,
  },
  {
    "firstName": "Emily",
    "lastName": "Zou",
    "title": "Developer",
    "image": "https://i.imgur.com/J2NI7z4.jpeg",
    "linkedin": "https://www.linkedin.com/in/emily-zou-princeton/",
    "github": "https://github.com/ezou6",
    "lead": false,
  },
  {
    "firstName": "Brooke",
    "lastName": "Xu",
    "title": "Developer",
    "image": "https://i.imgur.com/kRLCT0u.jpeg",
    "linkedin": "https://www.linkedin.com/in/brooke-xu/",
    "github": "https://github.com/brookex923",
    "lead": false,
  },
  {
    "firstName": "Faylinn",
    "lastName": "Wong",
    "title": "Developer",
    "image": "https://i.imgur.com/pZxmcGJ.jpeg",
    "linkedin": "https://www.linkedin.com/in/faylinn-w-005890238/",
    "github": "https://github.com/FaylinnW",
    "lead": false,
  },
  {
    "firstName": "Sevastian",
    "lastName": "Venegas",
    "title": "Developer",
    "image": "https://i.imgur.com/I6xeb0k.jpeg",
    "linkedin": "https://www.linkedin.com/in/sevastian-venegas/",
    "github": "https://github.com/sevivenegas",
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
    "firstName": "Jaclyn",
    "lastName": "Eum",
    "title": "Developer",
    "image": "https://i.imgur.com/uI5oauV.jpeg",
    "linkedin": "https://www.linkedin.com/in/jaclyn-eum/",
    "github": "https://github.com/jaclyneum",
    "lead": false,
  },
  {
    "firstName": "Andrew",
    "lastName": "Wu",
    "title": "Developer",
    "image": "https://i.imgur.com/QDwARGQ.jpeg",
    "linkedin": "https://www.linkedin.com/in/andrew-wu-b833052a6/",
    "github": "https://github.com/Andrewww8",
    "lead": false,
  },
  {
    "firstName": "Micheal",
    "lastName": "Huang",
    "title": "Developer",
    "image": "https://i.imgur.com/uXpqyhZ.jpeg",
    "linkedin": "https://www.linkedin.com/in/micheal-huang-5636252a6/",
    "github": "https://github.com/astoppop",
    "lead": false,
  },
  {
    "firstName": "Eric",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://i.imgur.com/jSxrEwJ.jpeg",
    "linkedin": "https://www.linkedin.com/in/ericjiajiechen/",
    "github": "https://github.com/EricChen06",
    "lead": false,
  },
  {
    "firstName": "Patrick",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://i.imgur.com/odP0Iwl.jpeg",
    "linkedin": "https://www.linkedin.com/in/patrick-chen-4b20b6247/",
    "github": "https://github.com/pchen33",
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
    "firstName": "Emily",
    "lastName": "Tran",
    "title": "Product Manager",
    "image": "https://i.imgur.com/36TdfuT.jpeg",
    "linkedin": "https://www.linkedin.com/in/emily-tran-9571b1279/",
    "github": "https://github.com/eemilytraan",
    "lead": false,
  },
  {
    "firstName": "Albert",
    "lastName": "Rho",
    "title": "Product Manager",
    "image": "https://i.imgur.com/SzgHZRV.jpeg",
    "linkedin": "https://www.linkedin.com/in/albert-rho-956b012b3/",
    "github": "https://github.com/AA5235",
    "lead": false,
  },
  {
    "firstName": "Stephy",
    "lastName": "Zhang",
    "title": "Product Manager",
    "image": "https://i.imgur.com/MJpaXgU.jpeg",
    "linkedin": "https://www.linkedin.com/in/stephy-zhang/",
    "github": "https://github.com/IAmNotStep",
    "lead": false,
  },
  {
    "firstName": "Phu",
    "lastName": "Duong",
    "title": "Developer",
    "image": "https://i.imgur.com/gDVpQDM.jpeg",
    "linkedin": "https://www.linkedin.com/in/phu-duong/",
    "github": "https://github.com/phuhduong",
    "lead": false,
  },
  {
    "firstName": "David",
    "lastName": "Lee",
    "title": "Developer",
    "image": "https://i.imgur.com/pSQSQb8.jpeg",
    "linkedin": "https://www.linkedin.com/in/davidlee08/",
    "github": "https://github.com/dl6549",
    "lead": false,
  },
  {
    "firstName": "Niyathi",
    "lastName": "Kukkapalli",
    "title": "Developer",
    "image": "https://i.imgur.com/eJ8PUh1.jpeg",
    "linkedin": "https://www.linkedin.com/in/niyathi-kukkapalli-9394bb272/",
    "github": "https://github.com/niyathikukkapalli",
    "lead": false,
  },
  {
    "firstName": "Shawn Morgan",
    "lastName": "Li",
    "title": "Developer",
    "image": "https://i.imgur.com/UxTrdzX.jpeg",
    "linkedin": "https://www.linkedin.com/in/shawnli14/",
    "github": "https://github.com/shawnli14",
    "lead": false,
  },
  {
    "firstName": "Grace",
    "lastName": "Ding",
    "title": "Developer",
    "image": "https://i.imgur.com/jtoqTn7.jpeg",
    "linkedin": "https://www.linkedin.com/in/gracetding/",
    "github": "https://github.com/gracetding",
    "lead": false,
  },
  {
    "firstName": "Ella",
    "lastName": "Kim",
    "title": "Developer",
    "image": "https://i.imgur.com/yk1lXeq.jpeg",
    "linkedin": "https://www.linkedin.com/in/kim-ella/",
    "github": "https://github.com/ellajkim",
    "lead": false,
  },
  {
    "firstName": "Luke K.",
    "lastName": "Schreiber",
    "title": "Developer",
    "image": "https://i.imgur.com/XpsEAvn.jpeg",
    "linkedin": "https://www.linkedin.com/in/lukekschreiber/",
    "github": "https://github.com/ls1881",
    "lead": false,
  },
  {
    "firstName": "Gary",
    "lastName": "Yang",
    "title": "Developer",
    "image": "https://i.imgur.com/l1Usnk5.jpeg",
    "linkedin": "https://www.linkedin.com/in/gary-yang-4a5ab9292/",
    "github": "https://github.com/gyang148",
    "lead": false,
  },
  {
    "firstName": "Patrick",
    "lastName": "Fu",
    "title": "Developer",
    "image": "https://i.imgur.com/Ity0JG4.jpeg",
    "linkedin": "https://www.linkedin.com/in/patrickfu25/",
    "github": "https://github.com/trickfu",
    "lead": false,
  },
  {
    "firstName": "Lucy",
    "lastName": "Wang",
    "title": "Developer",
    "image": "https://i.imgur.com/368JX3p.jpeg",
    "linkedin": "https://www.linkedin.com/in/lucy-wang-0097b6229/",
    "github": "https://github.com/lucywangj",
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
    "firstName": "Ruoming",
    "lastName": "Shen",
    "title": "Developer",
    "image": "https://i.imgur.com/r4eYh1P.jpeg",
    "linkedin": "https://www.linkedin.com/in/ruomingshen/",
    "github": "https://github.com/shenruoming",
    "lead": false,
  },
  {
    "firstName": "Eric",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://i.imgur.com/Sk3IU3z.jpeg",
    "linkedin": "https://www.linkedin.com/in/eric--c/",
    "github": "https://github.com/chap2457",
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
    "firstName": "Chloe",
    "lastName": "Lau",
    "title": "Product Manager",
    "image": "https://i.imgur.com/BVrnu64.jpeg",
    "linkedin": "https://www.linkedin.com/in/chloe-hc-lau/",
    "github": "https://github.com/lauechlo",
    "lead": false,
  },
  {
    "firstName": "Allison",
    "lastName": "Lee",
    "title": "Product Manager",
    "image": "https://i.imgur.com/3SPqM7z.jpeg",
    "linkedin": "https://www.linkedin.com/in/allisonelee/",
    "github": "https://github.com/allisonelee",
    "lead": false,
  },
  {
    "firstName": "Helen",
    "lastName": "Hui",
    "title": "Product Manager",
    "image": "https://i.imgur.com/kc4WIyv.jpeg",
    "linkedin": "https://www.linkedin.com/in/helen-hui-7125b929b/",
    "github": "https://github.com/ilovehhhyn",
    "lead": false,
  },
  {
    "firstName": "Zhao Song",
    "lastName": "Zhou",
    "title": "Developer",
    "image": "https://i.imgur.com/JeUh9dc.jpeg",
    "linkedin": "https://www.linkedin.com/in/zhao-song-zhou/",
    "github": "https://github.com/ZhaoSongZh7",
    "lead": false,
  },
  {
    "firstName": "Adam",
    "lastName": "Wahid",
    "title": "Developer",
    "image": "https://i.imgur.com/TFcPAG4.jpeg",
    "linkedin": "https://www.linkedin.com/in/adam-wahid-34898a319/",
    "github": "https://github.com/pentrail",
    "lead": false,
  },
  {
    "firstName": "Prishaa",
    "lastName": "Kapasi",
    "title": "Developer",
    "image": "https://i.imgur.com/mQ47W5o.jpeg",
    "linkedin": "https://www.linkedin.com/in/prishaa-kapasi-87b73825b/",
    "github": "https://github.com/prishaakapasi",
    "lead": false,
  },
  {
    "firstName": "Aayush",
    "lastName": "Mitra",
    "title": "Developer",
    "image": "https://i.imgur.com/JJSV3B5.jpeg",
    "linkedin": "https://www.linkedin.com/in/aayushmitra121/",
    "github": "https://github.com/aayush-mitra",
    "lead": false,
  },
  {
    "firstName": "Alvin",
    "lastName": "Sze",
    "title": "Developer",
    "image": "https://i.imgur.com/mZy9kzp.jpeg",
    "linkedin": "https://www.linkedin.com/in/alvinsze/",
    "github": "https://github.com/asze17",
    "lead": false,
  },
  {
    "firstName": "Christal",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://i.imgur.com/ZshQ3Fj.jpeg",
    "linkedin": "https://www.linkedin.com/in/christalchen/",
    "github": "https://github.com/12chenec",
    "lead": false,
  },
  {
    "firstName": "Erica",
    "lastName": "Lee",
    "title": "Developer",
    "image": "https://i.imgur.com/1nXfGV4.png",
    "linkedin": "https://www.linkedin.com/in/ericayrlee/",
    "github": "https://github.com/ericayrlee",
    "lead": false,
  },
  {
    "firstName": "Anna",
    "lastName": "Lau",
    "title": "Developer",
    "image": "https://i.imgur.com/KQAU12z.jpeg",
    "linkedin": "https://www.linkedin.com/in/anna-lau-605964299/",
    "github": "https://github.com/anna-1au",
    "lead": false,
  },
  {
    "firstName": "Grace",
    "lastName": "Wang",
    "title": "Developer",
    "image": "https://i.imgur.com/0Rt86zU.jpeg",
    "linkedin": "https://www.linkedin.com/in/grace-wang-85b4122a8/",
    "github": "https://github.com/gw4249",
    "lead": false,
  },
  {
    "firstName": "Angela",
    "lastName": "Cai",
    "title": "Developer",
    "image": "https://i.imgur.com/NASRtwq.jpeg",
    "linkedin": "https://www.linkedin.com/in/angcai/",
    "github": "https://github.com/Ang-cai",
    "lead": false,
  },
  {
    "firstName": "Karen",
    "lastName": "Gao",
    "title": "Developer",
    "image": "https://i.imgur.com/dBnfnGt.jpeg",
    "linkedin": "https://www.linkedin.com/in/karen-a-gao/",
    "github": "https://github.com/karengao6",
    "lead": false,
  },
  {
    "firstName": "Chloe",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://i.imgur.com/2nQbCFH.jpeg",
    "linkedin": "",
    "github": "https://github.com/celloii",
    "lead": false,
  },
  {
    "firstName": "Niv",
    "lastName": "Levy",
    "title": "Developer",
    "image": "https://i.imgur.com/XbLGo6d.jpeg",
    "linkedin": "https://www.linkedin.com/in/niv-levy-012685258/",
    "github": "https://github.com/NivLevy-gh",
    "lead": false,
  },
]

const sparksTeam = [
  {
    "firstName": "Issac",
    "lastName": "Li",
    "title": "HoagieSparks Co-Lead",
    "image": "https://i.imgur.com/BG2eTIW.png",
    "linkedin": "https://www.linkedin.com/in/issactli/",
    "github": "https://github.com/issacli-0821",
    "lead": true,
  },
  {
    "firstName": "Spencer",
    "lastName": "Doyle",
    "title": "HoagieSparks Co-Lead",
    "image": "https://i.imgur.com/kUbzXL9.png",
    "linkedin": "https://www.linkedin.com/in/spencer-doyle3/",
    "github": "https://github.com/Spencer04Hire",
    "lead": true,
  },
  {
    "firstName": "Samantha",
    "lastName": "Nosanchuk",
    "title": "Product Manager",
    "image": "https://i.imgur.com/JuX7kjX.jpeg",
    "linkedin": "https://www.linkedin.com/in/samanthanicolenosanchuk/",
    "github": "https://github.com/samanthanosanchuk",
    "lead": false,
  },
  {
    "firstName": "Gauri",
    "lastName": "Kshettry",
    "title": "Product Manager",
    "image": "https://i.imgur.com/61oQkDl.jpeg",
    "linkedin": "https://www.linkedin.com/in/gauri-kshettry-b6a07a1b5/",
    "github": "https://github.com/gk7494",
    "lead": false,
  },
    {
    "firstName": "Ava",
    "lastName": "Fonss",
    "title": "Product Manager",
    "image": "https://i.imgur.com/DoeFeTN.jpeg",
    "linkedin": "https://www.linkedin.com/in/avafonss/",
    "github": "https://github.com/avafonss",
    "lead": false,
  },
  {
    "firstName": "Ryan",
    "lastName": "Jensen",
    "title": "Developer",
    "image": "https://i.imgur.com/WIQMwQK.jpeg",
    "linkedin": "https://www.linkedin.com/in/ryan-avery-jensen/",
    "github": "https://github.com/RyanAJensen",
    "lead": false,
  },
  {
    "firstName": "Timothy",
    "lastName": "Li",
    "title": "Developer",
    "image": "https://i.imgur.com/sLgXMXx.jpeg",
    "linkedin": "https://www.linkedin.com/in/timothy-li-1236722a6/",
    "github": "https://github.com/timothyli1331",
    "lead": false,
  },
    {
    "firstName": "Ray",
    "lastName": "Kong",
    "title": "Developer",
    "image": "https://i.imgur.com/0HMLlyJ.jpeg",
    "linkedin": "https://www.linkedin.com/in/raykongcs/",
    "github": "https://github.com/raykong06",
    "lead": false,
  },
    {
    "firstName": "Maribel",
    "lastName": "Crespo",
    "title": "Developer",
    "image": "https://i.imgur.com/gwB46Iy.jpeg",
    "linkedin": "https://www.linkedin.com/in/maribel-crespo-134a33284/",
    "github": "https://github.com/mar-crespo",
    "lead": false,
  },
  {
    "firstName": "Adam",
    "lastName": "Belouad",
    "title": "Developer",
    "image": "https://i.imgur.com/U5XnPnt.jpeg",
    "linkedin": "https://www.linkedin.com/in/adambelouad/",
    "github": "https://github.com/adambelouad",
    "lead": false,
  },
    {
    "firstName": "Laahini",
    "lastName": "Addagatla",
    "title": "Developer",
    "image": "https://i.imgur.com/YjjHQik.jpeg",
    "linkedin": "https://www.linkedin.com/in/laahini-a-277906271/",
    "github": "https://github.com/Laahini",
    "lead": false,
  },
    {
    "firstName": "Eric",
    "lastName": "Guo",
    "title": "Developer",
    "image": "https://i.imgur.com/zUnSDle.jpeg",
    "linkedin": "https://www.linkedin.com/in/eric-guo1/",
    "github": "https://github.com/ericguo202",
    "lead": false,
  },
    {
    "firstName": "David",
    "lastName": "Liu",
    "title": "Developer",
    "image": "https://i.imgur.com/Jxx7T65.jpeg",
    "linkedin": "https://www.linkedin.com/in/david-liu-71398523a/",
    "github": "https://github.com/davidweizhongliu",
    "lead": false,
  },
  {
    "firstName": "Hellen",
    "lastName": "Luo",
    "title": "Developer",
    "image": "https://i.imgur.com/7tbR6cr.jpeg",
    "linkedin": "https://www.linkedin.com/in/hellen-luo/",
    "github": "https://github.com/hellenlluo",
    "lead": false,
  },
  {
    "firstName": "Charles",
    "lastName": "Muehlberger",
    "title": "Developer",
    "image": "https://i.imgur.com/BJIKCcN.jpeg",
    "linkedin": "https://www.linkedin.com/in/charlesmuehl/",
    "github": "https://github.com/charlespers",
    "lead": false,
  },
  {
    "firstName": "Ethan",
    "lastName": "Wen",
    "title": "Developer",
    "image": "https://i.imgur.com/YYrQYZA.jpeg",
    "linkedin": "https://www.linkedin.com/in/wen-ethan/",
    "github": "https://github.com/wen-ethan",
    "lead": false,
  },
  {
    "firstName": "Supraj",
    "lastName": "Gunda",
    "title": "Developer",
    "image": "https://i.imgur.com/hkHeJkJ.jpeg",
    "linkedin": "https://www.linkedin.com/in/supraj-gunda/",
    "github": "https://github.com/supraj-gunda",
    "lead": false,
  },
]

const hacksTeam = [
    {
      "firstName": "Chloe",
      "lastName": "Lau",
      "title": "Principal",
      "image": "https://i.imgur.com/BVrnu64.jpeg",
      "linkedin": "https://www.linkedin.com/in/chloe-hc-lau/",
      "github": "https://github.com/lauechlo",
      "lead": false,
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
    "firstName": "Cathy",
    "lastName": "Di",
    "title": "Co-President (Spring)",
    "image": "https://i.imgur.com/99D0fOy.png",
    "linkedin": "https://www.linkedin.com/in/catherine-di-559791254/",
    "github": "https://github.com/Maoshu413"
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

const leadership_2023 = [
  {
    "firstName": "Liam",
    "lastName": "Esparraguera",
    "title": "President",
    "image": "https://i.imgur.com/qrQoCgX.jpeg",
    "linkedin": "https://www.linkedin.com/in/liamesparraguera/",
    "github": "https://github.com/lfesp",
  },
  {
    "firstName": "Dennis",
    "lastName": "Jacob",
    "title": "Vice President",
    "image": "https://i.imgur.com/3lQWdhx.jpeg",
    "linkedin": "https://www.linkedin.com/in/dennis-george-jacob/",
    "github": "https://github.com/djapp18",
  },
]

const leadership_2020 = [
  {
    "firstName": "Gagik",
    "lastName": "Amaryan",
    "title": "Founder, President",
    "image": "https://i.imgur.com/Wadtxdd.jpeg",
    "linkedin": "https://www.linkedin.com/in/gagikam/",
    "github": "https://github.com/gagik/",
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
        <Heading size={700} lineHeight="22px" paddingBottom="10px" >{member.firstName} {member.lastName}</Heading>
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
      members.map((member, i: number) => <MemberCard key={i} member={member} foreground={"#F2EDF8"} background={"#57309B"} ignoreTint={ignoreTint} />)
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
      members.map((member, i: number) => <MemberCard key={i} member={member} ignoreTint={false} foreground={"#F8F6FB"} background={app.color} />)
    }
</Pane>

const PastSection = ({ members, year } ) => 
  <Pane
    // width="100%"
    position="relative"
    display="flex"
    flexWrap="wrap"
    backgroundColor="rgba(255,255,255,0.75)"
    borderRadius="10px"
    paddingTop="20px"
    paddingBottom="10px"
    paddingRight="30px"
    marginBottom="20px"
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
      members.map((member, i: number) => <MemberCard key={i} member={member} ignoreTint={true} foreground={"#FCFAFD"} background={"#57309B"} />)
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
            <AppSection members={sparksTeam} app={{ name:"sparks", color:"#3581B8" }} />
            <AppSection members={hacksTeam} app={{ name:"hacks", color:"#4f6077" }} />

            <Heading width="100%" marginLeft={30} marginTop={100} marginBottom={20} size={900}>Past Leadership</Heading>
            <PastSection members={leadership_2024} year="2024-2025" />
            <PastSection members={leadership_2023} year="2023-2024" />
            <PastSection members={leadership_2020} year="2020-2022" />
          </Pane>
        </Pane>
    );
}

export default Members;