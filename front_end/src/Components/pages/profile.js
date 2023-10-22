import React from "react";
import Header from "../layouts/Header";
import Content from "../sections/profile/content";
import Footer from "../layouts/Footer";

export default function Profile() {
  return (
    <div>
      <Header />
      <link rel="stylesheet" href="/css/dashboard.css"></link>

      <Content />
      <Footer />
    </div>
  );
}
