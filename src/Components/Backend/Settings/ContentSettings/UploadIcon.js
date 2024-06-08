import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { produce } from 'immer';
import React from 'react';

const UploadIcon = ({ attributes, setAttributes, index }) => {
  const { items } = attributes;
  // Delete Icon Function
  const deleteIcon = (index) => {
    const newItems = produce(items, draft => {
      draft[index].icon.imgUrl = "";
    })
    setAttributes({ items: newItems });
  }
  return (
    <>
      {
        items[index].icon.imgUrl !== "" ? <div className='icon-container'>
          <MediaUpload
            onSelect={(media) => {
              const newItems = produce(items, draft => {
                draft[index].icon.imgUrl = media.url;
              })
              setAttributes({ items: newItems });
            }}
            render={({ open }) => (
              <div>
                <img onClick={open} className='uploaded-icon' src={items[index].icon.imgUrl} />
              </div>
            )}
          ></MediaUpload>
          <Button className='delete-btn' onClick={() => deleteIcon(index)} icon={"trash"}></Button>
        </div> : <MediaUpload
          onSelect={(media) => {
            const newItems = produce(items, draft => {
              draft[index].icon.imgUrl = media.url;
            })
            setAttributes({ items: newItems });
          }}
          render={({ open }) => (
            <div style={{ backgroundColor: "#e7e7e7", padding: "30px", display: "flex", justifyContent: "center" }}>
              <Button onClick={open} isSecondary>Select Icon</Button>
            </div>
          )}
        ></MediaUpload>
      }

    </>
  );
};

export default UploadIcon;