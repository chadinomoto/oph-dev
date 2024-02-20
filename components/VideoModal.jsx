// components/VideoModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

Modal.setAppElement('#__next'); // For accessibility

const VideoModal = ({ p,isOpen, onClose }) => {
    const disableScroll = (event) => {
        event.preventDefault();
    };
    useEffect(() => {
        // Disable scrolling when the component mounts
        window.addEventListener('scroll', disableScroll);
    
        // Re-enable scrolling when the component unmounts
        return () => {
          window.removeEventListener('scroll', disableScroll);
        };
      }, []);
    
    
  //   return (
  //       <Modal isOpen={isOpen} onRequestClose={onClose} className="z-20 fixed inset-0 flex justify-center items-center">
  //       <div className="p-4 rounded-lg shadow-lg w-fit">
            
  //           <button onClick={onClose} className="absolute top-12 right-2 text-red-600 hover:text-red-800">
  //           <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  //           </svg>
  //           </button>
  //           <div className="aspect-video md:w-[50vw]">
  //           <ReactPlayer url={p} controls={true} width="100%" height="100%" />
  //           </div>
  //       </div>
  //       </Modal>
  // );
};

export default VideoModal;
