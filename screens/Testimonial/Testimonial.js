import React, { useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import Header from "../../Components/Header";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";

const Testimonial = ({ navigation }) => {
  const [data, setData] = useState([
    {
      key: "1",
      name: "Balaji M V, PGDDS",
      image: require("../../assets/img/Testimonials/Balaji.png"),
      text:
        "I am a data scientist in an electronics manufacturing company in Chennai. I had joined this SCDL course to enable me to understand the concepts within data science. The admission procedure was quite is straight forward. 6 months into the course, the content has been excellent. All topics required (statistics, python, R, machine learning) have been covered in a clear and concise manner. The exam dates are flexible and study materials are precise. I highly recommend this course to anyone who wants to kick start a career in data science. As always, Symbiosis is one of the best distance education institutes in India.",
    },
    {
      key: "2",
      name: "Vishwanandan Kumar Singh, PGDLL&ER",
      image: require("../../assets/img/Testimonials/Vishwanandan.png"),
      text:
        "In today’s fast changing era, all industries now focus on high productivity with optimized head counts. Being an Environment, Health & Safety (EHS) Manager with 14 years of work experience, my job profile includes industrial legal compliances and direct Liasoning with Government agencies, so I decided to enhance my knowledge in legal aspects of Human Resource, Employee Relations & Labour Laws. SCDL has provided me opportunity to achieve my goal of acquiring globally accepted degree with guidance from best experts. Today I feel more confident towards career growth.",
    },

    {
      key: "3",
      name: "Vishesh Singh, PGDPM",
      image: require("../../assets/img/Testimonials/Vishesh.png"),
      text:
        "I am a Project Lead and always wanted to have a certified degree in project. I consulted with many of my colleagues & friends, maximum of them recommended me SCDL only. Through this PGDPM online course I got the opportunity to pursue my dreams through a program that was flexible and convenient for my schedule. In SCDL the video classes are very interactive, you can access it from anywhere & anytime. I would strongly recommend this program to any working professional interested in pursuing a degree in any specific course - SCDL is exactly what you're looking for!",
    },

    {
      key: "4",
      name: "Aditi Sharma Dogra, PGDSC",
      image: require("../../assets/img/Testimonials/Aditi.png"),
      text:
        "I, Asst. Prof. always wanted to enhance my skills to understand my student’s perspective and their problems better. I chose Symbiosis PGDSC program due to its flexibility and updated course content. I find this course very interesting, challenging, rewarding and fulfilling. Due to rise in stress level and anxiety in young people at school and colleges, this course has enable me to be a better people’s person thus providing new insight to the dimensions of the problems related to fear, stress & anxiety and building strategies to help people cope up/overcome the same. It has also provide me new career avenues in diverse areas/sectors as well. This course meets my expectations significantly.",
    },

    {
      key: "5",
      name: "Amruta Ravindra Maddel, PGDTW",
      image: require("../../assets/img/Testimonials/Amruta.png"),
      text:
        "I feel honored to be an alumni of Symbiosis, of Technical Writing (PGDTW) course of 2016-2017 batch. This program has definitely helped me to enhance my skills as a technical writer. Due to a break in my career for a year, I wanted to again resume my field with the updated skills and knowledge. That is when I found SCDL Technical Writing program and I was deeply satisfied with the course content, material and the flexibility in scheduling exams. This course has installed a new energy and confidence in me and helped me a lot. I am proudly persuing my career at Mastercard, working happily and with greater confidence.",
    },

    {
      key: "6",
      name: "Deepa Urmil, Vice President, YES Bank, PGDID",
      image: require("../../assets/img/Testimonials/Deepa.png"),
      text:
        "Being a training professional for the last 15 years, I have been part of all activities that encompass Learning & Development. This course helped me in getting new perspective to these activities & provided a fit for purpose approach towards all learning objectives. It has also enabled me to create a better content that is specific to the audience & designed in such a way that learning is not only informative but also fun. Thank you SCDL for creating this specified course for Learning Professionals to build on their strengths & improve the skills for growing in the L&D domain.",
    },

    {
      key: "7",
      name: "Lt Cdr Phani Chaitanya Malapaka, Indian Navy, PGDBA",
      image: require("../../assets/img/Testimonials/Chaitanya.png"),
      text:
        "In Indian Armed Forces, my key role is to lead and manage Men, Money and Materiel. The theoretical knowledge gained during the course made me a better leader and a manager where I can relate and apply myself in most of the day-to-day work. The Learning Material of SCDL was written in a very lucid and easy to understand and comprehend. The exam centres all over India helped me to complete my exams on Saturdays/ Sundays in a time bound manner without affecting my duties. The Live and the recorded video lectures were of immense help to understand difficult topics. The best thing was to get AICTE approved PGDBA in the most economical way.",
    },

    {
      key: "8",
      name: "Raj Gudela, PGDIM",
      image: require("../../assets/img/Testimonials/Raj.png"),
      text:
        "I am a marine chief engineer and after sailing for 17 years at sea, have been working as vice president in Indaust Maritime Pvt. Ltd. for 7 years and as executive director in Dharti Dredging & Infrastructure Ltd. for 6 years. During the service, I have developed interest in an insurance field and have passed FIII from Insurance Institute of India. Then I came across SCDL and enrolled for PGDIM. By the time I had completed the program, I must agree that the course has tremendously increased my knowledge in Insurance Management and it will help me in insurance surveyor job.",
    },

    {
      key: "9",
      name: "Kelam Koteswara Rao, PGDBF",
      image: require("../../assets/img/Testimonials/Kelam.png"),
      text:
        "I am good to get the exposure with symbiosis distance learning. The PGDBF program has excellent curriculum, assessments and exam patterns. After completing the program from SCDL, I have enhanced my skill set with a crucial information regarding banking and finance industry which is helping me in my professional growth.",
    },

    {
      key: "10",
      name: "Sachin Chouhan, PGDEXIM",
      image: require("../../assets/img/Testimonials/Sachin.png"),
      text:
        "I was worried to pursue a degree with distance learning but SCDL staff guided me very well and built up a confidence to opt for it. In my course duration, online help was always available. Personally I liked Whatsapp help centre. This course has given a boost in my career and I got a job in banking sector. currently I am a Customer Service Manager in Trade Forex.",
    },

    {
      key: "11",
      name: "Debjani Sett, PGDSCM",
      image: require("../../assets/img/Testimonials/Debjani.png"),
      text:
        "I have opted for the course for my personal inquisitiveness and eagerness to learn about the supply chain management. As a working professional, I made my own convenient time to study and sit for exams without applying for educational leave. The program has quenched my thirst of knowledge after the completion.",
    },

    {
      key: "12",
      name: "Pragya Pathak, PGDBCL",
      image: require("../../assets/img/Testimonials/Pragya.png"),
      text:
        "I chose SCDL because of its flexibility for virtual classes and exams and fee structure is also reasonable. The provided study material is also very comprehensive. So, it becomes convenient to study while working. After completing the program successfully, I have gained in-depth knowledge of legal procedures.",
    },

    {
      key: "13",
      name: "Naresh Shivani, PGDID",
      image: require("../../assets/img/Testimonials/Naresh.png"),
      text:
        "I have successfully completed PGDBA with HR specialization in the 2008 from SCDL. After completion of the program, it enabled me to get advancement in my career as I moved to HR department in the same company. Then I pursued PGDID program from SDCL in 2018. Being in HR (Learning and Development) vertical, this course will enable me to understand the various areas of content development. Overall, I would certainly recommend employable students to pursue programs from SCDL as there are various advantages like flexibility of time, affordability and it will help to upgrade their skillset.",
    },

    {
      key: "14",
      name: "Hemangi Namwar, PGDPTT",
      image: require("../../assets/img/Testimonials/Hemangi.png"),
      text:
        "I had aspirations to become a teacher but I was a commerce graduate so I needed teaching related qualification. As my kids were small, I used to study and appear for the exams as per my convenience. The course curriculum added required skills to my profile. Now I am a teacher at Tree house High School, for Nursery class.",
    },

    {
      key: "15",
      name: "Sunita Mall, CPED",
      image: require("../../assets/img/Testimonials/Sunita.png"),
      text:
        "The program has definitely helped me in enhancing my Entrepreneurial Aptitude and my business acumen. My self-confidence, interpersonal skill and communication have improved a lot. It has helped me a lot to handle the pressure of responsibilities and team management in better way. The other good thing I have personally liked about the course was the virtual classes and all the faculty members were so humble and polite while taking classes and helped me a lot to answer all my queries.",
    },

    {
      key: "16",
      name: "M N Renuka, PGDCRM",
      image: require("../../assets/img/Testimonials/Renuka.png"),
      text:
        "SCDL is a great platform to do PG while pursuing work. The course is designed in such a way that it helps you apply the theoretical knowledge in your job role. The provided study material has the relevant examples that helps you to understand the concepts clearly. I chose a subject that is related1 to my profile and after completing it, I could see the changes in my approach towards my working style.",
    },
  ]);
  const student = (item) => {
    return (
      <ScrollView>
        <View style={[mainStyles.cardContainer, styles.card]}>
          <Image style={styles.img} source={item.image} />
          <Text style={styles.heading}>{item.name}</Text>
          <Text style={styles.paragraph}>{item.text}</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={[mainStyles.screen, { flex: 1, marginBottom: 100 }]}>
      <Header headingTitle="Testimonials" navigation={navigation} />
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatListContainer}
          data={data}
          renderItem={({ item }) => student(item)}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: Platform.OS === "ios" ? 24 : 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
  img: {
    display: "flex",
    alignSelf: "center",
    marginVertical: 20,
  },
  paragraph: {
    marginHorizontal: 15,
    width: "90%",
    textAlign: "justify",
    marginBottom: 20,
    fontSize: Platform.OS === "ios" ? 15 : 13,
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 5,
    paddingTop: 10,
  },
});

export default Testimonial;
