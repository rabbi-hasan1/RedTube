import autoMobile from "../../assets/automobiles.png";
import blogs from "../../assets/blogs.png";
import entertainment from "../../assets/entertainment.png";
import gameIcon from "../../assets/game_icon.png";
import home from "../../assets/home.png";
import jack from "../../assets/jack.png";
import mgan from "../../assets/megan.png";
import music from "../../assets/music.png";
import news from "../../assets/news.png";
import simon from "../../assets/simon.png";
import sports from "../../assets/sports.png";
import tech from "../../assets/tech.png";
import tom from "../../assets/tom.png";

function Sidebar({ sidebar }) {
  const menuItems = [
    { icon: home, label: "Home" },
    { icon: gameIcon, label: "Game" },
    { icon: autoMobile, label: "Automobile" },
    { icon: sports, label: "Sports" },
    { icon: entertainment, label: "Entertainment" },
    { icon: tech, label: "Technology" },
    { icon: music, label: "Music" },
    { icon: blogs, label: "Blogs" },
    { icon: news, label: "News" },
  ];

  const subscriptions = [
    { image: jack, name: "Jackpin" },
    { image: simon, name: "SimonPack" },
    { image: tom, name: "Tomas" },
    { image: mgan, name: "MeganSoft" },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen bg-white
        pt-16 px-3 overflow-y-auto shadow-md
        transition-all duration-300 ease-in-out
        ${sidebar ? "w-52" : "w-18"}
      `}
    >
      <div className="space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="
              flex items-center gap-3
              p-3 rounded-xl cursor-pointer
              hover:bg-gray-100
              hover:scale-105
              transition-all duration-200
            "
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-6 h-6 shrink-0"
            />

            <span
              className={`
                whitespace-nowrap overflow-hidden
                transition-all duration-300
                ${
                  sidebar
                    ? "opacity-100 translate-x-0 w-auto"
                    : "opacity-0 -translate-x-3 w-0"
                }
              `}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <hr className="my-6 border-gray-300" />

      <div>
        <h3
          className={`
            font-semibold text-gray-800 mb-4
            transition-all duration-300
            ${
              sidebar
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-3 h-0 overflow-hidden mb-0"
            }
          `}
        >
          Subscribed
        </h3>

        <div className="space-y-2">
          {subscriptions.map((sub) => (
            <div
              key={sub.name}
              className="
                flex items-center gap-3
                p-2 rounded-xl cursor-pointer
                hover:bg-gray-100
                hover:scale-[1.03]
                transition-all duration-200
              "
            >
              <img
                src={sub.image}
                alt={sub.name}
                className="
                  w-9 h-9 rounded-full object-cover
                  ring-2 ring-transparent
                  hover:ring-red-400
                  transition-all duration-300
                "
              />

              <span
                className={`
                  whitespace-nowrap overflow-hidden
                  transition-all duration-300
                  ${
                    sidebar
                      ? "opacity-100 translate-x-0 w-auto"
                      : "opacity-0 -translate-x-3 w-0"
                  }
                `}
              >
                {sub.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
