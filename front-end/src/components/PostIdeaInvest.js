import React from 'react'
import { useState } from 'react';

function PostIdeaInvest() {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <div className=''>
      <div className='bg-lime-600 ml-4 mr-4 mt-5 rounded-lg px-10 py-1'>
        <div className='flex justify-between ml-80 mr-80'>
          <div>
            <label className='text-slate-50'>ชื่อโปรเจค</label>
            <input type="text" className=" form-control block w-25 h-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="Name" />
          </div>
          <div>
            <label className='text-slate-50 '>จำนวนทุนที่ต้องการ</label>
            <input type="text" className=" form-control block w-25 h-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="Count" />
          </div>
        </div>
        <div className=''>
          <label className='bg-teal-400 px-5 py-10 rounded-lg hover:bg-green-600 hover:text-slate-50 font-bold'>เพิ่มรูปภาพ +
            <input className="hidden" id="file_input" type="file" multiple accept='image/*' onChange={onSelectFile} />
          </label>
        </div>
        <div className='flex justify-center'>
          <label className='text-slate-50'>Tag:</label>
          <input type="text" className=" form-control ml-1 w-25 h-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="#" />
        </div>
        <div className='grid grid-cols-5 mt-16 bg-green-900 ml-4 mr-4 '>

          {selectedImages.map((imageSrc) => (

            <div className='ml-5 mt-0 py-4 '>

              <button className='bg-red-400 text-slate-50 px-4 py-1 mt-0 hover:bg-red-700 absolute rounded-full' onClick={() => deleteHandler(imageSrc)}>
                ลบ
              </button>
              <img className='w-auto h-40' src={imageSrc} alt="img" />
            </div>

          ))}
        </div>
      </div>
      <p className='ml-5 mt-10 text-2xl font-bold'>รายละเอียดไอเดีย</p>
      <form>
        <div className="ml-4 mr-4 py-2 px-4 mt-5 mb-5 rounded-t-lg bg-lime-00">
          <textarea rows="10" className="px-0 w-full text-lg  bg-green-900 text-white placeholder-gray-400" placeholder="รายละเอียด..." ></textarea>
        </div>
        <div className="flex justify-center mr-10 mb-10">
          <button type="button" className="inline-block px-6 py-2 border-2 border-gray-900 text-gray-900 font-medium text-lg leading-tight  rounded hover:bg-blue-700 hover:text-slate-50">โพสต์ไอเดีย</button>
        </div>
      </form>

    </div>
  )
}

export default PostIdeaInvest;
