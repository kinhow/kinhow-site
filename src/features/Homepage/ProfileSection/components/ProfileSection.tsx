import { AutoTypedText } from "..";
import { SOCIAL_ARR } from "@/constants";
import { LinkButton } from "@/components";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: ["400", "500", "600"], subsets: ["latin"] });

const ProfileSection = () => {
  return (
    <header className="flex flex-col justify-between md:col-span-6 gap-6 lg:sticky lg:top-0 lg:max-h-screen lg:py-24">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <h1 className={`text-white md:text-8xl sm:text-4xl text-3xl font-bold ${rubik.className}`}>KINHOW</h1>
          <AutoTypedText />
        </div>

        <p className="text-md max-w-md">
          Thrives on embracing new web technologies and tackling fresh challenges.
        </p>

        <LinkButton href="/resume.pdf" target="_blank" className="border border-muted-primary w-fit rounded-full px-4 py-2 hover:bg-muted-primary hover:text-black">View Full Resume</LinkButton>
      </div>

      <ul className="flex gap-4">
        {SOCIAL_ARR?.map((item, index) => (
          <LinkButton target="_blank" href={item.url} key={index} className="transition hover:-translate-y-1">{item.icon}</LinkButton>
        ))}
      </ul>
    </header>
  )
}

export default ProfileSection;
