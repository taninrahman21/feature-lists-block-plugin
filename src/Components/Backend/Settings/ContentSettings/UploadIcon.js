import { MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { produce } from 'immer';
import React from 'react';

const UploadIcon = ({ attributes, setAttributes, index }) => {
  const { items } = attributes;
  // Delete Icon Function
  const deleteIcon = (index) => {
    const newItems = produce(items, draft => {
      draft[index].icon.url = "";
    })
    setAttributes({ items: newItems });
  }
  return (
    <>
      {
        items[index].icon.url !== "" ? <div className='icon-container'>
          <img className='uploaded-icon' src={items[index].icon.url} />
          <Button className='delete-btn' onClick={() => deleteIcon(index)} icon={"trash"}></Button>
        </div> : <MediaUpload
        onSelect={(media) => {
          const newItems = produce(items, draft => {
            draft[index].icon.url = media.url;
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