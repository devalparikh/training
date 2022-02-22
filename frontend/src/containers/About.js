import react from "react";
import Card from "../components/card/Card";

const About = () => {
  return (
    <div className="max-w-screen-xl my-0 mx-auto">
      <h1
        id="about"
        className="text-center py-12 text-4xl font-bold text-base-content"
      >
        About Us
      </h1>
      <div className="text-base-content max-w-sm sm:max-w-lg my-0 mx-auto">
        <p className="">
          At DP Learning we'll help you develop a plan to becoming an industry
          employed specialist. Regardless of your current level of experience,
          you'll gain the fundemental skills and knowledge required to becoming
          a Software Engineer.
        </p>
      </div>

      <h1
        id="offers"
        className="text-center py-12 text-4xl font-bold text-base-content"
      >
        Offerings
      </h1>
      <div className="m-10 mt-0 flex flex-wrap justify-center">
        {/* <Card
          title="Software Engineer"
          body="Learn the fundemental concepts to write and read code. Understand and feel confident using the tools and resources used for the Software Development lifecycle."
          tech={[
            "Basic Programming",
            "Git/Github",
            "Java",
            "OOP & Data Structures",
            "Web Development",
            "APIs",
          ]}
          salary="$115,192/year"
        />
        <Card
          title="Cloud Engineer"
          body="Learn how to become a cloud architect by exploring cloud-based services offered by cloud based providers, such as Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure."
          tech={[
            "Basic Networking",
            "Blue Green and Canary Deployment",
            "Highly Available and Fault Tolerant Systems",
            "Achieving a Cloud Certification",
          ]}
          salary="$113,919/year"
        />
        <Card
          title="Machine Learning Engineer"
          body="Grow your skills in developing end-to-end machine learning models. Understand the fundemental framework of developing, training, and validating ML models."
          tech={[
            "Data Pre-Processing",
            "Data Ingestion",
            "Supervised Learning",
            "Unsupervised Learning",
            "Deep Learning",
          ]}
          salary="$121,725/year"
        /> */}
        <Card
          title="Programming"
          level="Easy"
          body="Regardless of your current experience, understand the basic and core concepts to be able to write, read, and understand code. Grasp the ability to learn various programming languages."
          tech={[
            "Setting Up a Local Development Environment",
            "Python",
            "Java",
            "Scripting",
            "Functional Programming",
            "Basic Web Development",
          ]}
          rate="$65"
        />
        <Card
          title="Software Engineering"
          level="Intermediate"
          body="Take your development skills to the next level and leverage DP Learning to learn how to be a key contributor as a Software Engineer. Learn the tools used to build production-grade software in the Software Development Lifecycle."
          tech={[
            "Agile",
            "Git/Github",
            "Java Spring",
            "OOP & Data Structures",
            "APIs",
            "Advanced Web Development",
          ]}
          rate="$75"
        />
        <Card
          title="Excelling in the Industry"
          body="Leverage DP Learning to understand how to stay sharp and valued as an Engineer. Learn core concepts to increase scope and advance in your career. Understand how to deliver high impact and get into a higher paying positions, while working the same number of hours"
          level="Intermediate"
          tech={[
            "Lead Meetings",
            "Meeting Templates",
            "Lead Team Direction",
            "Managing Expectations",
          ]}
          rate="$85"
        />
      </div>
      {/* <p className="text-center text-base-content">
        *Salaries are GlassDoor estimates
      </p> */}
      <div className="grid place-content-center h-40">
        <button class="btn btn-wide btn-primary btn-lg">Enroll Today!</button>
      </div>
    </div>
  );
};

export default About;
