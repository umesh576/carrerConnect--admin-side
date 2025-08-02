import React from "react";

const DialogueBox = () => {
  return (
    <div>
      <div>
        <div>*</div>
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
