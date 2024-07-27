import Icon from '../Icon/Icon'

interface SearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const SearchBar = ({ onChange, placeholder }: SearchBarProps) => {
  return (
    <div className="relative flex items-center">
      <Icon id="search" className="absolute -left-10 text-submarine" />
      <input
        type="search"
        onChange={(event) => onChange(event)}
        placeholder={placeholder}
        className="search-input h-12 w-full max-w-[445px] rounded-md border-2 border-charcoal bg-black px-4 text-white placeholder-[#9E9E9E] focus:border-java focus:outline-none"
      />
    </div>
  )
}

export default SearchBar
