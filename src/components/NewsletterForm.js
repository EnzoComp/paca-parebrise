import React from "react";

const NewsletterForm = () => {
  return (
    <form className="flex-1 flex flex-col items-start w-full gap-y-6 mb-10 lg:mb-0">
      <div className="lg:flex lg:flex-row lg:gap-x-10">
        <input
          className="input text-base text-white placeholder:text-white placeholder:text-base"
          type="email"
          placeholder="Entrer votre email"
          required
        />
        <input
          className="input text-base text-white placeholder:text-white placeholder:text-base"
          type="text"
          placeholder="Entrer votre Nom"
          required
        />
      </div>
      <textarea
        rows="4"
        className="input text-base text-white placeholder:text-white placeholder:text-base max-h-[150px]"
        type="text"
        placeholder="Entrer votre Message"
        required
      />
      <button className="btn bg-white text-darkblue px-8 hover:bg-white/70">
        Envoyer
      </button>
    </form>
  );
};

export default NewsletterForm;
