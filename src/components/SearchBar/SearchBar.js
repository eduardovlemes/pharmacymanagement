export default function SearchBar({ onChange, placeholder, value }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
