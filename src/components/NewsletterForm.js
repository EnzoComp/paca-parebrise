import React, { useRef, useState } from "react";

// import emailjs
import emailjs from "@emailjs/browser";

const NewsletterForm = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k9ye4dc", "template_6alist2", form.current, {
        publicKey: "fB7ZsS8Im3PK96w35",
      })
      .then(
        () => {
          setMessage("Votre message a été envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          setMessage(
            "L'envoi du message a échoué. Veuillez réessayer plus tard."
          );
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex-1 flex flex-col items-start w-full gap-y-6 mb-10 lg:mb-0"
      >
        <div className="lg:flex lg:flex-row lg:gap-x-10">
          <input
            className="input text-base text-white placeholder:text-white placeholder:text-base"
            type="email"
            name="user_mail"
            placeholder="Entrer votre email"
            required
          />
          <input
            className="input text-base text-white placeholder:text-white placeholder:text-base"
            type="text"
            name="user_name"
            placeholder="Entrer votre Nom"
            required
          />
        </div>
        <textarea
          rows="4"
          className="input text-base text-white placeholder:text-white placeholder:text-base max-h-[150px]"
          type="text"
          name="message"
          placeholder="Entrer votre Message"
          required
        />
        <button
          type="submit"
          value="Send"
          className="btn bg-white text-darkblue px-8 hover:bg-white/70"
        >
          Envoyer
        </button>
      </form>
      {message !== "" && (
        <p className="mt-4 text-white text-[20px]">{message}</p>
      )}
    </div>
  );
};

export default NewsletterForm;
