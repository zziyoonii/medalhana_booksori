import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-2 px-4 border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/img/booksori_logo.png" 
            alt="북소리 로고" 
            className="logo"
            style={{ width: '200px', height: 'auto', maxWidth: '100%' }}
          />
          <h1 className="text-xl font-bold text-primary md:text-2xl">북소리</h1>
        </div>
        <p className="text-xs text-gray-600 hidden sm:block md:text-sm">
          우리 동네 도서관 책을 한눈에
        </p>
      </div>
    </header>
  );
};

export default Header; 