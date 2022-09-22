export default function SearchBar({ onChange, placeholder, value }) {
  return (
    <>
      <input
        className="search-bar"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
