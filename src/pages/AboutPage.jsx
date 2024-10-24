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
    <div className="px-6 md:px-0  md:container mx-auto pt-6 space-y-6 text-ct-222824 dark:text-ct-F2F7F2">
      <div className="w-full flex justify-center"></div>

      <div className="space-y-2">
        <span className="font-bold text-2xl">PROJECT DESCRIPTION</span>
        <div>
          With a fusion of the newest technology, the Shopsuey eCommerce website
          offers a smooth and user-friendly online buying experience.
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
