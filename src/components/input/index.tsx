interface InputProps {
    value: string;
    onChange: (value: string) => void;
    id: string;
    placeHolderText?: string;
    disabled?: boolean;
}

const Input = ({
    value,
    onChange,
    id,
    placeHolderText,
    disabled = false
}: InputProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
      <div className="input">
          <label>
                <input style={{
                    border: '2px solid pink',
                    borderRadius: '6px',
                    height: '25px',
                    width: '250px',
                    padding: '6px'
                }} disabled={disabled} id={id} value={value} onChange={handleChange} placeholder={placeHolderText} />
            </label>
      </div>
    );
  }
  
  export default Input;
  