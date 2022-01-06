import { v4 as uuidv4 } from 'uuid';
import PredixImg from '../images/predix.jpg'
import CAPImg from '../images/cap.JPG'
import ImgDetectionImg from '../images/image_detection.jpg'
import EmailBotImg from '../images/email_bot.png'
import MedCareImg from '../images/medcare.JPG'

const projectList = [
  {
    id: uuidv4(),
    firstName: 'Predix',
    lastName: 'DB',
    desc:
      'Get ready for an seamless media consumption experience.\nPredixDB is an online platform which assists users to keep track of the media that they have already watched, currently watching, or planning to watch next. It also provides personalized recommendations based on user interests.',
    img: PredixImg,
    tech: ['django', 'html', 'css', 'javascript', 'ai ml', 'python'],
    liveLink: 'https://predixdb.herokuapp.com/',
    githubLink: 'https://github.com/skshamagarwal/Predix'
  },
  {
    id: uuidv4(),
    firstName: 'HealthCare ',
    lastName: 'CAP',
    desc:
      'Cardiovascular Ailment Prediction - an awesome Heart Attack Prediction application using Machine Learning Techniques!',
    img: CAPImg,
    tech: ['django', 'html', 'css', 'javascript', 'ai ml', 'python'],
    liveLink: 'https://mycap.herokuapp.com/',
    githubLink: 'https://github.com/skshamagarwal/CAP'
  },
  {
    id: uuidv4(),
    firstName: 'Image ',
    lastName: 'Detection',
    desc:
      'Machine Learning Model that detect objects in an image using VGG Transfer Learning. It uses CNN Technique to identify and train upon the dataset.',
    img: ImgDetectionImg,
    tech: ['ai ml', 'python'],
    liveLink: 'https://github.com/skshamagarwal/Reverse-Image-CNN/blob/main/VGG16%20Model%20Training.ipynb',
    githubLink: 'https://github.com/skshamagarwal/Reverse-Image-CNN'
  },
  {
    id: uuidv4(),
    firstName: 'Email ',
    lastName: 'BOT',
    desc:
      'Python Script that automates the process of sending emails manually. The bot accepts your voice commands and sends or copies email to clipboard on the user\'s behalf.',
    img: EmailBotImg,
    tech: ['python'],
    liveLink: 'https://github.com/skshamagarwal/EmailBot',
    githubLink: 'https://github.com/skshamagarwal/EmailBot'
  },
  {
    id: uuidv4(),
    firstName: 'MED',
    lastName: 'CARE',
    desc:
      'Mobile Application for Consulting Doctors, keeping Track of Health Checkup, mark Important Dates and Appointments, even purchase medicines... All in one Applcation for user\'s daily Health Care Routine.',
    img: MedCareImg,
    tech: ['flutter', 'dart'],
    liveLink: 'https://github.com/skshamagarwal/MedCare',
    githubLink: 'https://github.com/skshamagarwal/MedCare'
  },
];

export default projectList;
