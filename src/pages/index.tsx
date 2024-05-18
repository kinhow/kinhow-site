import { Header } from "@/layouts";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={`bg-background h-screen flex flex-col ${jost.className}`}>
      <Header />
    </main>
  )
}

export default Home;
