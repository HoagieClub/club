import React from 'react';
import { Pane, Heading, Avatar, Text } from 'evergreen-ui'
import style from './members.module.scss'
import linkedinIcon from '../assets/linkedin.svg'
import gitIcon from '../assets/git.svg'

const officers = [
  {
    "firstName": "Hannah",
    "lastName": "Choi",
    "title": "Co-President",
    "image": "https://imgur.com/xbzmDyx.jpeg",
    "linkedin": "https://www.linkedin.com/in/hannah-e-choi/",
    "github": "https://github.com/hannahchoi",
    "coPresident": true
  },
  {
    "firstName": "Emily",
    "lastName": "You",
    "title": "Co-President",
    "image": "https://i.imgur.com/jwAX2NZ.jpeg",
    "linkedin": "https://www.linkedin.com/in/emilyyou220/",
    "github": "https://github.com/emiilyyou",
    "coPresident": true
  },
  {
    "firstName": "Zhao Song",
    "lastName": "Zhou",
    "title": "Treasurer",
    "image": "https://imgur.com/usf8Gam.jpeg",
    "linkedin": "https://www.linkedin.com/in/zhao-song-zhou/",
    "github": "https://github.com/ZhaoSongZh7"
  },
  {
    "firstName": "Chloe",
    "lastName": "Lau",
    "title": "Head of Product",
    "image": "https://imgur.com/uYIDMqa.jpeg",
    "linkedin": "https://www.linkedin.com/in/chloe-hc-lau/",
    "github": "https://github.com/lauechlo"
  },
  {
    "firstName": "Eric",
    "lastName": "Guo",
    "title": "Head of Marketing",
    "image": "https://imgur.com/dYyETCn.jpeg",
    "linkedin": "https://www.linkedin.com/in/eric-guo1/",
    "github": "https://github.com/ericguo202"
  },
  {
    "firstName": "Adam",
    "lastName": "Belouad",
    "title": "Head of Social",
    "image": "https://imgur.com/AxZaRGp.jpeg",
    "linkedin": "https://www.linkedin.com/in/adambelouad/",
    "github": "https://github.com/adambelouad"
  },
]

