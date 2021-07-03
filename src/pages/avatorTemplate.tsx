import { NextPage } from "next";
import { Divider } from "../components/shared/Divider";
import { MainLayouts } from "../layouts/MainLayouts";
import { FittingColor } from "../components/shared/FittingColor";
import { Menu, Transition, Dialog } from '@headlessui/react'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { CameraIcon } from '@heroicons/react/solid'
import { PhotographIcon } from '@heroicons/react/solid'
import Webcam from "react-webcam";
import React from "react";

export const avatorTemplate: NextPage = () => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  const webcamRef = React.useRef(null);
  const [image, setImage] = useState()
  const capture = React.useCallback(
    () => {
      setImage(webcamRef.current.getScreenshot());
    },
    [webcamRef]
  );

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

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
                      <button
                        className="text-gray-900 flex rounded-md items-center w-full px-2 py-2 text-sm"
                        onClick={openModal}
                      >
                          <CameraIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                            
                          />
                        写真を撮る
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        className="text-gray-900 flex rounded-md items-center w-full px-2 py-2 text-sm"
                      >
                          <PhotographIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        フォトライブラリ
                      </button>
                    </Menu.Item>
                  </div>                 
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </MainLayouts>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                
              <Webcam
                audio={false}
                height={980}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={480}
                videoConstraints={videoConstraints}
              /> 
                <div className="mt-4">
                  <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={capture}
                    >
                      Take a picture！
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
    
  );
};

export default avatorTemplate;