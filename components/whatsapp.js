
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { RiWhatsappLine} from 'react-icons/ri';
const bg = {
  color: "#f5f6fa"
}

const Zindex =
{
  zIndex: 400
}
export default function Whatsapp(props) {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  return (
    <>

      <button
        type="button"
        onClick={openModal}
        className="text-center text-green-700 text-5xl lg:text-6xl"
      >
    <RiWhatsappLine/>
      </button>




      <Transition appear show={isOpen} transition={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"  style={Zindex}
          onClose={closeModal}
        >
          <div className="max-h-full z-50 px-4 text-center"  >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0"/>
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
              <div className="inline-block md:h-auto md:w-auto w-full h-full z-50  lg:p-6 p-4 lg:my-20  overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-xl  shadow-14xl relative   border-opacity-30 border-r-0 border-b-0  bg-black  "  >
                {/* <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >            <button
                type="button"
                onClick={closeModal}
                className="relative">
                  <span className="absolute text-3xl text-blue-500 lg:-right-44 -top-11 -right-36 hover:text-red-500">
                  
                   </span> </button><div className="flex justify-between"><h1 className="lg:text-xl text-sm text-white font-bold">Design Features </h1>  <button
                    type="button"
                    className="inline-flex  rounded-full justify-center px-4 py-2 text-sm font-medium  text-green-500 border border-transparent bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-xl  hover:opacity-70 focus:outline-none"
                    onClick={closeModal}
                  >
                    Close
                  </button></div>
               */}
                {/* </Dialog.Title> */}

                <div className=" flex flex-col  justify-center items-center  text-white ">
                    Contact Us:
                    <div className="font-Open">
                  Phone : 0471-2991231, 8078079111</div>
              

                  <div className="">
                  <button
                    type="button  "
                    className=" rounded-lg  text-gray-900 px-2 py-1 mt-2 bg-white"
                    onClick={closeModal}
                  >
                    Got it!
                  </button>

                <div className=" sm:mt-0 mt-2">
   
                  </div>
            
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
