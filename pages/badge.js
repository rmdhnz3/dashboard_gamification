export default function Badge() {
    return (
        <div className='container mx-auto px-10 mt-8 mb-8 py-4'>
            <div className='bg-white rounded-lg w-full h-full px-8 py-8 text-center'>
                <div className='bg-cyan-900 rounded lg w-full h-full px-8 py-12 flex justify-center items-center'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 w-full'>
                        <div className="col-span-2 flex justify-center">
                            <div className="bg-white rounded-lg w-40 h-60 px-4 py-4 grid flex justify-center">
                                <div class="rounded-full bg-gray-200 flex items-center justify-center font-mono w-30 h-30 lg:w-28 lg:h-28"></div>
                                <div class="rounded-md bg-gray-200 font-mono w-30 h-5 lg:w-30 lg:h-5"></div>
                                <button class="block text-cyan-900 bg-white outline outline-cyan-900 outline-2 hover:text-white hover:bg-cyan-900 transition duration-300 mt-2 font-medium rounded-lg text-sm px-2 py-1 text-center" type="button" data-modal-toggle="defaultModal">
                                    See more
                                </button>                                
                            </div>
                        </div>
                        <div className="col-span-2 flex justify-center">
                            <div className="bg-white rounded-lg w-40 h-60 px-4 py-4">
                            {/* <div class="rounded-full bg-gray-200 flex items-center justify-center font-mono w-32 h-32 lg:w-20 lg:h-20"></div> */}
                            </div>
                        </div>
                        <div className="col-span-2 flex justify-center">
                            <div className="bg-white rounded-lg w-40 h-60 px-4 py-4">
                            {/* <div class="rounded-full bg-gray-200 flex items-center justify-center font-mono w-32 h-32 lg:w-20 lg:h-20"></div> */}
                            </div>
                        </div>
                        <div className="col-span-2 flex justify-center">
                            <div className="bg-white rounded-lg w-40 h-60 px-4 py-4">
                            {/* <div class="rounded-full bg-gray-200 flex items-center justify-center font-mono w-32 h-32 lg:w-20 lg:h-20"></div> */}
                            </div>
                        </div>
                        <div className="col-span-2 flex justify-center">
                            <div className="bg-white rounded-lg w-40 h-60 px-4 py-4">
                            {/* <div class="rounded-full bg-gray-200 flex items-center justify-center font-mono w-32 h-32 lg:w-20 lg:h-20"></div> */}
                            </div>
                        </div>
                        <div className="col-span-2 flex justify-center">
                            <div className="bg-white rounded-lg w-40 h-60 px-4 py-4">
                            {/* <div class="rounded-full bg-gray-200 flex items-center justify-center font-mono w-32 h-32 lg:w-20 lg:h-20"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}