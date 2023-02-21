import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export const Form = ({ onSubmit }) => {
  const [searchedValue, setSearchedValue] = useState('');

  const handleSearch = evt => {
    setSearchedValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const query = searchedValue.trim().toLowerCase();
    if (!query) return;

    onSubmit(query);
    setSearchedValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <button>
        <BsSearch size={15} />
      </button>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchedValue}
        onChange={handleSearch}
      />
    </form>
  );
};
