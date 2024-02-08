import Hero from "./Hero";
import SectionCard from "./SectionCard";
import Header from "./components/Header";


export default function App() {
  return (
    <div className="max-w-xl px-8 mx-auto">
      <Header/>
      <Hero/>
      <SectionCard/>
    </div>
  )
}