function InputText({
  name = "Label",
  placeholder = "",
  required = false,
  className = "",
  value = "",
  setValue,
  ...props
}) {
  return (
    <div
      // prettier-ignore
      className={`flex ${props.flexDirection ? props.flexDirection : "flex-row"} items-center`}
    >
      <label htmlFor={name} className="text-lg">
        {name[0].toUpperCase() + name.slice(1, name.length)}
      </label>

      <input
        required={required}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={props.type ? props.type : "text"}
        className={
          "outline-none border-orange-sempoa border-2 rounded-full text-lg px-4 py-2" +
          " " +
          className
        }
      />
    </div>
  )
}

export default InputText
