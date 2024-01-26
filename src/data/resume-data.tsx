import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";
import { YoutubeIcon } from "../components/icons/YoutubeIcon";

export const RESUME_DATA = {
  name: "Htain Lin Shwe",
  initials: "HLS",
  location: "Bolingbrook,IL",
  locationLink: "https://www.google.com/maps/place/Bolingbrook+IL",
  about:
    "iOS Developer ❤️ Swift UI & UIKit",
  summary:
    "iOS Developer with 9 years of experience, specializing in Swift and SwiftUI. Build applications using the MVVM architecture and also proficient with MVC. Can construct Auto Layout with Storyboard in UIKit and have a solid understanding of Test-Driven Development (TDD).",
  avatarUrl: "https://avatars.githubusercontent.com/u/135177?v=4",
  personalWebsiteUrl: "https://blog.saturngod.net",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/saturngod",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/htainlinshwe/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/saturngod",
        icon: XIcon,
      },
      {
        name: "Youtube",
        url: "https://x.com/saturngod",
        icon: YoutubeIcon,
      },
    ],
  },
  education: [
    {
      school: "Maharishi International University",
      degree: "Master Degree",
      start: "2023",
      end: "Current",
    },
    {
      school: "University Of Computer Studies, Yangon",
      degree: "Bachelor Degree",
      start: "2004",
      end: "2007",
    },
  ],
  certificate: [
    {
      name: "AWS Developer Associated",
      organization: "Amazon Web Service",
      issue: "Oct 2023",
      expire: "Oct 2026",
      url: "https://www.credly.com/badges/c11671f0-7d92-4427-98f4-80b168a6cbdd"
    },
    {
      name: "Professional Scrum Master™ I (PSM I) ",
      organization: "Scrum.org",
      issue: "June 2022",
      expire: "N/A",
      url: "https://www.credly.com/badges/40de8fee-4c1e-4a19-a30b-b353fa55c49a"
    }
  ],
  work: [
    {
      company: "Credit Advisor",
      link: "https://advisor.credit/",
      badges: ["Remote"],
      title: "iOS Developer",
      location: "United State",
      start: "Jan 2024",
      end: "Current",
      description:
        "Working and maintain the iOS app for Credit Advisor.",
    },
    {
      company: "COMQUAS",
      link: "https://www.comquas.com",
      badges: [],
      title: "Team Lead",
      location: "Yangon, Myanmar",
      start: "Nov 2016",
      end: "Dec 2022",
      description:
        "I was responsible for developing the client's app, employing a range of technologies including Swift for iOS native development, Flutter for cross-platform functionality, and PHP with the Laravel framework for backend development and Restful API integration. Additionally, we utilized GitLab for automated deployment processes. Notably, our team successfully created the Mahar mobile app and designed the associated infrastructure. Throughout these endeavors, I gained valuable experience working with Digital Ocean and AWS platforms.",
    },
    {
      company: "2c2p",
      link: "https://www.2c2p.com/",
      badges: [],
      title: "iOS Developer",
      location: "Singapore",
      start: "Oct 2012",
      end: "Sep 2016",
      description:
        "I spearheaded the creation of the 2c2p iOS SDK and the development of the Easy Bill app. My expertise extends to crafting payment-related apps and wallet applications. I collaborated closely with the backend team to seamlessly integrate Restful APIs between iOS and the backend systems. Noteworthy contributions include the successful creation of the AGD Bank Wallet iOS, MCB Virtual Card iOS App, and Near Me Wallet App, among others.",
    },
    {
      company: "Edenpod",
      link: "",
      badges: [],
      title: "iOS Developer",
      location: "Singapore",
      start: "Oct 2010",
      end: "Sep 2012",
      description:
        "I specialized in developing iPhone apps and crafting server-side applications for mobile platforms. I also had the opportunity to work on mobile gaming apps using cocos2d. During this time, I primarily utilized Objective-C for iOS app development. One of my notable accomplishments was creating a drawing app for an education project, which allowed students to record and share their creations. This project showcased my ability to blend technology with education to deliver innovative solutions.",
    },
    {
      company: "Point Star",
      link: "https://www.point-star.com/",
      badges: [],
      title: "Web Developer",
      location: "Singapore",
      start: "Oct 2009",
      end: "Sep 2010",
      description:
        "I have leveraged PHP, WordPress, and Magento to drive successful projects. Additionally, I have taken on the responsibility of Ubuntu Server setup for VPS (Virtual Private Server) deployment. Moreover, I have utilized AWS (Amazon Web Services) for several projects, harnessing its capabilities to enhance project outcomes.",
    },
    {
      company: "Alpha Mandalay",
      link: "",
      badges: [],
      title: "Web Developer",
      location: "Yangon, Myanmar",
      start: "Oct 2007",
      end: "Sep 2009",
      description:
        "Building website with HTML, CSS, Javascript and jQuery. Wordpress and Joomla for the CMS solutions.",
    },
    
  ],
  skills: [
    "Swift",
    "Objective-C",
    "SwiftUI",
    "UIKit",
    "Flutter",
    "PHP",
    "Laravel",
  ],
  projects: [
    {
      title: "Mahar",
      techStack: [
        "Swift",
        "UIKit",
        "AVPlayer",
        "RESTFul",
      ],
      description: "Burmese video streaming platform",
      link: {
        label: "App Store",
        href: "https://apps.apple.com/us/app/mahar-mobile/id1437972773",
      },
    },
    {
      title: "ABC Pay",
      techStack: ["Swift", "UIKit", "RESTFul", "SwiftCrypto"],
      description: "Wallet and billing service for ABC Convenience Store",
      link: {
        label: "App Store",
        href: "https://apps.apple.com/us/app/abc-pay/id1519941921",
      },
    },
    {
      title: "ShweNote",
      techStack: ["Flutter"],
      description:
        "Summary for the books that can save for reading the whole book. Audio books are also available.",
      link: {
        label: "App Store",
        href: "https://apps.apple.com/us/app/shwenote-30-min-book-summary/id1547929493",
      },
    },
    {
      title: "My2C2PSDK",
      techStack: ["Objective-C", "OpenSSL"],
      description:
        "SDK for 2c2p Payment Gateway"
    },
    {
      title: "AGD Bank Union Pay",
      techStack: ["Objective-C" , "UIKit"],
      description:
        "Union Pay Debit card app that allow user to pay with their card with QR at the merchant.",
    },
    {
      title: "NearMe",
      techStack: ["Objective-C", "UIKit"],
      description: "B2B Wallet and Billing Services. Store can sell the mobile topup, gift cards and billing services.",
    },
    {
      title: "Citizen Card (Bank)",
      techStack: [
        "Objective-C",
        "UIKit",
        "Websocket",
      ],
      description:
        "Master prepaid card app. That allow user to apply card and see their card transactions. Support the real time chat system for customer service.",
    },
    {
      title: "iAccept",
      techStack: [
        "Objective-C",
        "UIKit",
        "EMV (TLV)"
      ],
      description:
        "Read the EMV Data from the card reader and that allow merchant can accept payment with master/visa card from iPhone.",
    },
    {
      title: "Drawing Edu App",
      techStack: ["Objective-C","UIKit","CoreAnimation","CoreGraphic"],
      description:
        "Allow teacher to record the drawing and replay to the client app.",
    },
    {
      title: "GoinOut",
      techStack: ["Objective-C", "UIKit", "PHP" , "MySQL"],
      description:
        "Nighclub Social Network iPhone app.",
    },
    {
      title: "Singapore Lottery Ticket",
      techStack: ["Objective-C","UIKit","PHP", "MySQL"],
      description:
        "For Singapore sweep that allow push notification when result come out. Can check the results date also.",
    },
    {
      title: "Newton Apple",
      techStack: ["Cocos2d", "Objective-C", "C++"],
      description:
        "iOS games that you need to click on the apple for saving the Newton. Mini games are included like Zombie Newton, apple & snake.",
    },
  ],
} as const;
