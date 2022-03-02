import { useEffect, useState } from "react";

export default function InputBox() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  useEffect(()=>{
      console.log(`typing in input section: ${val} `)
  },[val])

  useEffect(()=>{
      console.log(`saved phrase: ${phrase}`)
  }, [phrase])

  return (
    <div>
      <label>Favourite phrase</label>
      <input
        type="text"
        value={val}
        placeholder={phrase}
        onChange={(e) => set(e.target.value)}
      />
      <button onClick={createPhrase}>Send</button>
    </div>
  );
}
