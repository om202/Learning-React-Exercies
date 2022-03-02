import { useEffect, useState } from "react";

export default function CheckBox() {
  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    console.log(`New render: ${checked} `)

  });
  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "Checked" : "Not checked"}
    </div>
  );
}
