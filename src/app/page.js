import Accordion from "@/components/Accordion";
import Banner from "@/components/Banner";
import Lesson from "@/components/Lessons/Lesson";
// import Navbar from "@/components/Navbar";
// import WordContainer from "@/components/WordContainer";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Lesson />
      <Accordion />
    </div>
  );
}
