import { NextPage } from "next";
import { Divider } from "../components/shared/Divider";
import { MainLayouts } from "../layouts/MainLayouts";
import { FittingColor } from "../components/shared/FittingColor";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { CameraIcon } from '@heroicons/react/solid'
import { PhotographIcon } from '@heroicons/react/solid'
import Webcam from "react-webcam";


export const avatorTemplate: NextPage = () => {
  return (
    <div>
      <MainLayouts title="top">
        <div className="flex flex-col items-center">
          <FittingColor bgColor="#b0cde5" bodyColor="#67a8dd" />
          <p>あなたの顔が認識されました</p>
          <Divider/>
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="mt-5 inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  洋服の写真を撮る
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className="text-gray-900 flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                            <CameraIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          写真を撮る
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className="text-gray-900 flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                            <PhotographIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          フォトライブラリ
                        </button>
                      )}
                    </Menu.Item>
                  </div>                 
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </MainLayouts>
    </div>
  );
};

export default avatorTemplate;