const mealTeam = [
  {
    "firstName": "Mathias",
    "lastName": "Nguyen-Van-Duong",
    "title": "Team Lead, Product Manager",
    "image": "https://imgur.com/GfmJwSm.jpeg",
    "linkedin": "https://www.linkedin.com/in/mathiasnvd/",
    "github": "https://github.com/matnvd",
    "lead": true,
  },
  {
    "firstName": "Micheal",
    "lastName": "Huang",
    "title": "Team Lead",
    "image": "https://i.imgur.com/uXpqyhZ.jpeg",
    "linkedin": "https://www.linkedin.com/in/micheal-huang-5636252a6/",
    "github": "https://github.com/astoppop",
    "lead": true,
  },
  {
    "firstName": "Berrin",
    "lastName": "Altinsoy",
    "title": "Developer",
    "image": "https://imgur.com/iKeAqWx.jpeg",
    "linkedin": "https://www.linkedin.com/in/berrinaltinsoy/",
    "github": "https://github.com/berrina",
    "lead": false,
  },
  {
    "firstName": "Jonathan",
    "lastName": "Barnett",
    "title": "Developer",
    "image": "",
    "linkedin": "https://www.linkedin.com/in/jonbnett17/",
    "github": "https://github.com/jb6208",
    "lead": false,
  },
  {
    "firstName": "Christal",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://imgur.com/beIz48E.jpeg",
    "linkedin": "https://www.linkedin.com/in/christalchen/",
    "github": "https://github.com/12chenec",
    "lead": false,
  },
  {
    "firstName": "Eric",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://imgur.com/37D825n.jpeg",
    "linkedin": "https://www.linkedin.com/in/ericjiajiechen/",
    "github": "https://github.com/EricChen06",
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
    "firstName": "Benjamin",
    "lastName": "Kaganovich",
    "title": "Product Manager",
    "image": "https://imgur.com/GLwj7wK.jpeg",
    "imagePosition": "center 20%",
    "linkedin": "https://www.linkedin.com/in/benjaminkaganovich/",
    "github": "https://github.com/PowderCake",
    "lead": false,
  },
  {
    "firstName": "Juan Carlos",
    "lastName": "Li Chen",
    "title": "Developer",
    "image": "https://imgur.com/mSzEhP9.jpeg",
    "linkedin": "https://www.linkedin.com/in/juan-li-chen/",
    "github": "https://github.com/juannli",
    "lead": false,
  },
  {
    "firstName": "Xin",
    "lastName": "Lin",
    "title": "Developer",
    "image": "",
    "linkedin": "https://www.linkedin.com/in/xin-lin-8bba1a179/",
    "github": "https://github.com/Xinlin3",
    "lead": false,
  },
  {
    "firstName": "Malachi",
    "lastName": "Noel",
    "title": "Developer",
    "image": "https://imgur.com/MzPafHQ.jpeg",
    "linkedin": "https://www.linkedin.com/in/malachi-noel/",
    "github": "https://github.com/MalachiNoel3",
    "lead": false,
  },
  {
    "firstName": "Ammar",
    "lastName": "Omar",
    "title": "Developer",
    "image": "https://imgur.com/P4wd2cU.jpeg",
    "linkedin": "https://www.linkedin.com/in/ammar-omar-64354b35b/",
    "github": "https://github.com/Mmarz72",
    "lead": false,
  },
  {
    "firstName": "Krisha",
    "lastName": "Pandey",
    "title": "Developer",
    "image": "https://imgur.com/ZYcbTL7.jpeg",
    "linkedin": "https://www.linkedin.com/in/krisha-pandey7/",
    "github": "https://github.com/krishaapandey",
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
    "firstName": "Sevastian",
    "lastName": "Venegas",
    "title": "Developer",
    "image": "https://imgur.com/hCR33Oo.jpeg",
    "linkedin": "https://www.linkedin.com/in/sevastian-venegas/",
    "github": "https://github.com/sevivenegas",
    "lead": false,
  },
  {
    "firstName": "Grace",
    "lastName": "Wang",
    "title": "Developer",
    "image": "https://imgur.com/SLcz0Hb.jpeg",
    "linkedin": "https://www.linkedin.com/in/grace-wang-85b4122a8/",
    "github": "https://github.com/gw4249",
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
    "firstName": "Brooke",
    "lastName": "Xu",
    "title": "Developer",
    "image": "https://imgur.com/TIMnDbO.jpeg",
    "linkedin": "https://www.linkedin.com/in/brooke-xu/",
    "github": "https://github.com/brookex923",
    "lead": false,
  },
  {
    "firstName": "Gloria",
    "lastName": "Yu",
    "title": "Product Manager",
    "image": "https://imgur.com/6fiwcTv.jpeg",
    "linkedin": "",
    "github": "https://github.com/gloria-qyu",
    "lead": false,
  },
    {
    "firstName": "Megan",
    "lastName": "Zhao",
    "title": "Developer",
    "image": "https://imgur.com/kmCvy6y.jpeg",
    "linkedin": "https://www.linkedin.com/in/meganczhao/",
    "github": "https://github.com/meganczhao",
    "lead": false,
  },
]

