import { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({...rest}: TextAreaProps) {
  return (
    <textarea
      {...rest}
      className="w-full border border-gray-300 p-2 bg-gray-300 text-black rounded-md"
    ></textarea>
  );
}
