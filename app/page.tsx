import CardSection from "./components/CardSection";
import HeadHomepage from "./components/HeadHomepage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <div className="container mx-auto px-12 py-4">
        <HeadHomepage/>
        <CardSection/>
      </div>
    </main>
  );
}

