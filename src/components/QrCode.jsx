import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const MySwal = withReactContent(Swal)

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const generateQRCode = () => {
    if (text) {
      MySwal.fire({
        title: 'QR Code',
        html: (<div className="text-center"><QRCode className='mx-auto' value="${text}" /></div>),
        confirmButtonText: 'Fechar',
        confirmButtonColor: '#3B82F6'
      });
    } else {
      MySwal.fire('Erro', 'Digite um texto válido', 'error');
    }
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
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
         hover:bg-white duration-300 mb-8 p-2 border border-gray-300 rounded"
      />
      <button onClick={generateQRCode} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 
      hover:bg-indigo-500 duration-300 p-2 bg-blue-500 text-white rounded">
        Gerar QR Code
      </button>
    </div>
  );
}
