import React from "react";



const Comment = props => {
  return (
  	<form  method="POST">
        <fieldset>
            <legend>Message Board</legend>
            <div>
              <label for="full-name">
                Full name: <input type="text" id="full-name" name="full-name" />
              </label>
            </div>
            <div>
              <label for="email">
                Email: <input type="text" id="email" name="email" required="required" />
              </label>
            </div>
            <textarea></textarea>
        	<input type="submit" />                           
        </fieldset>           
    </form>
  );
};

export default Comment;