import React from "react";
import toast from "react-hot-toast";

export default function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("Users");
    toast.success("Logout Successfully");
    setTimeout(() => {
      window.location.reload();
    },1000);
  };
  return (
    <>
      <div>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
}
