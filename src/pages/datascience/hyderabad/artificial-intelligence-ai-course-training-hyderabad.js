import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AIHyderabadCourseData } from "../../../CityData/Hyderabad/artificialIntelligenceAICourseTrainingHyderabad";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Navbar from "../../../components/Global/Navbar/Navbar";
import Popup from "../../../components/Global/Popup/Popup";
import FeeSection from "../../../components/Seo/FeeSection/FeeSection";
import Testimonial from "../../../components/Seo/Testimonial/Testimonial";
import styles from "../../../styles/Home.module.css";
const FirstSection = dynamic(() =>
  import("../../../components/Seo/FirstSection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("../../../components/Seo/SecondSection/SecondSection")
);
const ProgramInfo = dynamic(() =>
  import("../../../components/Seo/ProgramInfo/ProgramInfo")
);
const SeventhSection = dynamic(() =>
  import("../../../components/Seo/SeventhSection/SeventhSection")
);
const ProgramFee = dynamic(() =>
  import("../../../components/Seo/ProgramInfo/ProgramFee/ProgramFee")
);
const CityText = dynamic(() =>
  import("../../../components/Seo/CityText/CityText")
);
const CitiesLeft = dynamic(() =>
  import("../../../components/Seo/CitiesLeft/CitiesLeft")
);
const CitiesRight = dynamic(() =>
  import("../../../components/Seo/CitiesRight/CitiesRight")
);
const FAQNew = dynamic(() => import("../../../components/Seo/FAQNew/FAQNew"));
const OfferPopup = dynamic(() =>
  import("../../../components/Global/OfferPopup/OfferPopup")
);
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [popupData, setPopupData] = useState([]);
  // console.log(popupData);
  useEffect(() => {
    // console.log("inside UseEFFect");
    const fetchPopup = async () => {
      const data = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        // console.log(popData, "get data");
        if (popData == []) {
          setPopupData([]);
        }

        popData.map((data, i) => {
          // console.log(data);
          data.page.map((popupData, i) => {
            // console.log(popData);
            if (popupData === "Adv Data Science and AI") {
              setPopupData(data);
              // console.log(popupData);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);
  const pdfUrl = "/Brochure/Advance-AI-ML.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Best Artificial Intelligence Course in Hyderabad - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in Learnbay's Artificial Intelligence Training program in Hyderabad for IBM certification and Job Assistance assistance. Don't miss out, Sign up now."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence course in Hyderabad, Artificial Intelligence training in Hyderabad, Artificial Intelligence institute in Hyderabad, best Artificial Intelligence institute in Hyderabad, Artificial Intelligence course in Hyderabad, Artificial Intelligence certification in Hyderabad, Artificial Intelligence training institute in Hyderabad, advanced Artificial Intelligence course in Hyderabad, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/hyderabad/artificial-intelligence-ai-course-training-hyderabad"
        />
        <meta
          property="og:title"
          content="Artificial Intellgince Course in Hyderabad | Data Science Training in Hyderabad"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Artificial Intellgince Course in Chennai. Learnbay is Advanced Artificial Intellgince Course Training Institute in Hyderabad. Artificial Intellgince Course in Hyderabad will enhance your career"
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Artificial Intellgince Course in Hyderabad | Data Science Training in Hyderabad"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Artificial Intellgince Course in Hyderabad. Learnbay is Advanced Artificial Intellgince Course Training Institute in Hyderabad. Artificial Intellgince Course in Hyderabad will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Artificial Intellgince Course in Hyderabad. Learnbay is Advanced Artificial Intellgince Course Training Institute in Hyderabad. Artificial Intellgince Course in Hyderabad will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/hyderabad/artificial-intelligence-ai-course-training-hyderabad"
        />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training India"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScience={true} interstedInHide={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          cityParaCont=" Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Science and AI Program For Manager & Leaders"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="qxwIns6z2Bc"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Business-Analytics-Masters-Header.png"
          firstHeading="Artificial Intelligence(Ai) Course"
          firstToparaImg="Training In Hyderabad"
          firstTopPara="Become an AI Expert in Product-based MNC"
        />
        <SecondSection
          SecondSectionData={AIHyderabadCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={AIHyderabadCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,15,000"
            FeeEmi="₹ 7,539/ Month"
           weekdaybatch="Weekday Batch"
        weekendbatch="  Weekend Batch"
        weekday="MON - THU"
        weekend="SAT - SUN"
        WeekdayDate="Dec 6th"
        WeekendDate="Nov 24th"
        WeekendTime="9:30 AM - 1 PM"
        WeekdayTime="8:00 PM - 10:30 PM "
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            dataScience={true}
            titleCourse="AI & ML Program for tech professionals"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
            brochurePdf={pdfUrl}
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,15,000"
            monthlyPayment1="₹7,539"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,15,000"
            monthlyPayment2="₹11,308"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramBot1={AIHyderabadCourseData[0].ProgramBot1}
              ProgramBot2={AIHyderabadCourseData[0].ProgramBot2}
              ProgramBot3={AIHyderabadCourseData[0].ProgramBot3}
              ProgramBot66={AIHyderabadCourseData[0].ProgramBot66}
              ProgramHead1={AIHyderabadCourseData[0].ProgramHead1}
              ProgramHead4={AIHyderabadCourseData[0].ProgramHead4}
              ProgramHead3={AIHyderabadCourseData[0].ProgramHead3}
              ProgramBot67={AIHyderabadCourseData[0].ProgramBot67}
              ProgramBot4={AIHyderabadCourseData[0].ProgramBot4}
              ProgramBot5={AIHyderabadCourseData[0].ProgramBot5}
              ProgramBot6={AIHyderabadCourseData[0].ProgramBot6}
              Courselink1={AIHyderabadCourseData[0].Courselink1}
              Courselink2={AIHyderabadCourseData[0].Courselink2}
              Courselink3={AIHyderabadCourseData[0].Courselink3}
              Courselink4={AIHyderabadCourseData[0].Courselink4}
              Courselink5={AIHyderabadCourseData[0].Courselink5}
              Course1={AIHyderabadCourseData[0].Course1}
              Course2={AIHyderabadCourseData[0].Course2}
              Course3={AIHyderabadCourseData[0].Course3}
              Course4={AIHyderabadCourseData[0].Course4}
              Course5={AIHyderabadCourseData[0].Course5}
              DomainHead1={AIHyderabadCourseData[0].DomainHead1}
              DomainBot1={AIHyderabadCourseData[0].DomainBot1}
              DomainBot2={AIHyderabadCourseData[0].DomainBot2}
              DomainBot3={AIHyderabadCourseData[0].DomainBot3}
              DomainList1={AIHyderabadCourseData[0].DomainList1}
              DomainList2={AIHyderabadCourseData[0].DomainList2}
              DomainList3={AIHyderabadCourseData[0].DomainList3}
              DomainList4={AIHyderabadCourseData[0].DomainList4}
              DomainList5={AIHyderabadCourseData[0].DomainList5}
              DomainList6={AIHyderabadCourseData[0].DomainList6}
              DomainList7={AIHyderabadCourseData[0].DomainList7}
              DomainList8={AIHyderabadCourseData[0].DomainList8}
              DomainList9={AIHyderabadCourseData[0].DomainList9}
              DomainList10={AIHyderabadCourseData[0].DomainList10}
              Domainlink1={AIHyderabadCourseData[0].Domainlink1}
              Domainlink2={AIHyderabadCourseData[0].Domainlink2}
              Domainlink3={AIHyderabadCourseData[0].Domainlink3}
              Domainlink4={AIHyderabadCourseData[0].Domainlink4}
              Domainlink5={AIHyderabadCourseData[0].Domainlink5}
              Domainlink6={AIHyderabadCourseData[0].Domainlink6}
              Domainlink7={AIHyderabadCourseData[0].Domainlink7}
              Domainlink8={AIHyderabadCourseData[0].Domainlink8}
              Domainlink9={AIHyderabadCourseData[0].Domainlink9}
              Domainlink10={AIHyderabadCourseData[0].Domainlink10}
              CertificationHead1={AIHyderabadCourseData[0].CertificationHead1}
              CertificationBot1={AIHyderabadCourseData[0].CertificationBot1}
              CertificationBot2={AIHyderabadCourseData[0].CertificationBot2}
              src={AIHyderabadCourseData[0].src}
              src22={AIHyderabadCourseData[0].src22}
              src33={AIHyderabadCourseData[0].src33}
              alt2={AIHyderabadCourseData[0].alt2}
              alt3={AIHyderabadCourseData[0].alt3}
              alt4={AIHyderabadCourseData[0].alt4}
              alt5={AIHyderabadCourseData[0].alt5}
              ModuleHead1={AIHyderabadCourseData[0].ModuleHead1}
              ModuleBot1={AIHyderabadCourseData[0].ModuleBot1}
              ModuleBot2={AIHyderabadCourseData[0].ModuleBot2}
              ModuleHead2={AIHyderabadCourseData[0].ModuleHead2}
              ModuleBot3={AIHyderabadCourseData[0].ModuleBot3}
              syllabush1={AIHyderabadCourseData[0].syllabush1}
              syllabusb1={AIHyderabadCourseData[0].syllabusb1}
              SyllabusBotlist11={AIHyderabadCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={AIHyderabadCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={AIHyderabadCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={AIHyderabadCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={AIHyderabadCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={AIHyderabadCourseData[0].SyllabusBotlist16}
              syllabush2={AIHyderabadCourseData[0].syllabush2}
              syllabusb2={AIHyderabadCourseData[0].syllabusb2}
              SyllabusBotlist21={AIHyderabadCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={AIHyderabadCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={AIHyderabadCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={AIHyderabadCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={AIHyderabadCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={AIHyderabadCourseData[0].SyllabusBotlist26}
              syllabush3={AIHyderabadCourseData[0].syllabush3}
              syllabusb3={AIHyderabadCourseData[0].syllabusb3}
              SyllabusBotlist31={AIHyderabadCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={AIHyderabadCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={AIHyderabadCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={AIHyderabadCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={AIHyderabadCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={AIHyderabadCourseData[0].SyllabusBotlist36}
              syllabush4={AIHyderabadCourseData[0].syllabush4}
              syllabusb4={AIHyderabadCourseData[0].syllabusb4}
              SyllabusBotlist41={AIHyderabadCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={AIHyderabadCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={AIHyderabadCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={AIHyderabadCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={AIHyderabadCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={AIHyderabadCourseData[0].SyllabusBotlist46}
              syllabussrc={AIHyderabadCourseData[0].syllabussrc}
              JobHead1={AIHyderabadCourseData[0].JobHead1}
              JobBot1={AIHyderabadCourseData[0].JobBot1}
              JobBot2={AIHyderabadCourseData[0].JobBot2}
              JobBot5={AIHyderabadCourseData[0].JobBot5}
              JobHead2={AIHyderabadCourseData[0].JobHead2}
              JobBot3={AIHyderabadCourseData[0].JobBot3}
              JobBot4={AIHyderabadCourseData[0].JobBot4}
              JobBot6={AIHyderabadCourseData[0].JobBot6}
              ProjectsBot1={AIHyderabadCourseData[0].ProjectsBot1}
              ProjectsBot2={AIHyderabadCourseData[0].ProjectsBot2}
              src1={AIHyderabadCourseData[0].src1}
              ProjectsH1={AIHyderabadCourseData[0].ProjectsH1}
              Projectsp1={AIHyderabadCourseData[0].Projectsp1}
              src2={AIHyderabadCourseData[0].src2}
              ProjectsH2={AIHyderabadCourseData[0].ProjectsH2}
              Projectsp2={AIHyderabadCourseData[0].Projectsp2}
              src3={AIHyderabadCourseData[0].src3}
              ProjectsH3={AIHyderabadCourseData[0].ProjectsH3}
              Projectsp3={AIHyderabadCourseData[0].Projectsp3}
              src4={AIHyderabadCourseData[0].src4}
              ProjectsH4={AIHyderabadCourseData[0].ProjectsH4}
              Projectsp4={AIHyderabadCourseData[0].Projectsp4}
              AlumniBot1={AIHyderabadCourseData[0].AlumniBot1}
              Asrc1={AIHyderabadCourseData[0].Asrc1}
              AlumniH1={AIHyderabadCourseData[0].AlumniH1}
              Alumnip1={AIHyderabadCourseData[0].Alumnip1}
              Asrc2={AIHyderabadCourseData[0].Asrc2}
              AlumniH2={AIHyderabadCourseData[0].AlumniH2}
              Alumnip2={AIHyderabadCourseData[0].Alumnip2}
              Asrc3={AIHyderabadCourseData[0].Asrc3}
              AlumniH3={AIHyderabadCourseData[0].AlumniH3}
              Alumnip3={AIHyderabadCourseData[0].Alumnip3}
              Asrc4={AIHyderabadCourseData[0].Asrc4}
              AlumniH4={AIHyderabadCourseData[0].AlumniH4}
              Alumnip4={AIHyderabadCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={AIHyderabadCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={AIHyderabadCourseData[0].CityTextB}
          CityText={AIHyderabadCourseData[0].CityText}
          CityTextLB={AIHyderabadCourseData[0].CityTextLB}
          CityTextL={AIHyderabadCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
