import "./search-box.style.css"

export const SearchBox = ({ placeholder, handleChange, searchString }) => {
  return (
    <input
      className="search"
      type="search"
      value={searchString}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}
