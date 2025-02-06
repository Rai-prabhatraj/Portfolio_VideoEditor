"use client";
import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import "./custom-styles.css"; // Import the custom CSS file

const ReactApp = () => {
  return (
    <WhatsAppWidget
      phoneNo="+916263585907"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      messageBox={true}
      iconSize="40"
      iconColor="white"
      iconBgColor="tomato"
      headerIcon="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv2s-HID0bj9gn7pxVkmkJHO1JjO6-0M5CMY670g8E58p3UWLmcL6hP6m9l4P6Yyd808lW7g0ZxydyyIDOSMn3t4gMHUEhn8Pw4_Lhp58xe2UTD6i5Gvt-7KgqohrXKuxxZNDE7b8e3sW1ymlg87rsZTJhA11TSVN8h1GSUdoAI94jVz9kpJ8IQUNVjlo/s1600/VFX%20By%20Suvajit%20-%20Logo.png"
      headerIconColor="pink"
      headerTxtColor="black"
      headerBgColor="tomato"
    />
  );
};

export default ReactApp;