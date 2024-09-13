import React from "react";
import { useSelector } from "react-redux";
import { ToolBar } from "../../../utils/general";
import "./assets/fileexpo.scss";

export const WalrusBlobStorage = () => {
  const wnapp = useSelector((state) => state.apps.walrus);

  return (
    <div
      className="msfiles floatTab dpShad"
      data-size={wnapp.size}
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id={wnapp.icon + "App"}
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name={wnapp.name}
      />
      <div className="w-full flex justify-center bg-white-300">
        <div class="bg-white shadow-lg rounded-lg w-full max-w-[1280px] overflow-hidden">
          <div class="flex h-[calc(100vh-6rem)]">
            <div class="w-1/4 border-r p-4 flex flex-col">
              <div class="flex-grow overflow-y-auto custom-scrollbar">
                <div class="mb-4 p-2 border rounded hover:bg-gray-100 cursor-pointer">
                  dog_image_01.png
                </div>
                <div class="mb-4 p-2 border rounded hover:bg-gray-100 cursor-pointer">
                  dog_image_02.png
                </div>
              </div>
              <button class="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
                Upload
              </button>
            </div>

            <div class="w-3/4 p-4 flex flex-col">
              <div class="flex-grow flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                <img
                  src="https://source.unsplash.com/random/800x600?cat"
                  alt="Preview"
                  class="max-w-full max-h-full object-contain"
                />
              </div>
              <div class="mt-4">
                <div class="text-sm text-gray-600">
                  0x9091xhcklja09dfkllzkjs98
                </div>
                <div class="flex justify-between items-center mt-1">
                  <div>
                    <span class="font-semibold">cat_image</span>
                    <span class="text-sm text-gray-500 ml-2">12/09/2024</span>
                  </div>
                  <div class="text-sm text-gray-500">Type: PNG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
