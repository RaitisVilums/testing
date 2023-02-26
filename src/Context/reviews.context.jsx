import React, { createContext, useState } from "react";
import Notification from "../Components/Features/Popup/Notification/notification.popup";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    images: [],
    food: 0,
    overall: 0,
    interior: 0,
    service: 0,
    total: 0,
    pricePoint: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newFormState = { ...formState, [name]: value };

    if (name === "price") {
      newFormState.pricePoint = value;
    } else {
      const { food, overall, interior, service } = newFormState;
      const oldOverall = overall;
      const sum =
        parseInt(food) +
        parseInt(oldOverall) +
        parseInt(interior) +
        parseInt(service);
      const newOverall = sum / 4;
      newFormState = { ...newFormState, overall: newOverall };
    }

    setFormState(newFormState);
  };

  const handleImageUpload = (event) => {
    const uploadedFiles = event.target.files;
    const images = [...formState.images];

    for (let i = 0; i < uploadedFiles.length; i++) {
      images.push(uploadedFiles[i]);
    }

    setFormState((prevState) => ({ ...prevState, images }));
  };
  const handleSaveForm = () => {
    const timestamp = new Date().getTime();
    localStorage.setItem(`form-${timestamp}`, JSON.stringify(formState));
    setFormState({
      title: "",
      description: "",
      images: [],
      food: 0,
      overall: 0,
      interior: 0,
      service: 0,
      total: 0,
      pricePoint: "",
      message: "Your review has been posted!",
    });

    setTimeout(() => {
      setFormState((prevState) => ({ ...prevState, message: "" }));
    }, 2000);
  };

  const handleClearMessage = () => {
    setFormState((prevState) => ({ ...prevState, message: "" }));
  };

  const contextValue = {
    formState,
    handleInputChange,
    handleImageUpload,
    handleSaveForm,
  };

  return (
    <>
      {formState.message && (
        <Notification
          message={formState.message}
          onClearMessage={handleClearMessage}
        />
      )}
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>
    </>
  );
};
