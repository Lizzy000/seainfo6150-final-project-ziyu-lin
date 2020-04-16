import React from "react";
import styles from "./Comment.module.css";



const Comment = props => {
  return (

  <div>
    <h1>Comment</h1>
  	<form  method="POST">
        <fieldset>
            
            <div>
              <label for="full-name">
                Full name: <input type="text" id="full-name" name="full-name" required="required" />
              </label>
            </div>
            <div>
              <label for="email">
                Email: <input type="text" id="email" name="email" required="required" />
              </label>
            </div>
            <div>
                <label for="telephone">
                  Telephone:
                  <input type="text" id="telephone" name="telephone" />
                </label>
            </div>
            <div className={styles.gender}>
                <label>
                  Gender:
                </label>
                <label for="female">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    checked="checked"
                    value="female"
                  />
                  Female
                </label>
                <label for="male">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                  />
                  Male
                </label>
                <label for="others">
                  <input
                    type="radio"
                    id="others"
                    name="gender"
                    value="others"
                  />
                  Others
                </label>
                
            </div>
            <div>
                <label for="education">
                  Highest Education Level:
                  <select id="education">
                    <option value="High school">High school</option>
                    <option value="Some college">Some college</option>
                    <option value="Bachelors degree">Bachelors degree</option>
                    <option value="Masters degree">Masters degree</option>
                    <option value="Doctorate degree">Doctorate degree</option>
                  </select>
                </label>
            </div>
            <div>
                <label for="country">Country:</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
            </div>
            <textarea></textarea>
        	<input type="submit" />                           
        </fieldset>           
    </form>
  </div>
  );
};

export default Comment;