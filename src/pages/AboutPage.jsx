function AboutPage() {
  const developers = [
    {
      id: 1,
      name: "Skatistics",
      github: "https://github.com/Skatistics",
      imgUrl: "https://avatars.githubusercontent.com/u/131618960?v=4",
    },
    {
      id: 2,
      name: "Seusuuu",
      github: "https://github.com/ZeusSantiago",
      imgUrl: "https://avatars.githubusercontent.com/u/163061179?v=4",
    },
    {
      id: 3,
      name: "Kyverus",
      github: "https://github.com/Kyverus",
      imgUrl: "https://avatars.githubusercontent.com/u/127189354?v=4",
    },
  ];

  return (
    <div className="px-6 md:px-0  md:container mx-auto pt-6 space-y-6 text-ct-light-browngrey-3C403D">
      <div className="w-full flex justify-center"></div>

      <div className="space-y-2">
        <span className="font-bold text-2xl">PROJECT DESCRIPTION</span>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className="space-y-2">
        <span className="font-bold text-2xl">DEVELOPERS</span>
        {developers.map((developer) => {
          return (
            <div
              className="bg-ct-cyan-283541 flex p-2 rounded-md"
              key={developer.id}
            >
              <img className="size-28" src={developer.imgUrl} alt="" />
              <div className="px-2 text-ct-white-f6f7f9">
                <div className="font-bold">{developer.name}</div>
                <div>
                  <a href={developer.github}>Github Profile</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutPage;
