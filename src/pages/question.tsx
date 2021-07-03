import { NextPage } from 'next';
import { MainLayouts } from '../layouts/MainLayouts';
import { Button } from '../components/shared/Button';
import { Divider } from '../components/shared/Divider';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const question: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const currentPageCounter = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    } else {
      router.push('/questionResult');
    }
  };
  // const diagnosis = [
  //   {  diagnosisText: "唇の色は赤色とオレンジの場合、赤色に近い"
  //     answerOptions: [
  //       {}
  //   ],
  // },
  // ]
  return (
    <div>
      <MainLayouts title='Top'>
        <div className='flex flex-col items-center'>
          <span>質問にYES/NOでお答えください {currentPage}/4</span>
          <div className='w-72 h-24 my-4  bg-yellow-200'>画像を張る</div>
          <div className='flex flex-col my-4'>
            <div className='flex space-x-10'>
              <Button
                button
                bgColor='white'
                textColor='black'
                className='w-32'
                onClick={currentPageCounter}
              >
                Yes
              </Button>
              <Button
                button
                bgColor='gray'
                textColor='white'
                className='w-32'
                onClick={currentPageCounter}
              >
                No
              </Button>
            </div>
          </div>
          <Divider />
        </div>
      </MainLayouts>
    </div>
  );
};

export default question;
