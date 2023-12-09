import React, { useState } from "react";

interface Tag {
  id: number;
  label: string;
}

const ChipInput: React.FC = () => {
  const [chips, setChips] = useState<Tag[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Funktion, um neue Chips hinzuzufügen
  const handleAddChip = (label: string) => {
    const newChip: Tag = { id: Date.now(), label };
    setChips([...chips, newChip]);
    setInputValue("");
  };

  // Funktion, um Chips zu entfernen
  const handleRemoveChip = (chipId: number) => {
    setChips(chips.filter((chip) => chip.id !== chipId));
  };

  // Funktion, die bei Tastendruck im Eingabefeld aufgerufen wird
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue) {
      handleAddChip(inputValue);
    }
  };

  return (
    <div className=" mt-6 mb-6 flex flex-wrap items-center gap-2 p-2 border rounded border-gray-300 py-2 px-4 w-full hover:border-gray-500">
      {chips.map((chip) => (
        <div
          key={chip.id}
          className="flex items-center justify-center gap-1 bg-red-400 text-white text-sm px-2 py-1 rounded "
        >
          <span>{chip.label}</span>
          <button
            type="button"
            onClick={() => handleRemoveChip(chip.id)}
            className="text-white text-l"
          >
            &times;
          </button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-4 outline-none inputWithAnimation"
        placeholder="Add Category"
        required
      />
    </div>
  );
};

export default ChipInput;
