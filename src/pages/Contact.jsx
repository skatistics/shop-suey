function Contact() {
  const contactInfo = [
    {
      id: 1,
      name: "Scott Peña",
      linkedin: "https://www.linkedin.com/in/itsjoshuascott/",
    },
    {
      id: 2,
      name: "Grazeus Santiago",
      linkedin: "https://www.linkedin.com/in/grazeus-santiago/",
    },
    {
      id: 3,
      name: "Kirlian Pacibe",
      linkedin: "https://www.linkedin.com/in/kirlianpacibe12/",
    },
  ];

  return (
    <div className="md:container mx-auto pt-6 space-y-8">
      <div className="w-full flex justify-center"></div>

      <div className="lg:flex py-10 px-10 lg:items-center">
        <div className="lg:w-2/3 space-y-6">
          {contactInfo.map((contact) => {
            return (
              <div
                className="bg-ct-cyan-283541 flex p-2 rounded-md"
                key={contact.id}
              >
                <div className="px-2 text-ct-white-f6f7f9">
                  <div className="font-bold">{contact.name}</div>
                  <div>
                    <a href={contact.linkedin}>LinkedIn Profile</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
