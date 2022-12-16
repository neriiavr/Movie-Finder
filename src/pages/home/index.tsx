import { useState } from "react";

import Button from "../../components/button";
import Input from "../../components/input";

interface HomeProps {
  onSearch: ({}) => void;
}

const Home = ({ onSearch }: HomeProps) => {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const searchMovies = async () => {
    setIsLoading(true);

    const res = await fetch(`http://www.omdbapi.com/?apiKey=c56a78ca&t=${inputValue}`)

    res.json().then(data => onSearch(data))

    setIsLoading(false);
  }

  return (
    <form
      className="home-page"
      style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '20px',
        marginBottom: '40px'
      }}>
        <Input id={"home-search"} value={inputValue} onChange={setInputValue} placeHolderText={'Type Movie Name'} />

        <Button text={isLoading ? 'Loading...' : 'Search'} onClick={searchMovies} disabled={isLoading} />
    </form>
  );
}

export default Home;
