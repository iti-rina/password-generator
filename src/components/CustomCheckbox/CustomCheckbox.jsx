const CustomCheckbox = ({ title, name, checked, onChange }) => {
  return (
    <label>
        {title}
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
      </label>
  );
}

export default CustomCheckbox;