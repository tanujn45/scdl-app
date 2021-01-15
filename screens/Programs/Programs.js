import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import Header from "../../Components/Header";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import ProgramDetails from "./ProgramDetails";

const Program = ({ navigation }) => {
  /*
  const [data, setData] = useState([
    {
      key: "1",
      image: require("../../assets/programs/team.png"),
      title: "Management",
    },
    {
      key: "2",
      image: require("../../assets/programs/graphic-design.png"),
      title: "Design",
    },
    {
      key: "3",
      image: require("../../assets/programs/data.png"),
      title: "Information Technology",
    },
    {
      key: "4",
      image: require("../../assets/programs/user.png"),
      title: "Education, Humanities",
    },
  ]);
  */

  const [data, setData] = useState([
    {
      key: "1",
      image: require("../../assets/programs/team.png"),
      title: "Management",
      subDetails: [
        {
          course: "Post Graduate Certificate in Finance",
          subCourses: [
            {
              subCourse: "Taxation Laws",
              overview:
                "Post Graduate Certificate in Finance (Taxation Laws) is designed for people who wish to expand their proficiency & blend it with the wide tax assessment structure. Post Graduate Certificate in Finance (Taxation Laws) provides the opportunity to learn Indian taxation system and related laws in detail. Taxation is an important part of the work of many tax planners and advisers therefore sound knowledge of laws and procedures become must. Post Graduate Certificate in Finance (Taxation Laws) caters to the same. The PG Certificate is designed by an Academic Board of distinguished tax practitioners and academicians in the areas of taxation. Holders of the PG Certificate shall be eligible to provide tax plan, advice as tax consultant and file various returns. This PG Certificate includes enactments with recent changes in Income Tax Act and Goods and Services Tax Act, 2017. This program is ideal for individuals seeking career as Tax Consultants, Tax Analyst etc",
              careerOpp:
                "After completing this diploma course a candidate can work as Tax consultant, Tax Accountants, Tax Analyst, Business Tax / Income Tax / Property Tax Advisor",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is one year.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for one and half academic year.",
                },
              ],
              programStruct: {
                credit: "40",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Managerial Accounting",
                      "Introduction to Taxation in India",
                      "Income Tax Act, 1961",
                      "Submission I",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Direct Tax (Application & Procedure)",
                      "GST I",
                      "GST II",
                      "Submission II",
                    ],
                  },
                ],
              },
              curriculum:
                "http://www.scdl.net/pdf/curriculumPDF/PGCF[TL]2020.pdf#toolbar=0&navpanes=0&scrollbar=0",
            },
            {
              subCourse: "Management Accounting",
              overview:
                "PG Certificate in Management Accounting is designed to give knowledge regarding various areas of Accounting. As Management Accountant, one can work for public companies, private companies and government agencies at all levels.The most fundamental skills, which are needed in order to be a Management Accountant, are strong knowledge of management accounting concepts, updates and principles. Management accountants need a solid foundation in hard-core accounting skills, including knowledge of basic accounting, Generally Accepted Accounting Principles (GAAP) and basic tax principles. This program helps to build these skills by giving the student multiple perspectives towards management accounting.Post Graduate Certificate in Finance (Taxation Laws) is designed for people who wish to expand their proficiency & blend it with the wide tax assessment structure. Post Graduate Certificate in Finance (Taxation Laws) provides the opportunity to learn Indian taxation system and related laws in detail. Taxation is an important part of the work of many tax planners and advisers therefore sound knowledge of laws and procedures become must. Post Graduate Certificate in Finance (Taxation Laws) caters to the same. The PG Certificate is designed by an Academic Board of distinguished tax practitioners and academicians in the areas of taxation. Holders of the PG Certificate shall be eligible to provide tax plan, advice as tax consultant and file various returns. This PG Certificate includes enactments with recent changes in Income Tax Act and Goods and Services Tax Act, 2017. This program is ideal for individuals seeking career as Tax Consultants, Tax Analyst etc",
              careerOpp:
                "Account Professional, Accounts Manager, Cost Planner, IFRS Expert.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is one year.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for one and half academic year.",
                },
              ],
              programStruct: {
                credit: "40",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Cost Planning and Analysis",
                      "Budgeting and Management Control",
                      "Group Financial Statements",
                      "Strategic Management Accounting",
                      "Project Financial Management",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Corporate Governance",
                      "Strategic Finance",
                      "Research Methodology",
                      "Project",
                    ],
                  },
                ],
              },
              curriculum:
                "http://www.scdl.net/pdf/curriculumPDF/PGCF[MA]2020.pdf#toolbar=0&navpanes=0&scrollbar=0",
            },
          ],
        },
        {
          course: "Certificate Program",
          subCourses: [
            {
              subCourse: "Intellectual Property Rights and Patent Law",
              overview:
                "The Corporates and the Start-ups today are investing a lot of money in the development of Intellectual Property which has made the knowledge of Laws related to Intellectual Property Rights indispensable.The Certificate Course in IPR & Patent Law has been designed to meet the specific needs of the students, industry professionals and research professionals who wish to equip themselves with thorough knowledge of laws related to Intellectual Property Rights.This is a hands-on course on Intellectual Property Rights and Patents related laws which shall give an outline of the laws and practices related to Intellectual Property and Patent practices in India.The objectives of the certificate course are to provide an overview of different types of Intellectual Property Rights, the legal aspects of the Intellectual Property Rights along with the contemporary issues and the recent developments.",
              careerOpp:
                "Lucrative career avenues in various global and national organizations to handle their Intellectual property issues.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students appearing for their final year degree course and are yet to pass the final year examination can also apply, exam may also apply, subject to completion of graduation in current academic year and within the time period specified by SCDL",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is six months.",
                },
                {
                  point: "2",
                  content: "The registration period is valid for one year.",
                },
              ],
              programStruct: {
                credit: "N/A",
                semester: [
                  {
                    sem:
                      "Module 1: Introduction to Intellectual Property Rights",
                    subjects: [
                      "Concept of Intellectual Property Rights",
                      "Harmonisation of IP Laws by International Agencies-1",
                      "Harmonisation of IP Laws by International Agencies-2",
                    ],
                  },
                  {
                    sem:
                      "Module 2:Laws related to Trademark, Industrial Design and Geographical Indications",
                    subjects: [
                      "The Paris Convention",
                      "Indian Trademark Law",
                      "Industrial Design Law and Geographical Indications",
                    ],
                  },
                  {
                    sem:
                      "Module 3: Law Relating to Protection and Recognition of Patent",
                    subjects: [
                      "Introduction to Patent Law in India",
                      "Patentee Rights and Infringement",
                      "Patent Procedure in India",
                    ],
                  },
                  {
                    sem: "Module 4:Copyright Law",
                    subjects: [
                      "Berne Convention",
                      "Indian Copyright Law",
                      "Intellectual Property Rights in Cyberspace",
                    ],
                  },
                ],
              },
              curriculum:
                "http://www.scdl.net/pdf/curriculumPDF/CCIPR&PL2020.pdf#toolbar=0&navpanes=0&scrollbar=0",
            },
            {
              subCourse: "Virtual Workplace Management",
              overview:
                "The virtual workplace is a platform that presents a unique set of opportunities and challenges for the modern business. In a comprehensively connected world, remote working is becoming the new norm across countless sectors and industries. Affordable hardware, reliable connections and the enormous convenience of remote working create a genuinely appealing approach to business management. Successful virtual workplace implementation also has the potential to minimise costs, maximise output and generally drive efficiency to new heights.Virtual Workplaces now days are a reality, in which employees operate remotely from each other and their managers. There are sound business reasons to establish a workplace. Virtual teams and teleworks are examples of such arrangements. Taken these steps in improved productivity, profits and customer services. Virtual organizations are multisite, multi-organizational and dynamic. Many challenges are there in managing the virtual teams. The use of new technology and tools provides a competitive advantage.",
              careerOpp:
                "Candidates will benefit from an increasingly-relevant skills set, with a variety of career prospects to explore.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students appearing for their final year degree course and are yet to pass the final year examination can also apply, exam may also apply, subject to completion of graduation in current academic year and within the time period specified by SCDL",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is six months.",
                },
                {
                  point: "2",
                  content: "The registration period is valid for one year.",
                },
              ],
              programStruct: {
                credit: "N/A",
                semester: [
                  {
                    sem: "Module 1: The Virtual Workplace",
                    subjects: [
                      "Defining the virtual workplace",
                      "Creating virtual workplace programs",
                      "Building virtual teams",
                    ],
                  },
                  {
                    sem: "Module 2:Choosing the Virtual Team",
                    subjects: [
                      "Technology tips and tricks/ Digital workplace services",
                      "Managing virtual teams",
                      "Working with cross –cultural teams",
                    ],
                  },
                  {
                    sem: "Module 3: Leading the Virtual Team",
                    subjects: [
                      "Turning virtual workplace into reality",
                      "Virtual Leadership strategies",
                      "Conflict management / stress management at workplace",
                    ],
                  },
                  {
                    sem: "Module 4:Technologies in Virtual Workplace",
                    subjects: [
                      "Technologies supporting virtual workplace",
                      "Team building activities",
                      "Advantages and disadvantages of virtual teams",
                    ],
                  },
                ],
              },
              curriculum:
                "http://www.scdl.net/pdf/curriculumPDF/CCVWM2020.pdf#toolbar=0&navpanes=0&scrollbar=0",
            },
            {
              subCourse: "AWS Solutions Architect – Associate",
              overview:
                "SCDL is offering the cloud architecting course in collaboration with AWS Academy which showcases how some AWS customers have designed their infrastructures and the strategies and services that they implemented. Cloud computing architecture refers to the components and subcomponents required for cloud computing. These components consist of a front end platform, back end platform, a cloud based delivery and a network. Combined, these components make up cloud computing architecture. Cloud solutions design is based on architectural procedures and methods that have been developed over last 20+ years. Cloud Architecting is the emerging trend nowadays. As architectural solutions can differ depending on industry, type of applications and size of business, this course emphasizes best practices for the AWS Cloud and it recommends various design patterns to help you think through the process of architecting optimal IT solutions on AWS. Cloud Architecting covers the fundamentals of building IT infrastructure on Amazon Web Services or AWS. The course is designed to teach solutions architects how to optimize the use of the AWS Cloud by understanding AWS services and how these services fit into cloud-based solutions. It also provides a brief overview of cloud concepts, AWS core services, security, architecture, pricing and support which is the foundation for Cloud Architecting.",
              careerOpp:
                "A cloud architect is responsible for converting technical requirements of a project into architecture and design that will guide the final product. Often the cloud architects are responsible for bridging the gap between complex business problems and solutions in the cloud. Other members of a technical team, including DevOps engineers and developers work with cloud architect to ensure that right technologies are being built.",
              eligibility: [
                {
                  point: "1",
                  content: "XII Standard pass-out in any discipline.",
                },
                {
                  point: "2",
                  content:
                    "Diploma holder / Bachelor’s Degree Holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "3",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is six months.",
                },
                {
                  point: "2",
                  content: "The registration period is valid for one year.",
                },
              ],
              programStruct: {
                credit: "N/A",
                semester: [
                  {
                    sem: "Module",
                    subjects: [
                      "Cloud Concepts Overview",
                      "Cloud Economics and Billing",
                      "AWS Global Infrastructure Overview",
                      "Cloud Security",
                      "Networking and Content Delivery",
                      "Compute",
                      "Storage",
                      "Database",
                      "Cloud Architecture",
                      "Automatic Scaling and Monitoring",
                      "Designing Your Environment",
                      "Designing for High Availability I",
                      "	Designing for High Availability II",
                      "Automating Your Infrastructure",
                      "Decoupling Your Infrastructure",
                      "	Designing Web-Scale Media",
                      "Well Architected Framework",
                      "Well-Architected Pillar 1: Operational Excellence",
                      "Well-Architected Pillar 2: Security",
                      "	Well-Architected Pillar 3: Reliability",
                      "	Well-Architected Pillar 4: Performance Efficiency",
                      "Well-Architected Pillar 5: Cost Optimization",
                      "Troubleshooting",
                      "Design Patterns and Sample Architectures",
                      "	Lab (Go Green Insurance Company)",
                    ],
                  },
                ],
              },
              curriculum:
                "http://www.scdl.net/pdf/curriculumPDF/CCAWSSAA.pdf#toolbar=0&navpanes=0&scrollbar=0",
            },
            {
              subCourse: "Autonomous Program",
              overview:
                "SCDL offers a range of single courses with multi-entry facility and credit banking. Students can enroll for single courses offered by SCDL with a view to develop area-specific skills and obtain subjectspecific knowledge.The credits accumulated by a student can be transferred to other SCDL programs, providing them flexible learning pathways. Students can enroll for one or more (maximum of 4) single courses offered by SCDL. However, students who have registered for any other programs with SCDL cannot enroll for a single course that is already included in their program curriculum. Students are required to fill separate admission forms (and go through all procedures for admission) for each course they wish to enroll for.",
              careerOpp:
                "Different courses have different opportunities in various sectors.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is three months.",
                },
                {
                  point: "2",
                  content: "The registration period is valid for six months.",
                },
              ],
              programStruct: {
                credit: "N/A",
                semester: [
                  {
                    sem: "List of Single Courses",
                    subjects: [
                      "Advanced Instructional Design",
                      "Cloud Computing",
                      "Customer Relationship Management",
                      "Cyber Law in Corporate Practice",
                      "Financial Management",
                      "HR Development and Training",
                      "Human Resource Management",
                      "Industrial Relations and Labour Laws",
                      "Instructional Design",
                      "Marketing Management",
                      "Materials Management",
                      "Performance and Potential Management",
                      "Production or Operations Management",
                      "Project Management (IT)",
                      "Sales and Distribution Management",
                      "	Strategic Management",
                      "Research Methodology and Statistical Quantitative Methods",
                      "Machine Learning with R and Python",
                      "Introduction to R Programming",
                      "Python Programming",
                    ],
                  },
                ],
              },
              curriculum:
                "http://www.scdl.net/pdf/curriculumPDF/SC2020.pdf#toolbar=0&navpanes=0&scrollbar=0",
            },
          ],
        },
        {
          course: "Post Graduation Diploma",
          subCourses: [
            {
              subCourse: "International Business",
              overview:
                "The international business environment is dynamic. A new and very different market reality is emerging. Students of today need to adopt flexible patterns of thinking and behaviour to succeed as the managers of tomorrow. Post Graduate Diploma in International Business program has been designed to explore in detail the nature and implications of these changes and provide students with the skills and mind-sets that will allow them to operate effectively within and lead the organisations of the future. The participants learn export-import policies, documentation, international finance, in addition to the functioning of various financial institutes and banking. The program emphasises the contemporary issues including international commercial law and business environment. Knowledge of India's foreign trade along with international marketing prepares the students to strike the right note when they enter the demanding world of corporate management.",
              careerOpp:
                "Business Development Manager, International Marketing Manager, International Financial Analyst, International Product Manager, Procurement Manager in an Import-Export House etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Principles and Practices of Management",
                      "Organizational Behaviour",
                      "Management Accounting",
                      "Managerial Economics",
                      "Business Communication",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "International Economics",
                      "International Business Management",
                      "Economic Environment and Business",
                      "Management Information Systems",
                      "Research Methodology and Statistical Quantitative Methods",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "International Commercial Law",
                      "International Trade Logistics",
                      "Financial Institutions and Banking",
                      "Strategic Management",
                      "Foreign Exchange Management",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "International Marketing",
                      "Marketing Research",
                      "Exim Policies and Procedures",
                      "International Finance",
                      "Corporate Governance",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Banking and Financial Services  ",
              overview:
                "Increased complexity and changes in Banking and Finance business demand an entire new generation of banking and finance professionals. Post Graduate Diploma in Banking and Financial Services is innovative, comprehensive and prepares future banking and finance professionals. This program not only provides participants the knowledge of operational aspects of banking and finance but also builds on their managerial and technical skills. There is an emphasis on contemporary practices such as Micro Finance and Global perspective in Banking and Finance, which will give insights into the current industry trends.",
              careerOpp:
                "Banking Officer and Bank Manager in Nationalized, Private and Foreign Banks, Financial Analyst, Financial Planner, Portfolio Manager, Treasurer, Controller, Financial Manager, Accountant, Financial Agents etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Principles and Practices of Management",
                      "Indian Banking and Financial System",
                      "Management Accounting",
                      "Managerial Economics",
                      "Marketing of Banking Services",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Financial Management",
                      "Management Information System and Technology in Banking",
                      "Global Banking and Finance",
                      "Financial Institutions and Markets",
                      "Banking Regulations and Laws",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Capital Market",
                      "Accounting Systems and Financial Analysis",
                      "Management of Bank",
                      "Security Analysis and Portfolio Management",
                      "Bank Lending Policies and Procedures",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Macro Economics",
                      "Micro Financing",
                      "Risk Management",
                      "Rural and Co-Operative Banking",
                      "Research Methodology and Statistical Quantitative Methods and Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Human Resource Mgmt.",
              overview:
                "PGDHRM focuses on developing HR leaders by stimulating critical thinking and focusing on innovations in this field. The program offers an extensive curriculum. Students learn right from the basic functions such as Human Resource Planning to HR Audit and Organisational Developments. Emphasis is laid on the remuneration strategies, motivation of staff through Training and Development, strategies and processes for effective resolution of Industrial conflict. All these are packaged to ensure that the students learn all the important aspects of HRM. The program aims to prepare students for a variety of roles including HR generalist or specialist in compensation/benefits, global human resources, employment relations and employee development.",
              careerOpp:
                "HR Officer, Senior HR Officer, Administrative Head, Placement Officer, Recruitment Coordinator, Recruiter, HR Consultant, HR Manager, Training and Development Officer, Learning and Development Officer etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      " Human Resource Management",
                      "Human Resource Development",
                      "Industrial and Labour Economics",
                      "Leadership and Personality Development",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Performance and Potential Management",
                      "Labour Welfare and Industrial Safety",
                      "Labour Laws - I",
                      "Compensation Management",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Employee Relations",
                      "Organisational Development",
                      "Human Resource Information System",
                      "Labour Laws - II",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "TQM and HR Audit",
                      "Research Methodology and Statistical Quantitative Methods",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Insurance Business Mgmt",
              overview:
                "Today's dynamic insurance sector offers excellent employment opportunities. Besides the Government organisations and several private insurance companies have entered the insurance market. This has increased the demand of professionally qualified personnel. PGDIBM aims at creating professionals who can carve a rewarding and promising career in the insurance industry. PGDIBM explores the multi-faceted world of insurance management and reflects on the growing interplay between insurance, risk management and financial services. The curriculum has been designed and developed in collaboration with industry experts and academicians. The program offers specialisation in General Insurance as well as Life Insurance with emphasis on legal aspects and risk management involved in the insurance sector.",
              careerOpp:
                "Insurance Consultant, Business Development Manager, Insurance Agent, Development Officer in an Insurance Organisation.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Principles and Practices of Management",
                      "Principles of Insurance Including IT",
                      "Indian Insurance Environment",
                      "Business Communication",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Practices of General Insurance Including Insurance Accounting",
                      "Property and Liability Insurance",
                      "Marketing of General Insurance",
                      "Risk Management in General Insurance",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Consumer Behaviour",
                      "CRM in Service Industry",
                      "Legal Aspects of Insurance",
                      "Personal & Health Insurance",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Financial Institutions and Markets",
                      "Research Methodology and Statistical Quantitative Methods",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Retail Mgmt",
              overview:
                "Retail is a major sector of the Indian and Global economy. Retailers today deal with challenges like increased levels of competition, growth of the internet, new forms of technology and satisfying consumer demands. As a result, retail organisations require leaders with the necessary skills to address these challenges. Post Graduate Diploma in Retail Management covers a range of retail and distribution channels issues like service operations, consumer behaviour, sales and marketing management, Brand management and supply chain issues related to the business. With an emphasis on retail management and marketing topics, this program explores key developments and trends in this area.",
              careerOpp:
                "Stores Manager, Manager Operations, Senior Sales Manager, etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Principles and Practices of Management",
                      "Retail Management – I",
                      "Consumer Behaviour",
                      "Services Marketing",
                      "Sales Management",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Marketing Management",
                      "Retail Management – II",
                      "Management Information Systems",
                      "Concepts in Supply Chain Management",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Brand Management",
                      "Merchandise Management",
                      "Customer Relationship Management",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Advertising and Public Relations",
                      "Research Methodology",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Customer Relationship Mgmt",
              overview:
                "Post Graduate Diploma in Customer Relationship Management program aims to address the growth in service industry and the need for leadership skills in services marketing and managing the customer supplier relationship. The program curriculum is designed to equip students with knowledge and skills related to services marketing, customer service, customer retention / relationship management, call centre management, account management, service design and service quality management. Emphasis is laid on customer satisfaction and loyalty, data management, sales force automation and the current and future status of CRM.",
              careerOpp:
                "Manager-Client Servicing, Customer Relationship Manager, CRM Specialist, Relationship Manager, Product Manager, etc. ",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Principles and Practices of Management",
                      "Marketing Management",
                      "Customer Relationship Management",
                      "Consumer Behaviour",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Advanced CRM",
                      "Sales and Distribution Management",
                      "Services Marketing",
                      "CRM in Service Industry",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Business Communication",
                      "B2B Markets and CRM",
                      "Marketing Research",
                      "E-Business",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Consumer Protection Act, 1986",
                      "Research Methodology",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Supply Chain Mgmt",
              overview:
                "In the recent years, Supply Chain, Transportation, Procurement and Logistics have played an increasingly important role within the corporate world. It holds the potential for creating value for the end customer and differentiating the company strategically in terms of services rendered. SCM and logistics have now become the pulse of business. PGDSCM program provides an opportunity for vertical growth. Students acquire professional competencies in materials management & logistics, leading to an improvement in their job skills and self-enrichment. The program begins by laying the ground work for a comprehensive understanding of what supply chain management is and how it can be effectively used to increase an organisation's efficiency and profitability. The program further examines different Supply Chain Management strategies and methods of forecasting demand, aggregate planning and network design. The program spans through the whole gamut of Supply Chain strategies, processes, operations management and imbibes in the learner professional skills to add value to the organisation.",
              careerOpp:
                "Purchase Manager, Strategic Planner,Purchase Analyst/Assistant, Materials Analyst, Materials Manager, Procurement Manager, Supply Chain Manager, Commodity Manager, Inventory Manager, Strategic Sourcing Manager, Operations Manager, Sourcing Manager, Warehousing Manager, etc. ",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Project Management (Operations)",
                      "Logistics and Distribution Management",
                      "Concepts in Supply Chain Management",
                      "Legal Aspects of Supply Chain Management",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Strategic Supply Chain Management",
                      "E-Business",
                      "Entrepreneurship Development and Management",
                      "International Supply Chain Management",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Warehouse Management",
                      "Green Logistics and Supply Chains",
                      "Supply Chain Risk Management",
                      "Research Methodology",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Knowledge Management In Supply Chain",
                      "Supply Chain Performance Management",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Export and Import Mgmt",
              overview:
                "Post Graduate Diploma in Export and Import Management gives a foundation to participants who seek a career in international markets and trade. The program focuses on international business practices, customs and policies and international issues such as International Supply Chain Management, Marine Insurance, Export Import Documentation and Procedures, International Trade Barriers and Risk Management. The program also includes a project on EXIM, which will give the student an opportunity to learn the practical aspects of international trade. With the rapid growth of international trade in various countries, several highly rewarding job opportunities have opened up for participants trained in export import transactions. Some of the sectors that offer ample scope in export management include trading houses, export departments of companies, development authorities and commodity boards, marine insurance companies, export processing zones, export promotion councils and export oriented units, among other organisations.",
              careerOpp:
                "Exporter, Importer, Deemed Exporter, International Supplier, International Logistics Provider, Entrepreneur, Risk Manager, Government Official in Export Promotion Councils, Trading Houses, Commodity Boards, etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Principles and Practices of Management",
                      "EXIM Policy Framework",
                      "International Business Environment",
                      "International Marketing",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "International Supply Chain Management",
                      "Procedures and Practices in EXIM Management",
                      "Export Import Regulations",
                      "Risk Management in Import Export Business",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Export Import Promotional Schemes in India",
                      "Foreign Exchange Management",
                      "International Trade Logistics",
                      "Entrepreneurship Development and Management",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Insurance and Inspection in Foreign Trade",
                      "Research Methodology",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Business and Corporate Laws",
              overview:
                "To deal with the new challenges in the corporate world, legal professionals with the ability to unravel legal complexities are in demand. Understanding the laws of the land is important to avoid time-consuming and expensive litigations. PGDBCL program aims at imparting knowledge of various businesses and corporate legislations. PGDBCL program covers various facets of business and corporate legislation and is a judicious mixture of the two. It includes recent acts such as the Limited Liability Partnership Act, 2008, the Companies Act, 2013 with recent amendments and the Insolvency and Bankruptcy Code, 2016. Besides, the program familiarises students with international business laws and laws related to banking. Keeping in focus the needs of the open economy, this program includes areas such as mergers and acquisitions, foreign direct investment, due diligence procedure, alternative dispute resolution mechanisms etc.",
              careerOpp:
                "Legal Officer, Compliance Officer, Consultant, Assistant Manager, Legal Manager, as also a wide range of opportunities in Legal Process Outsourcing (LPO), Knowledge Process Outsourcing (KPO) and in various law firms.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Law of Contracts",
                      "Corporate Law",
                      "Laws Related to Banking",
                      "Consumer Protection Act, 1986 and Competition Act, 2002",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Corporate Restructure Law",
                      "Corporate Finance Law",
                      "Dispute Resolution Law",
                      "Insolvency and Bankruptcy",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Corporate Governance",
                      "Intellectual Property Law",
                      "IT Act (Cyber Context)",
                      "Labour Law",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Taxation Law",
                      "Research Methodology",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Personnel & HRM [LL]",
              overview:
                "This Diploma Program provides an opportunity for the students to receive advance instructions in the organisational relationship and interplay between existing labour-related legislation and changing industrial scenario. The diploma is especially designed to meet the needs of those whose prior education has been in a field other than law and who would like to supplement their skills with in-depth knowledge of labour laws. The program is ideal for the students seeking employment in the field of HR across industry sectors.",
              careerOpp:
                "HR Officer, Employee Relation / Industrial Relation Manager, Labour Laws Consultant, Labour Welfare In charge etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Personnel Administration",
                      "Laws Relating to Industrial Relation",
                      "Employee Relations",
                      "Submission - I",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Laws Related to Social Security",
                      "Laws Related to Specific Industries",
                      "Human Resource Management",
                      "Submission - II",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Organisational Behaviour",
                      "Laws Related to Employment and Training",
                      "Laws Related to Wages",
                      "Submission - III",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Labour Welfare",
                      "Laws Related to Equality and Empowerment of Woman and Laws Related to Deprived and Disadvantaged Section of the Society",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Project Management",
              overview:
                "Project Management is the art and science of converting Vision into Reality and Abstract into Concrete. Project Management addresses the issues of change and transition throughout the project life cycle starting from need awareness, initiation, planning, implementation, control and closing in the most effective manner. This program is based on the Project Management Body of Knowledge (PMBOK) released by PMI. Students will learn five basic process i.e. Initiating, Planning, Executing, Monitoring & Controlling and Project Closing. The program intends to cover the overview of ten knowledge areas that are typical in almost all projects.",
              careerOpp:
                "Qualified project managers are in high demand in today’s workplace in both large and small organizations. It opens opportunities in a wide range of industries like construction, automotive, information technology,pharmaceutical , telecommunications, oil, gas and petrochemical, finance, government and all project based organizations.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Principles and Practices of Management",
                      "Production / Operations Management",
                      "Management Information Systems",
                      "Introduction to Project Management",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Operations Strategy",
                      "Project Scope Management",
                      "Project Schedule Management",
                      "Project Cost Management",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Project Quality Management",
                      "Project Human Resource and Project Communication Management",
                      "Project Risk Management",
                      "Project Procurement Management",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Introduction to Agile Management",
                      "Project Integration Management",
                      "Project Stakeholder Management",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Energy Management (Renewable Energy)",
              overview:
                "The renewable energy sector is growing at an exponential rate creation new job opportunities across the globe. This program aims to develop competency in the areas of energy policy making, financing, energy management, auditing and infrastructure provisioning. Newer renewable electricity sources are targeted to grow massively by the end of this decade, including a more than doubling of India's large wind power capacity and an almost more than 15 fold increase in solar power from April 2016 levels. It is a unique program that provides an in-depth understanding of various fields including solar, wind energy, biogas & bio mass etc. Through this course, the students are introduced to the alternate forms of energy such as tidal energy, solar energy, Wind energy, etc. along with the insights on waste heat recovery. The program also touches upon the recent topics as Smart Grid. Aspiring eligible candidates who possess strong analytical skills and want to study the energy production techniques in order to implement renewable energy strategies and policies. Candidates willing to step into the challenging world of renewable energy working sector.",
              careerOpp:
                "Business Development Manager (Renewable Energy), Consultant, Chief Investment Officer in Renewable Energy, Project Manager Energy etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Conventional Energy and Environmental Implications",
                      "Fundamentals of Heat and Electricity",
                      "Renewable Energy Sources",
                      "Business Law",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Government Policies and Regulations",
                      "Renewable Energy Technologies",
                      "Project Management (Operations)",
                      "Renewable Energy Economics",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Shared Energy Infrastructure",
                      "Introduction to Energy Management and Auditing",
                      "Environmental & Health Impact of Energy Use",
                      "Energy Conservation & Management",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Fundamentals of Solar Power",
                      "Integration of Renewable Systems",
                      "Project",
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      key: "2",
      image: require("../../assets/programs/graphic-design.png"),
      title: "Information Technology",
      subDetails: [
        {
          course: "Post Graduation Diploma",
          subCourses: [
            {
              subCourse: "Information Technology",
              overview:
                "The IT industry has emerged as one of the fastest growing sectors of the Indian economy. Given the unprecedented growth of IT industry, organisations require manpower that is proficient in both information technology as well as business aspect. A successful IT enterprise will have the right mix of sterling technology systems and proven business strategies. Developing systems requires extensive communication between technical developers, business managers and users. With the rapid growth in international trade in various countries, Post Graduate Diploma in IT emphasises on utilising information technologies for productivity and competitiveness, prepares you to succeed in your IT management career. The program's unique focus on the management of technology effectively prepares students for successful careers in the dynamic and fast-paced information technology marketplace. The curriculum produces students to succeed in IT management positions, which are projected to be amongst the fastest growing through the next decade.",
              careerOpp:
                "Project Manager, IT Manager, System Analyst, Business Analyst, Technical Leaders, Software Consultant etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Principles and Practices of Management",
                      "Business Communication",
                      "Information Technology Concepts",
                      "Database Management Systems",
                      "Algorithms and Programming Concepts",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Business Requirement Analysis",
                      "Project Management (IT)",
                      "Business Applications and ERP",
                      "Software Engineering with UML",
                      "Data Warehousing and Data Mining",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Software Quality Management",
                      "Introduction to Data Science, Machine Learning and AI",
                      "E-Business",
                      "Information Security Management",
                      "Software Documentation",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Current Trends in IT",
                      "Business Process Modeling",
                      "Cloud Computing",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Technical Writing in Business Mgmt.",
              overview:
                "In recent years, with tremendous growth in trade and commerce coupled with technological advancements, communication expertise gives an extra edge over others. Technology has become an essential part of business. Technical communication is considered to be a professional task to be performed by people who specialise in the domain. This gives rise to a definite need for specialists in Technical Writing. PGDTWBM program prepares such personnel and thereby caters to the need of the industry. This program aims at acquainting and preparing the learners for the theoretical and practical aspects of Technical Writing. The program focuses on producing competent technical communicators who would prove to be proactive and responsible for working at every level of profession. This program even aims at developing creativity, eye for detail and process discipline among the students.",
              careerOpp:
                "Technical Writer, Online Technical Writer, Business Writer, Technical Web Writer, Usability Tester and Information Designer etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "English Grammar",
                      "Introduction to Technical Communication",
                      "Information Development Life Cycle-I",
                      "Information Development Life Cycle-II",
                      "Technical Writing Style and Editing,",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Technical Communication Software Tools",
                      "Advanced Concepts in Technical Communication",
                      "Technical Communication Project Management",
                      "Principles and Practices of Management",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Business Communication",
                      "Instructional Design for Business Communication",
                      "Introduction to Creative Writing in Business Communication",
                      "Advanced Documentation Types and Processes",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Advanced Technical Writing Tools",
                      "Research Methodology",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Data Science",
              overview:
                "Data Science is an interdisciplinary field about scientific methods, processes and systems to extract knowledge or insights from data in various forms. This course equips learner with all the conceptual and technical skills required for the ultimate position in the analytics industry. The course introduces the learner to business analytics using the most in-demand analytics technologies like R and Python and teaches implementation of various data science concepts such as data exploration, visualisation, and hypothesis testing. Special focus has been placed on Machine Learning techniques used for regression, classification and clustering. PG Diploma in Data Science is designed for the people who wish to expand their proficiency in Data Science.",
              careerOpp:
                "Data Scientist, Statistics Consultants and Business Analyst etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Basics of Statistics",
                      "Introduction to Data Science",
                      "Data Structures and Algorithms",
                      "Introduction to R Programming",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Python Programming",
                      "Advanced Statistics",
                      "Big Data with Data Warehousing and Data Mining",
                      "Submission I",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "NOSQL Database",
                      "Data Visualisation",
                      "Machine Learning with R and Python",
                      "Ethical and Legal Issues in Data Science",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Emerging Trends in Data Science",
                      "Submission II",
                      "Project",
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          course: "Post Graduation Certificate",
          subCourses: [
            {
              subCourse: "Digital Marketing",
              overview:
                "Digital media includes web-based & mobile based technologies which turn communication into interactive dialogue among organisations, communities & individuals. Knowledge and understanding the scope of digital marketing have become necessary for every marketing professional. In today's world it is a driver for a company's bottom line by using cutting edge techniques and platforms to market products and acquire newer users and capture wider markets. PGCM [DM] will give a richer understanding of the foundations of new digital marketing landscape & enable student to understand concepts and tools which will help organisations to move to digital channels. The program focuses on developing & planning a digital offering, gaining proficiency in social advertising & enhancing the customer engagement by use of e-CRM.",
              careerOpp:
                "Digital Marketing Manager, Social Media Marketing Experts, Search Engine Marketers, E-Customer Relationship Manager.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is one year.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for one and a half academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "E-Customer Relationship Management",
                      "E-Supply Chain Management",
                      "Internet and Web Optimisation",
                      "Integrated E-Marketing",
                      "Search Engine Optimisation",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Online Market Research",
                      "Search Engine Marketing",
                      "Social Media Marketing",
                      "Email Marketing and Mobile SEO",
                      "Project",
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          course: "Certificate Course",
          subCourses: [
            {
              subCourse: "Blockchain Technology",
              overview:
                "Blockchain Technology is a growing field that has already caught everyone's attention all over the world. It is a universal open source digital ledger in which transactions are recorded chronologically and publicly. The demand for Blockchain talent is skyrocketing, thereby offering plethora of opportunities for learners in many companies and startups alike. With business benefits such as accurate tracking, reduced operating costs, quicker transactions, and increased transparency, the global market for Blockchain-related products & services is expected to explode more. The course intends to develop a thorough understanding of fundamentals of Blockchain Technology. It does not include programming.",
              careerOpp:
                "Blockchain Consultant, Managers, Designers and Quality Engineers in a wide range of industries like Supply Chain, Finance, Health Care, Information Technology, Telecommunications, Renewable Energy.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students appearing for their final graduation exam may also apply, subject to completion of graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is two months.",
                },
                {
                  point: "2",
                  content: "The registration period is valid for four months.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: "3",
      image: require("../../assets/programs/graphic-design.png"),
      title: "Design",
      subDetails: [
        {
          course: "Post Graduation Diploma",
          subCourses: [
            {
              subCourse: "Instructional Design",
              overview:
                "Instructional design is the process of converting information into rich learning content, using established learning theories. It is a systematic process that involves analysing learner profiles and training needs, organising information according to established standards and creating learning plans and content to achieve specific goals. Traditional training methodology focuses on a predominantly one-way transfer of information. The theories of instructional design, however, focus on a resultoriented learning approach in which the users are able to achieve specific goals in a given environment. It is primarily used to develop computer based and web-based content. PGDID program provides basic theoretical and practical skills needed to design, deliver and evaluate courseware. Students explore the theories of Instructional Design through reading, viewing e-learning modules and practical applications. The program aims at acquisition of professional qualification in Instructional Design as well as self-enrichment and improvement of job-related skills.",
              careerOpp:
                "Content Editor / Reviewer, Content Writer, Instructional Designer, Technical Writer, Instructional Writer, etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is one year.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for two academic years.",
                },
              ],
              programStruct: {
                credit: "80",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Principles and Practices of Management",
                      "Instructional Design",
                      "Effective Communication",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Advanced Instructional Design",
                      "Educational Psychology",
                      "Course Design",
                      "Project",
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      key: "4",
      image: require("../../assets/programs/user.png"),
      title: "Education, Humanities",
      subDetails: [
        {
          course: "Post Graduation Diploma",
          subCourses: [
            {
              subCourse: "Educational Administration",
              overview:
                "The Post Graduate Diploma in Educational Administration (PGDEA) is a diploma program which focuses on skills in human relationship, problem solving, community relationship and community cooperation. Other topics covered include information technology and its application in educational administration, evaluation methodology and research. The PGDEA program also focuses on the Legal Aspects of Educational Administration and Guidance and Counselling. At the end of the program the candidates are supposed to complete a “Project”. Project-based learning is a dynamic approach to teaching in which candidates explore real-world problems and challenges. With this type of active and engaged learning, candidates shall be inspired to obtain a deeper knowledge of the courses they are studying.",
              careerOpp:
                "Registrar, Vice Principal, Administrative Officer, Counsellor, Placement Co-ordinator, Academic Consultant, Office Superintendent, Centre Head, Examination controller, etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content:
                    "The duration of the program is one year.The duration of the PGDEA program is two years.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "64",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Foundations of Education",
                      "Educational Administration",
                      "ICT in Education",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Educational Psychology",
                      "Legal Aspects of Educational Management",
                      "Educational Evaluation",
                      "Effective Communication in Education",
                    ],
                  },
                  {
                    sem: "3",
                    subjects: [
                      "Infrastructure and Resource Management in Education",
                      "Value Education",
                      "Trends in Educational Administration",
                      "Organizational Behaviour",
                    ],
                  },
                  {
                    sem: "4",
                    subjects: [
                      "Community Development in Education",
                      "Guidance and Counselling in Education",
                      "Research Methodology",
                      "Project",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "Pre-primary Teachers Training",
              overview:
                "In recent years, there is an increasing demand for qualified personnel to work with young children in preprimary schools. Not all pre-primary schools, however, are run by trained teachers who know how to best facilitate learning in young children. This program is designed to reduce the gap between the available and demanded competencies in this field. It equips teachers with the knowledge of various teaching aids and classroom management. The practice teaching session gives them practical exposure. This program aspires candidates to teach at the pre-primary level and in-service teachers who want to upgrade their skills and qualifications. Knowledge of various aspects of child education is also perfect for mothers who want to teach their children at home. It gives a direction to those who would like to open a pre-primary school. This program helps an individual to: Understand the needs & cognitive development of children, Understand child psychology especially that of young children in the age group of 3-6 years, who would be stepping out of the familiarity of their homes for the first time and Recognise the healthy physical and mental developmental patterns in a young child.",
              careerOpp:
                "Teacher for Children with Special Needs, Pre-Primary Teacher or Counsellor, Administrator in Pre-School and Pre-Primary Supervisor. One can also start one's own Pre-Primary School or Day Care Centre.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program one year.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for two academic years.",
                },
              ],
              programStruct: {
                credit: "34",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Child Development I",
                      "Early Childhood Curriculum I",
                      "Pre-Primary School Administration",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Child Development II",
                      "Early Childhood Curriculum II",
                      "Children with Special Needs",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "School Counselling",
              overview:
                "In a rapidly changing socio-economic environment, the children of today are constantly under stress. This has created a need for school counsellors at all levels of school education. Thus school counsellors have become vital members of the education team and are responsible for the mental well being of the students. This program will build concepts of the child psychology, abnormal psychology and learning difficulties, enabling students to identify the psychological need of the school children & provide guidance. Students enrolling for this program will learn basic counselling techniques and methods of psychological testing. PG Diploma in School Counselling thus will equip students to effectively work as a school counsellor at all levels.",
              careerOpp:
                "After completing this PG diploma, a candidate can work as a School Counsellor.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "Bachelor degree holder / Graduate in any discipline from a recognised University.",
                },
                {
                  point: "2",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "3",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program one year.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for two academic years.",
                },
              ],
              programStruct: {
                credit: "36",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Introduction to Psychology",
                      "Developmental Psychology",
                      "Foundation of Mental Health and Adjustment",
                      "Abnormal Psychology",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Learning Difficulties",
                      "Basics of Counselling, Techniques and Practices",
                      "Psychological Testing",
                      "Submission",
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
      subDetails: [
        {
          course: "Diploma",
          subCourses: [
            {
              subCourse: "Creative Writing in English",
              overview:
                "Diploma in Creative Writing in English program enables one to further nurture one's aptitude for creative writing by polishing one's writing skills and honing one's potential to be a professional writer. It can help one to creatively write in different genres / forms, including poetry, screen writing and memoir. If one is interested in writing, there are a number of related fields that one may join, such as journalism, communication and media, advertising and public relations, corporate communications, professional writing and rhetoric, publishing etc.This program helps learners to: Get an exposure to different forms of writing. Stimulate their creative thinking and writing. Dwell in the realm of imagination and bring out the fascinating insights through writing. Get introduced to the lives and views of wellknown writers and media personalities.",
              careerOpp:
                "Career in Journalism, Communication and Media, Advertising and Public Relations, Corporate Communications, Professional Writing, Publishing, etc.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "XII Standard pass-out with minimum 50% marks in English.",
                },
                {
                  point: "2",
                  content:
                    "Diploma holder / Bachelor’s Degree Holder / Graduate in any discipline from a recognised University (with English as a subject, passed with 50% or completed Diploma / Bachelor’s Degree / Graduation in English medium).",
                },
                {
                  point: "3",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "4",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program is one year.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for four academic years.",
                },
              ],
              programStruct: {
                credit: "30",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "The Expressive Self",
                      "Experiencing the Word",
                      "Creative Lives",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "Sources of Creativity",
                      "Preparatory Practices",
                      "Introduction to Creative Forms of Writing",
                    ],
                  },
                ],
              },
            },
            {
              subCourse: "English Language Teaching",
              overview:
                "Diploma in English Language Teaching program is designed to help students develop proficiency in teaching English. One of the ways of learning a language well is to prepare oneself to teach it. This program trains students to learn different aspects of the English language, from a teacher's point of view. Individuals, who wish to teach English, may opt for this program. The objective of the program is to bridge the gap between theory and practice in the methodology of teaching English. The program also aims at developing reading and writing skills and English vocabulary.",
              careerOpp:
                "After completing this course, a student will develop a clear understanding of teaching and learning of English. It will help to effectively teach English when one takes up the career of English teacher, either in schools or in professional private classes, besides improving one's own English language skills.",
              eligibility: [
                {
                  point: "1",
                  content:
                    "XII Standard pass-out with minimum 50% marks in English.",
                },
                {
                  point: "2",
                  content:
                    "Diploma holder / Bachelor’s Degree Holder / Graduate in any discipline from a recognised University (with English as a subject, passed with 50% or completed Diploma / Bachelor’s Degree / Graduation in English medium).",
                },
                {
                  point: "3",
                  content:
                    "International / SAARC Graduate from a recognised / accredited University /Institution.",
                },
                {
                  point: "4",
                  content:
                    "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
                },
              ],
              durationValidity: [
                {
                  point: "1",
                  content: "The duration of the program one year.",
                },
                {
                  point: "2",
                  content:
                    "The registration period is valid for two academic years.",
                },
              ],
              programStruct: {
                credit: "32",
                semester: [
                  {
                    sem: "1",
                    subjects: [
                      "Introduction to the Study of English Language",
                      "Structure of English Language",
                      "Instructional Methodologies of English Language",
                    ],
                  },
                  {
                    sem: "2",
                    subjects: [
                      "A Study in English Grammar",
                      "Teaching English at Primary and Secondary Level",
                      "Teaching and Learning of English through Constructivism",
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ]);

  const ProgramsItem = (item) => {
    return (
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("ProgramDetails", {
            title: item.title,
            subDetails: item.subDetails,
          })
        }
        underlayColor="transparent"
        style={mainStyles.cardTouchContainer}
      >
        <View
          style={[mainStyles.cardContainer, mainStyles.cardContainerSpecific]}
        >
          <View style={mainStyles.cardLeftContainer}>
            <Image style={mainStyles.cardImage} source={item.image} />
          </View>
          <View style={mainStyles.cardRightContainer}>
            <Text style={mainStyles.cardTitle}>{item.title}</Text>
            <View style={mainStyles.cardLMContainer}>
              <Text style={mainStyles.cardLMText}>Learn More</Text>
              <Feather name="arrow-right" size={17} color={Colors.grey} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={[mainStyles.screen, { flex: 1 }]}>
      <Header headingTitle="Programs" navigation={navigation} />
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatListContainer}
          data={data}
          renderItem={({ item }) => ProgramsItem(item)}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
  },
});

export default Program;
