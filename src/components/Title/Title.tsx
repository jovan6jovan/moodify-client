import { FC } from "react";
import { TitleProps } from "./Title.types";

const Title: FC<TitleProps> = ({ text }) => (
  <h1 className="text-center text-4xl text-cyan-600 pt-8 mb-4">{text}</h1>
);

export default Title;
