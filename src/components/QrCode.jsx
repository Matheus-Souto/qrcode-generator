import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';

export default function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const generateQRCode = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6">Gerador de QR Code</h1>
      <input
        type="text"
        placeholder="Insira o texto"
        value={text}
        onChange={handleTextChange}
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 mb-8 p-2 border border-gray-300 rounded"
      />
      <button onClick={generateQRCode} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 bg-blue-500 text-white rounded">
        Gerar QR Code
      </button>

      {showModal && (
        <div
          ref={modalRef}
          onClick={handleModalClick}
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
        >
          <div className="flex flex-col justify-around items-center bg-white p-4 rounded w-96 h-96">
            <h2 className='text-4xl font-bold'>QRCode</h2>
            <QRCode value={text} />
            <div className='flex justify-center'>
              <button onClick={closeModal} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-4 p-2 bg-blue-500 text-white rounded">
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