const planTeam = [
  {
    "firstName": "Gary",
    "lastName": "Yang",
    "title": "Team Lead",
    "image": "https://imgur.com/p5fw3Fi.jpeg",
    "linkedin": "https://www.linkedin.com/in/gary-yang-4a5ab9292/",
    "github": "https://github.com/gyang148",
    "lead": true,
  },
  {
    "firstName": "Rishabh",
    "lastName": "Mohapatra",
    "title": "Team Lead",
    "image": "https://i.imgur.com/fhOcczM.jpeg",
    "linkedin": "https://www.linkedin.com/in/rishabh-mohapatra-8657a2228/",
    "github": "https://github.com/rmohapatra06",
    "lead": true,
  },
  {
    "firstName": "Albert",
    "lastName": "Rho",
    "title": "Team Lead, Product Manager",
    "image": "https://imgur.com/UckYPph.jpeg",
    "linkedin": "https://www.linkedin.com/in/albert-rho-956b012b3/",
    "github": "https://github.com/AA5235",
    "lead": true,
  },
  {
    "firstName": "Stephy",
    "lastName": "Zhang",
    "title": "Team Lead, Product Manager",
    "image": "https://imgur.com/Vk7ShnM.jpeg",
    "linkedin": "https://www.linkedin.com/in/stephy-zhang/",
    "github": "https://github.com/IAmNotStep",
    "lead": true,
  },
  {
    "firstName": "Ishani",
    "lastName": "Bakshi",
    "title": "Developer",
    "image": "https://imgur.com/tLqhht1.jpeg",
    "linkedin": "https://www.linkedin.com/in/ishani-bakshi",
    "github": "github.com/Ishani-B",
    "lead": false,
  },
  {
    "firstName": "Jackson",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://imgur.com/W3J1pvG.jpeg",
    "linkedin": "https://www.linkedin.com/in/jacksonc2630/",
    "github": "https://github.com/Jacksonc2630",
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
    "firstName": "Phu",
    "lastName": "Duong",
    "title": "Developer",
    "image": "https://imgur.com/5rZUc0t.jpeg",
    "linkedin": "https://www.linkedin.com/in/phu-duong/",
    "github": "https://github.com/phuhduong",
    "lead": false,
  },
  {
    "firstName": "Alishah",
    "lastName": "Fatima",
    "title": "Developer",
    "image": "https://imgur.com/oQTKNYB.jpeg",
    "linkedin": "https://www.linkedin.com/in/alishah-fatima/",
    "github": "https://github.com/ali-tima",
    "lead": false,
  },
  {
    "firstName": "Patrick",
    "lastName": "Fu",
    "title": "Developer",
    "image": "https://imgur.com/DXTD3sj.jpeg",
    "linkedin": "https://www.linkedin.com/in/patrickfu25/",
    "github": "https://github.com/trickfu",
    "lead": false,
  },
  {
    "firstName": "Grace",
    "lastName": "Hua",
    "title": "Developer",
    "image": "https://imgur.com/fC2X6ee.jpeg",
    "linkedin": "https://www.linkedin.com/in/grace-hua-50ab1240a/",
    "github": "https://github.com/gracie-wo",
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
    "firstName": "Sophia",
    "lastName": "Kuncoro",
    "title": "Developer",
    "image": "https://imgur.com/Mr6Nztg.jpeg",
    "linkedin": "https://www.linkedin.com/sophia-kuncoro",
    "github": "https://www.github.com/skuncoro1",
    "lead": false,
  },
  {
    "firstName": "Anna",
    "lastName": "Lau",
    "title": "Developer",
    "image": "https://imgur.com/r6YCiYk.jpeg",
    "linkedin": "https://www.linkedin.com/in/anna-lau-605964299/",
    "github": "https://github.com/anna-1au",
    "lead": false,
  },
  {
    "firstName": "David",
    "lastName": "Lee",
    "title": "Developer",
    "image": "https://imgur.com/4VgrTG0.jpeg",
    "linkedin": "https://www.linkedin.com/in/davidlee08/",
    "github": "https://github.com/dl6549",
    "lead": false,
  },
  {
    "firstName": "Max",
    "lastName": "Marshall",
    "title": "Product Manager",
    "image": "https://imgur.com/Bobli4F.jpeg",
    "linkedin": "https://www.linkedin.com/in/max-marshal-91582637a",
    "github": "https://github.com/mm1528",
    "lead": false,
  },
  {
    "firstName": "Abhinav",
    "lastName": "Pathak",
    "title": "Developer",
    "image": "",
    "linkedin": "",
    "github": "https://github.com/abhpollo",
    "lead": false,
  },
  {
    "firstName": "Tayeb",
    "lastName": "Rahman",
    "title": "Developer",
    "image": "https://imgur.com/IsPYiWM.jpeg",
    "linkedin": "https://www.linkedin.com/in/tayeb-rahman/",
    "github": "https://github.com/tayeb123123",
    "lead": false,
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
    "firstName": "Andrew",
    "lastName": "Xia",
    "title": "Developer",
    "image": "https://imgur.com/NrJWbZX.jpeg",
    "linkedin": "https://www.linkedin.com/in/andrew-y-xia/",
    "github": "https://github.com/andrew-y-xia",
    "lead": false,
  },
  {
    "firstName": "Ariel",
    "lastName": "Yuan",
    "title": "Developer",
    "image": "https://imgur.com/Uo49a0s.jpeg",
    "linkedin": "https://www.linkedin.com/in/ariel-yuan-1591a723b/",
    "github": "https://github.com/Ariel-azhe",
    "lead": false,
  },
]

