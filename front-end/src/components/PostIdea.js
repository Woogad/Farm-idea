import React from 'react'
import logo from '../asset/Image/logo.png';

import { useState } from 'react';

function PostIdea() {
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
    <div class=''>
      <div class='flex justify-center w-25 h-20'>
        <img src={logo} />
      </div>
      <div class='bg-green-900 ml-4 mr-4 mt-5 rounded-lg px-10 py-1'>
        <div class='flex justify-between ml-80 mr-80'>
          <div>
            <label class='text-slate-50'>ชื่อโปรเจค</label>
            <input type="text" class=" form-control block w-25 h-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="Name" />
          </div>
          <div>
            <label class='text-slate-50 '>จำนวนทุนที่ต้องการ</label>
            <input type="text" class=" form-control block w-25 h-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="Count" />
          </div>
        </div>
        <div class=''>
          <label class='bg-teal-400 px-5 py-10 rounded-lg hover:bg-green-600 hover:text-slate-50 font-bold'>เพิ่มรูปภาพ +
            <input class="hidden" id="file_input" type="file" multiple accept='image/*' onChange={onSelectFile} />
          </label>
        </div>
        <div class='flex justify-center'>
          <label class='text-slate-50'>Tag:</label>
          <input type="text" class=" form-control ml-1 w-25 h-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="#" />
        </div>
        <div class='grid grid-cols-5 mt-16 bg-green-900 ml-4 mr-4 '>

          {selectedImages.map((imageSrc) => (

            <div class='ml-5 mt-0 py-4 '>

              <button class='bg-red-400 text-slate-50 px-4 py-1 mt-0 hover:bg-red-700 absolute rounded-full' onClick={() => deleteHandler(imageSrc)}>
                ลบ
              </button>
              <img class='w-auto h-40' src={imageSrc} />
            </div>

          ))}
        </div>
      </div>
      <p class='ml-5 mt-10 text-2xl font-bold'>รายละเอียดไอเดีย</p>
      <form>
        <div class="ml-4 mr-4 py-2 px-4 mt-5 mb-5 rounded-t-lg bg-green-900">
          <textarea rows="10" class="px-0 w-full text-lg  bg-green-900 text-white placeholder-gray-400" placeholder="รายละเอียด..." ></textarea>
        </div>
        <div class="flex justify-center mr-10 mb-10">
        <button type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-lg leading-tight  rounded hover:bg-blue-700 hover:text-slate-50">โพสต์ไอเดีย</button>  
        </div>
      </form>

    </div>
  )
}

export default PostIdea;
