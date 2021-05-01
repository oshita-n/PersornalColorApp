import { NextPage } from "next";
import { MainLayouts } from "../layouts/MainLayouts";
import { Button} from "../components/shared/Button";
import { Divider } from "../components/shared/Divider";
import React, { useState } from 'react';

const question: NextPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
  return (
  <div>
    <MainLayouts title="Top">
        <div className="flex flex-col items-center">
          <span>質問にYES/NOでお答えください {currentPage}/4</span>
          <div className="w-72 h-24 my-4  bg-yellow-200">画像を張る</div>
          <div className="flex flex-col my-4">
          <div className="flex space-x-10">
          <Button href="#" bgColor = "white" textColor = "black" className = "w-32"
          onClick={ () => setCurrentPage(currentPage+ 1)}>
          Yes</Button> 
          <Button href="#" bgColor = "gray" textColor = "white"  className = "w-32"
          onClick={() => setCurrentPage(currentPage+ 1)}> 
          No</Button> 
          </div>
          </div>
          <Divider />
        </div>
      </MainLayouts>
  </div>
  );
};

export default question;