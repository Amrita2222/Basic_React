import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+[]{}~`';
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="h-screen w-full bg-gradient-to-r from-gray-800 via-black to-gray-900">
      <h1 className="text-4xl text-center text-white p-6 font-bold">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto p-6 bg-gray-700 rounded-lg shadow-lg">
        {/* Password Display */}
        <div className="mb-6">
          <h2 className="text-white text-lg mb-2">Generated Password:</h2>
          <div className="bg-gray-800 text-white p-4 rounded-lg flex justify-between items-center">
            <span>{password || "Your password will appear here"}</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => navigator.clipboard.writeText(password)}
            >
              Copy
            </button>
          </div>
        </div>

        {/* Options */}
        <div className="mb-4">
          <label className="text-white block mb-2">Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="mb-4 flex items-center gap-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
              className="mr-2"
            />
            Include Special Characters
          </label>
        </div>

        {/* Generate Button */}
        <button
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
