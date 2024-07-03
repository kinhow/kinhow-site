import { LinkButton } from "@/components";

const ViewResume = () => {
  return (
    <LinkButton
      href="/resume.pdf"
      target="_blank"
      className="w-auto border border-white rounded-[30px] px-6 py-2 tracking-widest hover:bg-muted-primary hover:text-background font-medium"
    >
      View Full RESUME
    </LinkButton>
  )
}

export default ViewResume;
