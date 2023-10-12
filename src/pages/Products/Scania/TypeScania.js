import React from "react";

import { useNavigate } from "react-router-dom";
import TitleTop from "../../../components/Fragments/TitleTop";
import LogoTop from "../../../components/Fragments/LogoTop";
import TextDescription from "../../../components/Fragments/TextDescription";
import CardSquare from "../../../components/Fragments/CardSquare";

export const TypeScania = () => {
  const title = "Dump Truck";

  const navigate = useNavigate();
  return (
    <>
      <TitleTop content={title} />
      <LogoTop />
      <TextDescription />
      <CardSquare/>
    </>
  );
};
