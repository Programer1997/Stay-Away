import React, { useContext, useState } from "react";
import ProfileNav from "../../components/profileNav/ProfileNav";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../context/authContext.js";
import GetStarted from "../../components/componentsProfile/getStarted.jsx";
import BenefitsBecomeHost from "../../components/componentsProfile/benefitsBecomeHost.jsx";
import NewProperty from "../../components/componentsProfile/newProperty.jsx";

export default function BecomeHost() {
  const { user, dispatch } = useContext(AuthContext);
  //console.log(user);
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <ProfileNav />
      <GetStarted
        firstName={user.details.firstName}
        lastName={user.details.lastName}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      {showForm ? (
        <NewProperty showForm={showForm} setShowForm={setShowForm} />
      ) : null}
      <BenefitsBecomeHost />
      <Footer />
    </>
  );
}
