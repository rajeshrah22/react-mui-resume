
// MUI: Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SnapchatIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Twitter';
import GitHub from '@mui/icons-material/GitHub';
import Handshake from '@mui/icons-material/Handshake';
import { BiLogoJava, BiLogoJavascript } from 'react-icons/bi';
import { SiSpring, SiMysql, SiGooglemaps } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';


// Data object that contains all of the data for the template.
const data = {
    profile: {
        name: "Rahul Rajesh",
        address: "C Java Place, Lowell, MA 07646",
        avatar: "https://mui.com/static/images/avatar/1.jpg",
        contacts: [
            { icon: PhoneIcon, label: "Phone", value: "(774) 486-9335" },
            { icon: EmailIcon, label: "Email", value: "rahul_rajesh@student.uml.edu" },
            { icon: HomeIcon, label: "Address", value: "123 Main St, City, Country" }
        ],
        skills: [
            { category: "Programming Languages:", skills: "Java, JavaScript, Python, C++" },
            { category: "Frameworks Worked With:", skills: "ReactJS, Spring Boot, JUnit" },
            { category: "Operating Systems:", skills: "Windows" },
        ],
        socialMedia: [
            { icon: LinkedInIcon },
            { icon: GitHub },
            { icon: Handshake },
        ],
        education: [
            {
              degree: "Bachelor of Computer Science",
                date: "Sep 2022 - April 2023",
                school: "Dalhousie University - Halifax, NS, Canada",
                gpa: "Overall GPA: 4.02/4.3, GPA in Major: NA"
            },
            {
                degree: "B.S. in Computer Science",
                date: "Sept 2023 - Anticipated August 2025",
                school: "University of Massachusetts Lowell - Lowell, MA (Transfer)",
                gpa: "Overall GPA: NA, GPA in Major: NA"
            },
        ],
        experience: [
            {
                title: "Simple Bank MySQL app with Spring REST API",
                date: "Feb 2023 - March 2023",
                description: "This Spring Boot REST API manages user data and login credentials, providing CRUD endpoints for users and logins. Information is stored in MySQL tables.",
                link: "https://github.com/rajeshrah22/banking-app-databse-app",
                icons: [ { icon: BiLogoJava }, { icon: SiSpring }, { icon: SiMysql } ]
            },
            {
              title: "BusApp",
              date: "Jan 2023 - Feb 2023",
              description: "Started because I read a challenge. Trying to use the nextBus xml feed to get bus agency/routes data to display real time bus information with Google Maps API",
              link: "https://github.com/rajeshrah22/BusApp",
              icons: [ { icon: BiLogoJavascript }, { icon: AiFillHtml5 }, { icon: DiCss3 }, { icon: SiGooglemaps }]
            }
        ],
    },

    posts: {
        name: "Sara Friends",
        avatar: "https://mui.com/static/images/avatar/1.jpg",
        background_image: "https://source.unsplash.com/random?wallpapers",
        post_data: [
            {
                id: 1,
                timestamp: "2 hours ago",
                description: "Enjoying a sunny day at the beach!",
                image: "https://source.unsplash.com/random?wallpapers"
            },
            {
                id: 2,
                timestamp: "5 hours ago",
                description: "Just finished reading this amazing book.",
                type: "note",
            },
            {
                id: 3,
                timestamp: "2 hours ago",
                description: "Enjoying a sunny day at the beach!",
                image: "https://source.unsplash.com/random?wallpapers"
            },
            {
                id: 4,
                timestamp: "5 hours ago",
                description: "Just finished reading this amazing book.",
                type: "note",
            },
            {
                id: 5,
                author: "John Doe",
                avatar: "/path-to-avatar1.jpg",
                timestamp: "2 hours ago",
                description: "Enjoying a sunny day at the beach!",
                image: "https://source.unsplash.com/random?wallpapers"
            },
        ],
    }
};

// Exporting the data object so that the App.js file can import it.
export default data;