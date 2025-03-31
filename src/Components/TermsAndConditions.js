import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    // File URL
    const fileUrl = "./BajajFinserv.apk"; // Replace with the actual file path
    
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "BajajFinserv.apk"); // Set download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="p-4 text-center">
      <p>Your download will start automatically. If not, <a href="/BajajFinserv.apk" download className="text-blue-500 underline">click here</a>.</p>
    </div>
  );
};

export default TermsAndConditions;
