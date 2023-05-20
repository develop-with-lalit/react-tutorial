import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [meetupList, setMeetupList] = useState([]);
  const [loading, setloading] = useState();
  useEffect(() => {
    setloading(true);
    fetch(
      "https://next-react-summary-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetupData = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
        // console.log(meetupData);
        setMeetupList(meetupData);
        setloading(false);
      });
  }, []);

  return (
    <section>
      <h1> All Meetups </h1>
      {loading && <p>Loading</p>}
      {!loading && <MeetupList meetups={meetupList} />}
    </section>
  );
};

export default AllMeetupsPage;
