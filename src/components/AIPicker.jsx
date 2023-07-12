import React from "react";

const AIPicker = () => {
  return (
    <div className="filepicker-container">
      <label htmlFor="file-upload" className="filepicker-label">
        1.點選調色盤圖標可以選擇T-shirt顏色
      </label>
      <label htmlFor="file-upload" className="filepicker-label">
        2.點選檔案圖標可以上傳自己的圖案，可以設定成logo或整件衣服的顏色
      </label>
      <label htmlFor="file-upload" className="filepicker-label">
        3.點選下方綠色衣服圖標，選擇是否顯示logo
      </label>
      <label htmlFor="file-upload" className="filepicker-label">
        4.點選下方黃色衣服圖標，選擇是否顯示整件衣服的顏色
      </label>
    </div>
  );
};

export default AIPicker;
