import { useAutoTypedText } from "../hooks";

const AutoTypedText = () => {
  const { ref } = useAutoTypedText();

  return (
    <h2 className="text-lg md:text-3xl type-wrap">
      <span className="whitespace-pre" ref={ref} />
    </h2>
  )
}

export default AutoTypedText;
