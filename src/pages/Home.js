import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimelineSection from "../components/core/HomePage/TimelineSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import InstructorSection from '../components/core/HomePage/InstructorSection'
import ExploreMore from "../components/core/HomePage/ExploreMore"
import Footer from "../components/common/Footer"
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
  return (
    <div >
      {/*section1*/}

      <div className="relative mx-auto flex flex-col w-11/12  max-w-maxContent items-center
            text-white justify-between">
        <Link to={"/signup"}>
          <div className="mx-auto group mt-16 p-1 rounded-full bg-richblack-800 font-bold text-richblack-200
                transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex flex-row items-center rounded-full px-10 py-[5px]
                   transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future With
          <HighlightText text={"Coding Skills"} />
        </div>
        {" "}
        <div className="w-[90%] mt-4  text-center text-lg font-bold text-richblack-300">
          with our online coding courses, you can learn at your own pace, from anywhere in the world,
          and get access to a wealth of resources, including hands-on projects, quizzes, and personalized
          feedback from instructors.
        </div>
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>

        </div>
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/*code section1*/}
        <div>
          <CodeBlocks position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"coding potential"} />
                with your online courses
              </div>

            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you"
            }
            ctabtn1={
              {
                text: "try it yourself",
                linkto: "/signup",
                active: true,
              }
            }
            ctabtn2={{
              text: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="style.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>
        {/*codesection2*/}
        <div>
          <CodeBlocks position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                  Start
                <HighlightText text={"coding in seconds"} />
                
              </div>

            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={
              {
                text: "Continue Lesson",
                linkto: "/signup",
                active: true,
              }
            }
            ctabtn2={{
              text: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="style.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        <ExploreMore />


      </div>

      {/*section2*/}
      <div className="bg-pure-greys-5 text-richblack-700">

        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>
                  Learn More
                </div>

              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex flex-row gap-5 mb-10 mt-[95px]">
            {/* <div className="text-4xl font-semibold w-[45%]">
                            Get the Skills you need for a
                           <HighlightText text={"Job that is in a demand"}/>
                        </div> */}
            <div className="text-4xl font-semibold w-[45%]">
              Get the Skills you need for a
              <HighlightText text={"Job that is in a demand"} />
            </div>

            <div className="flex flex-col gap-10 w-[40%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the disctates its own terms. Today, to be a competitive
                specialist requires more than professional skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>
                  Learn more
                </div>
              </CTAButton>
            </div>


          </div>

          <TimelineSection />

          <LearningLanguageSection />
        </div>



      </div>

      {/*section3*/}
      <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between
            gap-8 bg-richblack-900 text-white">

        <InstructorSection />

        <h2 className="text-center text-4xl font-semibold mt-10">Review from other Learners</h2>
        <ReviewSlider />

      </div>

      {/*section4*/}

      <Footer />

    </div>
  )
}

export default Home