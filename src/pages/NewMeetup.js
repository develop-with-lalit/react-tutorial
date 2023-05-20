import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();
  function handleAddMeetup(meetupData) {
    fetch(
      "https://next-react-summary-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
};

export default NewMeetupPage;
