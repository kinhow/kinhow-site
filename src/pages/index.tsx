import { Roboto_Mono } from "next/font/google";
import { WorkExperience, ProfileSection } from "@/features/Homepage";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={`text-muted-primary ${robotoMono.className}`}>
      <div className="flex p-8 md:px-8 md:p-0 max-w-screen-xl">
        <div className="grid gap-20 md:gap-8 md:grid-cols-12 relative">
          <ProfileSection />
          <WorkExperience />
        </div>
      </div>
    </main>
  )
}

export default Home;
