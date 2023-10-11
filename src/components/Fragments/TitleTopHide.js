import React from "react";

const TitleTopHide = (props) => {
  return (
    <div className="hidden lg:block lg:pl-16 xl:pl-[200px]">
      <h2 className="text-4xl font-medium p-4 lg:text-[40px] xl:py-5">
        {props.content}
      </h2>
    </div>
  );
};

export default TitleTopHide;
