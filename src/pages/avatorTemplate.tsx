import { NextPage } from "next";
import { Divider } from "../components/shared/Divider";
import { MainLayouts } from "../layouts/MainLayouts";
import { FittingColor } from "../components/shared/FittingColor";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

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
                          className={`${
                            active ? 'text-gray-900' : 'text-gray-900'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <PictureActiveIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          ) : (
                            <PictureInactiveIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          )}
                          写真を撮る
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'text-gray-900' : 'text-gray-900'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <DuplicateActiveIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          ) : (
                            <DuplicateInactiveIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          )}
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

function PictureInactiveIcon(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none" viewBox="0 0 26 26"
      stroke="currentColor">
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function PictureActiveIcon(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none" viewBox="0 0 26 26"
      stroke="currentColor">
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function DuplicateInactiveIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none" 
        viewBox="0 0 26 26" 
        stroke="currentColor">
      <path stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
    </svg>
  )
}

function DuplicateActiveIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none" 
        viewBox="0 0 26 26" 
        stroke="currentColor">
      <path stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
    </svg>
  )
}

export default avatorTemplate;