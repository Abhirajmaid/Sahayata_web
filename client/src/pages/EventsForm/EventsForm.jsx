import React, { useState } from "react";
import { eventsData } from "../../data/data";

const EventForm = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    id: "",
    eventName: "",
    subtitle: "",
    eventPoster: "",
    eventBanner: "",
    shortDescription: "",
    description: "",
    eventHost: "",
    date: "",
    dateWord: "",
    time: "",
    month: "",
    date_: "",
    location: "",
    entryFee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.eventName || !formData.date) {
      alert("Please fill in required fields!");
      return;
    }

    const newEvent = {
      ...formData,
      id: Math.random(),
      description: <div>{formData.description}</div>,
    };

    onAddEvent(newEvent);

    setFormData({
      id: "",
      eventName: "",
      subtitle: "",
      eventPoster: "",
      eventBanner: "",
      shortDescription: "",
      description: "",
      eventHost: "",
      date: "",
      dateWord: "",
      time: "",
      month: "",
      date_: "",
      location: "",
      entryFee: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-gray-100 rounded-lg">
      <div>
        <label className="block text-sm font-bold">Event Name:</label>
        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Subtitle:</label>
        <input
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Event Poster URL:</label>
        <input
          type="text"
          name="eventPoster"
          value={formData.eventPoster}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Event Banner URL:</label>
        <input
          type="text"
          name="eventBanner"
          value={formData.eventBanner}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Short Description:</label>
        <input
          type="text"
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Event Host:</label>
        <input
          type="text"
          name="eventHost"
          value={formData.eventHost}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Date:</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Date Word:</label>
        <input
          type="text"
          name="dateWord"
          value={formData.dateWord}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Time:</label>
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Month:</label>
        <input
          type="text"
          name="month"
          value={formData.month}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Day:</label>
        <input
          type="text"
          name="date_"
          value={formData.date_}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Entry Fee:</label>
        <input
          type="text"
          name="entryFee"
          value={formData.entryFee}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md">
        Add Event
      </button>
    </form>
  );
};

const EventsForm = () => {
  const [events, setEvents] = useState(eventsData);

  const addEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  return (
    <div className="p-4 space-y-8">
      <EventForm onAddEvent={addEvent} />
      <div>
        <h2 className="text-lg font-bold">Events List:</h2>
        <ul className="space-y-2">
          {events.map((event) => (
            <li key={event.id} className="p-2 border rounded-md">
              {event.eventName} - {event.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventsForm;
