import ArtDisplay from "../components/ArtDisplayComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import HistoryEvent from "../components/HistoryDisplayComponent";
import Pinboard from "../components/PinboardComponent";

const Home = () => {
  const defaultYear = new Date().getFullYear() - 100;
  const [historyEvent, setHistoryEvent] = useState(null);
  const [artPiece, setArtPiece] = useState(null);
  const [userInput, setUserInput] = useState(defaultYear.toString());
  const [pinnedItems, setPinnedItems] = useState(() => {
    // Load saved items from localStorage if available
    const saved = localStorage.getItem("pinnedItems");
    return saved ? JSON.parse(saved) : [];
  });

  // Function to fetch new event and art piece
  const refreshContent = (year) => {
    // fetch artPiece
    axios
      .get(`met/random/${year}`)
      .then((response) => setArtPiece(response.data))
      .catch((error) => console.error("Error fetching art piece", error));

    // fetch history Event
    axios
      .get(`history/random/${year}`)
      .then((response) => setHistoryEvent(response.data))
      .catch((error) => console.error("Error fetching fact", error));
  };

  // Initial fetch on component mount
  useEffect(() => {
    refreshContent(defaultYear); // Initial fetch on component mount
  }, []);

  // fetch pins from local storage
  useEffect(() => {
    localStorage.setItem("pinnedItems", JSON.stringify(pinnedItems));
  });

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleUserInput = () => {
    refreshContent(userInput);
  };

  const pinHistory = (event) => {
    let id = event.event;
    if (!pinnedItems.some((item) => item.id === id)) {
      setPinnedItems((prevItems) => [
        ...prevItems,
        {
          id: id,
          title: `${event.year} event`,
          content: event.event,
        },
      ]);
    }
  };

  const pinArt = (art) => {
    if (!pinnedItems.some((item) => item.id === art.id)) {
      setPinnedItems((prevItems) => [
        ...prevItems,
        {
          id: art.id,
          title: `${art.year} art piece`,
          content: art.title,
          link: art.url,
        },
      ]);
    }
  };

  const removePin = (idToRemove) => {
    setPinnedItems((prevItems) =>
      prevItems.filter((item) => item.id !== idToRemove)
    );
  };

  return (
    <div className="main-box">
  

      {/* History Event Box */}
      <div id="items-container">
        <div className="item-box">
          <HistoryEvent data={historyEvent} />
          <button
            className="action-button"
            onClick={() => pinHistory(historyEvent)}
          >
            Pin History Event
          </button>
        </div>

        {/* Year Input Box */}
        <div className="item-box">
          <label htmlFor="yearInput">Enter a Year:</label>
          <input
            id="yearInput"
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter a year..."
          />
          <button className="action-button" onClick={handleUserInput}>
            Submit
          </button>
        </div>

        {/* Art Box */}
        <div className="item-box">
          <ArtDisplay data={artPiece} />
          <button className="action-button" onClick={() => pinArt(artPiece)}>
            Pin Art Piece
          </button>
        </div>
      </div>
          {/* Cork Board */}
          <Pinboard items={pinnedItems} removePinFunc={removePin} />
      {/* <img src="/media/pictures/ChildrenIGuess.png" alt="Placeholder" /> */}
    </div>
  );
};

export default Home;
