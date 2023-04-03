import React from "react";

import ThankYouIcon from "@/components/icons/icon-thank-you";

const CompleteForm = () => {
  return (
    <div className="my-auto grid place-items-center gap-6 text-center">
      <ThankYouIcon className={"h-[90px] w-[90px]"} />
      <span className="text-4xl font-bold text-primary-marine">Thank you!</span>
      <p className="text-secondary-cool">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgamin.com
      </p>
    </div>
  );
};

export default CompleteForm;
