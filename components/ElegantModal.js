
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const bg = {
  color: "#f5f6fa"
}

const Zindex =
{
  zIndex: 400
}
export default function ElegantModal(props) {
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
        className="text-center text-white text-xl lg:text-2xl border-b-2"
      >
        View More
      </button>




      <Transition appear show={isOpen} transition={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-scroll"  style={Zindex}
          onClose={closeModal}
        >
          <div className="max-h-screen z-50 px-4 text-center"  >
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
              className="inline-block  h-screen align-middle"
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
              <div className="inline-block md:h-auto md:w-auto w-full h-full z-50  lg:p-6 lg:my-20  overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-xl bg-white bg-opacity-10  shadow-14xl relative   border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-2xl  "  >
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

                <div className="mt-2">


                  <div className="grid sm:gap-4 sm:grid-cols-4 md:grid-cols-4  grid-cols-2  p-2 lg:p-4   lg:gap-8  justify-center">

                    <div className="    flex justify-center items-center flex-col  text-white font-semibold hover:transform scale-75 md:mt-4 lg:mt-8 mb-2 "> <img className=" shadow-xl max-w-4xl rounded-full h-20 w-20   object-cover  lg:w-36 lg:h-36" src="../images/Pi7compressedTreehouse-min.jpg" ></img><p className=" pt-2 text-xs md:text sm text-center break-normal lg:text-sm">Tree House</p></div>
                    <div className="   pt-4 flex justify-center items-center flex-col  text-white font-semibold hover:transform scale-75 md:mt-4 lg:mt-8 mb-2 "> <img className=" shadow-xl max-w-4xl rounded-full h-20 w-20 object-cover  lg:w-36 lg:h-36" src="../images/Pi7compressednature..jpg" ></img><p className="  text-xs md-text sm text-center break-normal lg:text-sm">Work from <br /> Nature  Zone</p></div>
                    <div className="    flex justify-center items-center flex-col  text-white font-semibold hover:transform scale-75 md:mt-4 lg:mt-8 mb-2 "> <img className=" shadow-xl max-w-4xl rounded-full h-20 w-20 object-cover  lg:w-36 lg:h-36" src="../images/Pi7compressedPond&waterfall.jpg" ></img><p className=" pt-2 text-xs md:text sm text-center break-normal lg:text-sm">Recreational Pond <br /> and waterfall</p></div>
                    <div className="    flex justify-center items-center flex-col  text-white font-semibold hover:transform scale-75 md:mt-4 lg:mt-8 mb-2 "> <img className=" shadow-xl max-w-4xl rounded-full h-20 w-20 object-cover  lg:w-36 lg:h-36" src="../images/build.jpg" ></img><p className=" pt-2 text-xs md-text sm text-center break-normal lg:text-sm">Only 33% building <br />Footprint</p></div>
                    <div className="    flex justify-center items-center flex-col  text-white font-semibold hover:transform scale-75 md:mt-4 lg:mt-8 mb-2 "> <img className=" shadow-xl max-w-4xl rounded-full h-20 w-20 object-cover  lg:w-36 lg:h-36" src="../images/Pi7compressedInfinitypond.jpg" ></img><p className=" pt-2 text-xs md:text sm text-center break-normal lg:text-sm">Infinity Pond and <br /> Sunset Deck</p></div>
                    <div className="    flex justify-center items-center flex-col  text-white font-semibold hover:transform scale-75 md:mt-4 lg:mt-8 mb-2 "> <img className=" shadow-xl max-w-4xl rounded-full h-20 w-20 object-cover  lg:w-36 lg:h-36" src="../images/Pi7compressedmiawakiforest.jpg" ></img><p className=" pt-2 text-xs md-:ext sm text-center break-normal lg:text-sm">Miawaki Fruit <br />Forest</p></div>
                    <div className="    flex justify-center items-center flex-col  text-white font-semibold hover:transform scale-75 md:mt-4 lg:mt-8 mb-2 "> <img className=" shadow-xl max-w-4xl rounded-full h-20 w-20 object-cover  lg:w-36 lg:h-36" src="../images/Pi7compressedclubhouse.jpg" ></img><p className=" pt-2 text-xs md:text sm text-center break-normal lg:text-sm">Fully Equipped Club House <br /> and waterfall</p></div>
                    <div className="    flex justify-center items-center flex-col  text-white font-semibold hover:transform scale-75 md:mt-4 lg:mt-8 "> <img className=" shadow-xl max-w-4xl rounded-full h-20 w-20  object-cover  lg:w-36 lg:h-36 contrast-200 saturate-125" src="../images/transplanted.jpg" ></img><p className=" pt-2 text-xs md:text sm text-center break-normal lg:text-sm">20 + Transplanted <br /> Elder Trees</p></div>

                <div className=" sm:mt-0 mt-2">
                       <button
                    type="button"
                    className="inline-flex justify-center left-10 sm:left-0 sm:ml-10  mb-4  px-4 py-2 text-xs md:text-sm font-medium  text-white border border-transparent bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-xl rounded-full hover:opacity-70 focus:outline-none"
                    onClick={closeModal}
                  >
                    Got it!
                  </button>
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
