interface ButtonProps {
  text?: string;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({
  text = 'Submit',
  onClick,
  disabled
}: ButtonProps) => {
  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    onClick()
  }
  const buttonStyle = {
    border: '1px solid white',
    borderRadius: '4px',
    backgroundColor: 'pink',
    padding: '10px',
    color: 'white',
    cursor: 'pointer',
  }

  if (disabled) {
    buttonStyle.backgroundColor = 'black'
  }

  return (
    <button onClick={handleClick} 
            style={buttonStyle}
            disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
