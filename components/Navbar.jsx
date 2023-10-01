import Link from "next/link";

function Navbar() {
  const links = [
    {
      id: 1,
      link: "Home",
      url: "/",
      active: true,
    },
    {
      id: 2,
      link: "Orders",
      url: "/",
      active: false,
    },
    {
      id: 3,
      link: "Premium",
      url: "/",
      active: false,
    },
    {
      id: 4,
      link: "Become a partner",
      url: "/",
      active: false,
    },
  ];
  return (
    <>
      <div className="w-full shadow-md z-50 fixed top-0 left-0 bg-black py-1 md:py-2">
        <div className="w-[90%] flex justify-between items-center mx-auto">
          <div className="text-3xl text-white py-2 px-1 font-bold font-mono">
            000
          </div>
          <nav className="mr-3">
            <ul className="flex items-center justify-evenly space-x-2 md:space-x-5 lg:spacee-x-8">
              {links.map(({ id, link, url, active }) => (
                <Link
                  key={id}
                  className="group relative flex flex-col items-center justify-center"
                  href={url}
                >
                  <li
                    className={`text-right sm:text-base font-semibold px-1 py-2 ${active ? 'text-yellow-400' : 'text-white'} first-line:duration-200 cursor-pointer`}
                  >
                    {link}
                  </li>
                  <span className="absolute group-hover:duration-300 -left-0 opacity-0 w-16 group-hover:left-1/2 -translate-x-1/2 group-hover:opacity-100 mx-auto h-1 border-2 bottom-0 border-yellow-400" />
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
