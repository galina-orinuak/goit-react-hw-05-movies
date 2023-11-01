import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchingForm = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const onHandleChange = evt => {
    setQuery(evt.currentTarget.value);
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast('пустий рядок');
      setQuery('');
      return;
    }
    onSubmit(query);
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <form className="form" onSubmit={onHandleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={onHandleChange}
        />
      </form>
    </>
  );
};
