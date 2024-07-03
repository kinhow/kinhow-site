import { Fragment } from "react";
import { AboutMe } from "../..";
import { EXPERIENCE } from "@/constants";

const WorkExperience = () => {
  return (
    <div className="flex flex-col md:col-span-6 gap-20 lg:py-24">
      <AboutMe />
      <div className="flex flex-col gap-8">
        {EXPERIENCE?.map((item, index) => (
          <Fragment key={index}>
            <div className="flex flex-col gap-6">
              {item?.position?.map((subItem, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex flex-col md:flex-row items-start flex-col-reverse">
                    <div>
                      {subItem.title !== "Frontend Developer" ? <h1>{item.company}</h1> : null}
                      <h2 className="text-primary">{subItem.title}</h2>
                    </div>
                    <div className="flex-1 text-right text-primary md:text-muted-primary text-sm md:text-md">{subItem.duration}</div>
                  </div>
                  <ul className="list-disc ml-6">
                    {subItem.scope?.map((scopes, index) => (
                      <li key={index} className="text-sm leading-normal">{scopes}</li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-2">
                    {subItem?.tech?.map((techs, index) => (
                      <li key={index} className="text-xs bg-teal rounded-full px-4 py-2 tracking-wide text-white">{techs}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience;
