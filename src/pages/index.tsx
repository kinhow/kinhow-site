import { ProfileName } from "@/components";

const Home = () => {
  return (
    <section className="p-4 flex-1 flex flex-col gap-6 items-center justify-center">
      <ProfileName
        name={"I'M KINHOW"}
        className="md:text-8xl sm:text-4xl text-3xl tracking-widest font-bold"
      />
      <div className="flex flex-col items-center text-muted-primary text-lg">
        <p>Self-taught <span className="text-white font-semibold">Front-end Web Developer</span></p>
        <p>who thrives on learning new technologies and tackling fresh challenges</p>
      </div>
    </section>
  )
}

export default Home;