const mailTeam = [
  {
    "firstName": "Alvin",
    "lastName": "Sze",
    "title": "Team Lead",
    "image": "https://i.imgur.com/mZy9kzp.jpeg",
    "linkedin": "https://www.linkedin.com/in/alvinsze/",
    "github": "https://github.com/asze17",
    "lead": true,
  },
  {
    "firstName": "Zhao Song",
    "lastName": "Zhou",
    "title": "Team Lead",
    "image": "https://imgur.com/usf8Gam.jpeg",
    "linkedin": "https://www.linkedin.com/in/zhao-song-zhou/",
    "github": "https://github.com/ZhaoSongZh7",
    "lead": true,
  },
  {
    "firstName": "Calvin",
    "lastName": "Andoh",
    "title": "Developer",
    "image": "https://imgur.com/YBOQurC.jpeg",
    "linkedin": "https://www.linkedin.com/in/calvin-andoh-7a83481b5/",
    "github": "https://github.com/cfandoh123/",
    "lead": false,
  },
  {
    "firstName": "Roaa",
    "lastName": "Ben Aiad",
    "title": "Product Manager",
    "image": "https://imgur.com/xQ1d48P.jpeg",
    "linkedin": "https://www.linkedin.com/in/roaa-ben-aiad/",
    "github": "https://github.com/Operation-Panda",
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
    "firstName": "Chloe",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://i.imgur.com/HoM0S1V.jpeg",
    "linkedin": "https://www.linkedin.com/in/chloe-chen-7388243b2/",
    "github": "https://github.com/celloii",
    "lead": false,
  },
  {
    "firstName": "Jessica",
    "lastName": "Chen",
    "title": "Developer",
    "image": "https://imgur.com/vDHIKsj.jpeg",
    "linkedin": "",
    "github": "https://github.com/stxrrymuffin",
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
    "firstName": "Ruzanna",
    "lastName": "Gaboyan",
    "title": "Developer",
    "image": "https://imgur.com/vj9oRgH.jpeg",
    "linkedin": "https://www.linkedin.com/in/ruzanna-gaboyan/",
    "github": "https://github.com/xsollwa",
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
    "firstName": "Siddharth",
    "lastName": "Gupta",
    "title": "Developer",
    "image": "https://imgur.com/u4mBEfO.jpeg",
    "linkedin": "https://www.linkedin.com/in/siddharthguptari/",
    "github": "https://github.com/Windshield-Viper",
    "lead": false,
  },
  
  {
    "firstName": "Allison",
    "lastName": "Lee",
    "title": "Product Manager",
    "image": "https://imgur.com/IYdwYoZ.jpeg",
    "linkedin": "https://www.linkedin.com/in/allisonelee/",
    "github": "https://github.com/allisonelee",
    "lead": false,
  },
  {
    "firstName": "Chloe",
    "lastName": "Lei",
    "title": "Developer",
    "image": "https://imgur.com/ar4FsZy.jpeg",
    "linkedin": "www.linkedin.com/in/chloelei-",
    "github": "https://github.com/leolhcc",
    "lead": false,
  },
  {
    "firstName": "Henry",
    "lastName": "Li",
    "title": "Product Manager",
    "image": "https://imgur.com/WXufgrn.jpeg",
    "linkedin": "https://www.linkedin.com/in/henryli0508/",
    "github": "https://github.com/hhenryli",
    "lead": false,
  },
  {
    "firstName": "Ethan",
    "lastName": "Mao",
    "title": "Developer",
    "image": "https://imgur.com/3NjtTs4.jpeg",
    "linkedin": "https://www.linkedin.com/in/ethan-mao-74360b329/",
    "github": "https://www.github.com/ethanm9720",
    "lead": false,
  },
  {
    "firstName": "Andrew",
    "lastName": "Ni",
    "title": "Developer",
    "image": "https://imgur.com/QcxPwnB.jpeg", 
    "linkedin": "https://www.linkedin.com/in/andrew-ni-9aa199321",
    "github": "https://github.com/andrewkni",
    "lead": false,
  },
  {
    "firstName": "Lisa",
    "lastName": "Ochieng",
    "title": "Developer",
    "image": "https://imgur.com/soel07I.jpeg",
    "linkedin": "https://www.linkedin.com/in/lisa-ochieng-5096b0261/",
    "github": "https://github.com/lisaochieng",
    "lead": false,
  },
  {
    "firstName": "Tara",
    "lastName": "Prakash",
    "title": "Product Manager",
    "image": "https://imgur.com/Y8Q0IfQ.jpeg",
    "linkedin": "www.linkedin.com/in/tara-prakash-3a1018208",
    "github": "https://github.com/taraprakash06",
    "lead": false,
  },
  {
    "firstName": "Mustafa",
    "lastName": "Tajammul",
    "title": "Developer",
    "image": "",
    "linkedin": "https://www.linkedin.com/in/mustafatajammul/",
    "github": "https://github.com/mt7636",
    "lead": false,
  },
    {
    "firstName": "Richard",
    "lastName": "Tran",
    "title": "Developer",
    "image": "https://imgur.com/asYKvbH.jpeg",
    "linkedin": "www.linkedin.com/in/richard-vi-tran",
    "github": "https://github.com/richardisnthere",
    "lead": false,
  },
  {
    "firstName": "Cade",
    "lastName": "Waters",
    "title": "Developer",
    "image": "https://imgur.com/mRIT2FM.jpeg",
    "linkedin": "https://www.linkedin.com/in/cade-waters-a2840a350/",
    "github": "https://github.com/Steampwred",
    "lead": false,
  },
  {
    "firstName": "Rhianna",
    "lastName": "Zhang",
    "title": "Developer",
    "image": "https://imgur.com/JFJSEzW.jpeg",
    "linkedin": "https://www.linkedin.com/in/rhianna-zhang-648998278/",
    "github": "https://github.com/rhiannazhang",
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
  
]

const helpTeam = [
  {
    "firstName": "Maribel",
    "lastName": "Crespo",
    "title": "Team Lead",
    "image": "https://i.imgur.com/gwB46Iy.jpeg",
    "linkedin": "https://www.linkedin.com/in/maribel-crespo-134a33284/",
    "github": "https://github.com/mar-crespo",
    "lead": true,
  },
  {
    "firstName": "Ray",
    "lastName": "Kong",
    "title": "Team Lead",
    "image": "https://imgur.com/QgF5bTc.jpeg",
    "linkedin": "https://www.linkedin.com/in/raykongcs/",
    "github": "https://github.com/raykong06",
    "lead": true,
  },
  {
    "firstName": "Eric",
    "lastName": "Guo",
    "title": "Team Lead",
    "image": "https://imgur.com/dYyETCn.jpeg",
    "linkedin": "https://www.linkedin.com/in/eric-guo1/",
    "github": "https://github.com/ericguo202",
    "lead": true,
  },
  {
    "firstName": "Adam",
    "lastName": "Belouad",
    "title": "Developer",
    "image": "https://i.imgur.com/AxZaRGp.jpeg",
    "linkedin": "https://www.linkedin.com/in/adambelouad/",
    "github": "https://github.com/adambelouad",
    "lead": false,
  },
  {
    "firstName": "Henry",
    "lastName": "Cantor",
    "title": "Developer",
    "image": "https://imgur.com/jiFAWwh.jpeg",
    "linkedin": "https://www.linkedin.com/in/henry-cantor123/",
    "github": "https://github.com/Henry-Cantor",
    "lead": false,
  },
    {
    "firstName": "Adele",
    "lastName": "Ding",
    "title": "Developer",
    "image": "https://imgur.com/McUJrkX.jpeg",
    "linkedin": "https://www.linkedin.com/in/adele-ding-6ba4a0228/",
    "github": "https://github.com/adeleding8",
    "lead": false,
  },
    {
    "firstName": "Jon",
    "lastName": "Dong",
    "title": "Developer",
    "image": "https://imgur.com/qJcbEzm.jpeg",
    "linkedin": "https://www.linkedin.com/in/jon-dong-876725291/",
    "github": "https://github.com/jondong520520",
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
    "firstName": "Akshita",
    "lastName": "Khanna",
    "title": "Developer",
    "image": "https://imgur.com/hTZ5EE3.jpeg",
    "linkedin": "https://www.linkedin.com/in/akshita-khanna-b66643385/",
    "github": "https://www.linkedin.com/in/akshita-khanna-b66643385/",
    "lead": false,
  },
  {
    "firstName": "Kazel",
    "lastName": "Li",
    "title": "Product Manager",
    "image": "https://imgur.com/m1rXVgr.jpeg",
    "linkedin": "https://www.linkedin.com/in/kazel-li-a4084934a/",
    "github": "https://github.com/SjKazel",
    "lead": false,
  },
  {
    "firstName": "Timothy",
    "lastName": "Li",
    "title": "Developer",
    "image": "https://imgur.com/W67E0rw.jpeg",
    "linkedin": "https://www.linkedin.com/in/timothy-li-1236722a6/",
    "github": "https://github.com/timothyli1331",
    "lead": false,
  },
  {
    "firstName": "Joshua",
    "lastName": "Namkoong",
    "title": "Product Manager",
    "image": "https://imgur.com/ZI3TLdq.jpeg",
    "linkedin": "https://www.linkedin.com/in/joshuanamko/",
    "github": "https://github.com/jnamkoong9",
    "lead": false,
  },
  {
    "firstName": "Nikita",
    "lastName": "Shevyakov",
    "title": "Developer",
    "image": "https://imgur.com/2SzBiYu.jpeg",
    "linkedin": "https://www.linkedin.com/in/nikita-shevyakov-55605b281/",
    "github": "https://github.com/Nikitaoverlord",
    "lead": false,
  },
  {
    "firstName": "Jaydon",
    "lastName": "Sun",
    "title": "Developer",
    "image": "https://imgur.com/H3PXyWL.jpeg",
    "linkedin": "https://www.linkedin.com/in/jaydon-sun/",
    "github": "https://github.com/jaydonsun24",
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
    "firstName": "Faylinn",
    "lastName": "Wong",
    "title": "Developer",
    "image": "https://i.imgur.com/pZxmcGJ.jpeg",
    "linkedin": "https://www.linkedin.com/in/faylinn-w-005890238/",
    "github": "https://github.com/FaylinnW",
    "lead": false,
  },
  {
    "firstName": "Angie",
    "lastName": "Yao",
    "title": "Developer",
    "image": "https://imgur.com/OWebEVK.jpeg",
    "linkedin": "https://www.linkedin.com/in/angie-fyao/",
    "github": "https://github.com/angie4218",
    "lead": false,
  },
  {
    "firstName": "Wilson",
    "lastName": "Yi",
    "title": "Developer",
    "image": "https://imgur.com/NpgAt8b.jpeg",
    "linkedin": "https://www.linkedin.com/in/wilson-yi-456212328/",
    "github": "https://github.com/VisualInitial07",
    "lead": false,
  },

]

const mealExchangeTeam = [
  {
    "firstName": "Alvin",
    "lastName": "Sze",
    "title": "Team Lead",
    "image": "https://i.imgur.com/mZy9kzp.jpeg",
    "linkedin": "https://www.linkedin.com/in/alvinsze/",
    "github": "https://github.com/asze17",
    "lead": true,
  },
    {
    "firstName": "Eric",
    "lastName": "Guo",
    "title": "Software Engineer",
    "image": "https://imgur.com/dYyETCn.jpeg",
    "linkedin": "https://www.linkedin.com/in/eric-guo1/",
    "github": "https://github.com/ericguo202",
    "lead": false,
  },
  {
    "firstName": "Allison",
    "lastName": "Lee",
    "title": "Product Manager",
    "image": "https://imgur.com/IYdwYoZ.jpeg",
    "linkedin": "https://www.linkedin.com/in/allisonelee/",
    "github": "https://github.com/allisonelee",
    "lead": false,
  },
  {
    "firstName": "Adam",
    "lastName": "Belouad",
    "title": "Product Manager",
    "image": "https://imgur.com/AxZaRGp.jpeg",
    "linkedin": "https://www.linkedin.com/in/adambelouad/",
    "github": "https://github.com/adambelouad",
    "lead": false,
  },
  {
    "firstName": "Chloe",
    "lastName": "Lau",
    "title": "Product Manager",
    "image": "https://i.imgur.com/uYIDMqa.jpeg",
    "linkedin": "https://www.linkedin.com/in/chloe-hc-lau/",
    "github": "https://github.com/lauechlo",
    "lead": false,
  },
]

const hacksTeam = [
    {
      "firstName": "Chloe",
      "lastName": "Lau",
      "title": "Principal",
      "image": "https://i.imgur.com/uYIDMqa.jpeg",
      "linkedin": "https://www.linkedin.com/in/chloe-hc-lau/",
      "github": "https://github.com/lauechlo",
      "lead": false,
    },
    /*
    {
    "firstName": "Kevin",
    "lastName": "Liu",
    "title": "Principal",
    "image": "https://imgur.com/6YLSXtX.jpeg",
    "linkedin": "https://www.linkedin.com/in/kevin-liu-2495b6205/",
    "github": "https://github.com/Kevin-Liu-01",
    "lead": false,
  },
      */
]

const marketingTeam = [
    {
      "firstName": "Max",
      "lastName": "Marshall",
      "title": "Email",
      "image": "https://imgur.com/Bobli4F.jpeg",
      "linkedin": "https://www.linkedin.com/in/max-marshal-91582637a",
      "github": "https://github.com/mm1528",
      "lead": false,
    },
    {
      "firstName": "Joshua",
      "lastName": "Namkoong",
      "title": "Video",
      "image": "https://imgur.com/ZI3TLdq.jpeg",
      "linkedin": "https://www.linkedin.com/in/joshuanamko/",
      "github": "https://github.com/jnamkoong9",
      "lead": false,
    },
    {
      "firstName": "Rhianna",
      "lastName": "Zhang",
      "title": "Instagram, Flyers",
      "image": "https://imgur.com/JFJSEzW.jpeg",
      "linkedin": "https://www.linkedin.com/in/rhianna-zhang-648998278/",
      "github": "https://github.com/rhiannazhang",
      "lead": false,
    },
    /*
    {
    "firstName": "Kevin",
    "lastName": "Liu",
    "title": "Principal",
    "image": "https://imgur.com/6YLSXtX.jpeg",
    "linkedin": "https://www.linkedin.com/in/kevin-liu-2495b6205/",
    "github": "https://github.com/Kevin-Liu-01",
    "lead": false,
  },
      */
]

const leadership_2025 = [
  {
    "firstName": "Issac",
    "lastName": "Li",
    "title": "Co-President, HoagieHelp Lead, HoagiePlan Lead",
    "image": "https://imgur.com/P6u05wi.png",
    "linkedin": "https://www.linkedin.com/in/issactli/",
    "github": "https://github.com/issacli-0821",
  },
  {
    "firstName": "Spencer",
    "lastName": "Doyle",
    "title": "Co-President, HoagieHelp Lead, HoagieMail Lead",
    "image": "https://i.imgur.com/kUbzXL9.png",
    "linkedin": "https://www.linkedin.com/in/spencer-doyle3/",
    "github": "https://github.com/Spencer04Hire"
  },
  {
    "firstName": "Gary",
    "lastName": "Smith",
    "title": "Head of Product",
    "image": "https://imgur.com/DisNeSP.jpeg",
    "linkedin": "https://www.linkedin.com/in/garydavidsmith/",
    "github": "https://github.com/Gary-D-Smith"
  },
  {
    "firstName": "Jenny",
    "lastName": "Fan",
    "title": "HoagieMail Lead",
    "image": "https://i.imgur.com/grwgWFZ.jpeg",
    "linkedin": "https://www.linkedin.com/in/jennyfan04/",
    "github": "https://github.com/jfmath04",
  },
  {
    "firstName": "Erica",
    "lastName": "Lee",
    "title": "Social Chair",
    "image": "https://imgur.com/566oSUx.png",
    "linkedin": "https://www.linkedin.com/in/ericayrlee/",
    "github": "https://github.com/ericayrlee"
  },
]

const leadership_2024 = [
  {
    "firstName": "George",
    "lastName": "Chiriac",
    "title": "Co-President, Apps Director",
    "image": "https://imgur.com/lU6VN5V.png",
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
    "image": "https://imgur.com/AZX2IQZ.png",
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
    "image": "https://imgur.com/7dC05GN.jpeg",
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
    "image": "https://imgur.com/8pZV9yO.jpeg",
    "linkedin": "https://www.linkedin.com/in/gagikam/",
    "github": "https://github.com/gagik/",
  },
]


const MemberCard = ({ member, foreground, background, ignoreTint, isPast = false }) => 
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
      backgroundColor={member.coPresident ? `color-mix(in srgb, ${background} 15%, ${foreground})` : ignoreTint ? foreground : member.lead ? `color-mix(in srgb, ${background} 15%, ${foreground})` : "#F2EDF8"}
      width="330px"
      borderRadius="100px"
      padding="12px"
      paddingBottom="8px"
      position="relative"
      // border={member.lead ? `1px solid ${background}` : undefined}
      boxShadow={member.coPresident ? `inset 0 0 0 3px #6C47AE` : member.lead ? `inset 0 0 0 3px ${background}90` : undefined}
      zIndex={2}
    >
      <Pane float="left">
        <Avatar className={style.avatar} style={{ '--avatar-position': member.imagePosition } as React.CSSProperties} color="purple" size={100} src={member.image} name={member.firstName + " " + member.lastName} />
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
        <Text width="150px" size={isPast ? 400 : 500}>{member.title}</Text>
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
      <span style={{ color: "black" }}>{app.prefix ?? "hoagie"}</span>
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
      members.map((member, i: number) => <MemberCard key={i} member={member} ignoreTint={true} foreground={"#FCFAFD"} background={"#57309B"} isPast={true} />)
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
            <AppSection members={helpTeam} app={{ name:"help", color:"#EA4040" }} />
            <AppSection members={mealExchangeTeam} app={{ prefix:"meal", name:"exchange", color:"#DF5413" }} />
            <AppSection members={hacksTeam} app={{ name:"hacks", color:"#4f6077" }} />
            <AppSection members={marketingTeam} app={{ name:"marketing", color:"#57309B" }} />

            <Heading width="100%" marginLeft={30} marginTop={100} marginBottom={20} size={900}>Past Leadership</Heading>
            <PastSection members={leadership_2025} year="2025-2026" />
            <PastSection members={leadership_2024} year="2024-2025" />
            <PastSection members={leadership_2023} year="2023-2024" />
            <PastSection members={leadership_2020} year="2020-2022" />
          </Pane>
        </Pane>
    );
}

export default Members;