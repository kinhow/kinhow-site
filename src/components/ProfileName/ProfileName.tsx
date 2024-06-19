import { Poppins } from "next/font/google";
import { ElementClassNameProps } from "@/types";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

const ProfileName = ({ name, className }: ElementClassNameProps & { name: React.ReactNode }) => {
  return <h1 className={`text-white ${poppins.className} ${className}`}>{name}</h1>
}

export default ProfileName;
