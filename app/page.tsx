import CardSection from "./components/CardSection";
import HeadHomepage from "./components/HeadHomepage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <Navbar/>
      <div className="container mx-auto px-12 py-12">
        <HeadHomepage/>
        <CardSection/>
      </div>
    </main>
  );
}
