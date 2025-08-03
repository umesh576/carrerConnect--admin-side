import React, { useState } from "react";

const DialogueBox = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="w-full h-screen bg-gray-400">
      <div>
        <div>❌</div>
        <div>
          <div>
            <input type="date" name="interviewDate" id="interviewDate " />
          </div>
          <div>
            <input type="time" name="interviewTime" id="interviewTime" />
          </div>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </div>
    </div>
  );
};

export default DialogueBox;
