import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const bg = {
  color: "#f5f6fa"
}

const Zindex =
{
  zIndex: 400
}
export default function ContactModal2(props) {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_22e9z5l', 'template_qidqgvk', form.current, 'user_t1ShJvY8TWpfiyl60gI2i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
  return (
    <>

      <button
        type="button"
        onClick={openModal}
        className="w-screen text-center text-white bg-green-600 font-bold sm:p-6 p-4  "
      >
      GET IN TOUCH
      </button>




      <Transition appear show={isOpen} transition={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-scroll " style={Zindex}
          onClose={closeModal}
        >
          <div className="max-h-screen z-50 px-4 text-center" >
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
              <div className="inline-block md:h-auto md:w-auto w-full h-full z-50  bg-green-800 px-4 pt-2 pb-3 lg:px-4  overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-xl  bg-opacity-10  shadow-14xl relative   border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-2xl" >
                {/* <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >            <button
                type="button"
                onClick={closeModal}
                className="relative">
                  <span className="absolute text-3xl text-blue-500 lg:-right-44 -top-11 -right-36 hover:text-red-500">
                  
                   </span> </button><div className="flex justify-between"><h1 className="lg:text-xl text-sm text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-yellow-500 font-bold">Design Features </h1>  <button
                    type="button"
                    className="inline-flex  rounded-full justify-center px-4 py-2 text-sm font-medium  text-green-500 border border-transparent bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-xl  hover:opacity-70 focus:outline-none"
                    onClick={closeModal}
                  >
                    Close
                  </button></div>
               */}
                {/* </Dialog.Title> */}

                <div className="mt-2">


                 <div className="">

                    <div className="flex justify-end">
                       <button
                    type="button"
                    className="inline-flex justify-center text-white  bg-green-700  hover:bg-green-400  overflow-hidden text-left align-middle    relative   px-2 rounded-sm  py-2 text-xs md:text-sm font-medium     "
                    onClick={closeModal}
                  >
                    close
                  </button>
                  </div>
                 <form ref={form} onSubmit={sendEmail} className="flex flex-col">
      <label className="text-white pt-2 ">Name</label>
      <input type="text" name="name" className="w-100 mt-2 py-3 px-3  bg-transparent dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none" />
      <label className="text-white pt-2">Email</label>

      <input type="text" name="email"  className="w-100 mt-2 py-3 px-3  bg-transparent dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"/>
      <label className="text-white pt-2">Phone</label>
      <input type="text" name="phoneno"  className="w-100 mt-2 py-3 px-3  bg-transparent dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"/>
      <label className="text-white pt-2">Message</label>
      <textarea name="message" className="w-100 mt-2 py-3 px-3  bg-transparent dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none" />
      <input type="submit" value="Send"  className="inline-flex justify-center  text-white
      mt-10  bg-green-700  overflow-hidden text-left align-middle    text-sm   relative   border-opacity-30   px-4 py-2  md:text-sm font-medium  t hover:bg-green-500 "/>
    </form>

                    <div></div></div>
                </div>

              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
