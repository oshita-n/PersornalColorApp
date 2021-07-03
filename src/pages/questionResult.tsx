import { NextPage } from 'next';
import { Divider } from '../components/shared/Divider';
import { MainLayouts } from '../layouts/MainLayouts';
import { Button } from '../components/shared/Button';

const questionResult: NextPage = () => {
  return (
    <MainLayouts title='Top'>
      <div className='flex flex-col items-center'>
        <span>あなたのパーソナルカラーは"{}"です</span>
        <div className='flex flex-col my-4'>
          <div className='flex space-x-10'>
            <Button button bgColor='white' textColor='black' className='w-32'>
              自分の顔とカラーを比較する
            </Button>
            <Button button bgColor='white' textColor='black' className='w-32'>
              カラーパレットを見る
            </Button>
          </div>
        </div>
        <Divider />
      </div>
    </MainLayouts>
  );
};

export default questionResult;
