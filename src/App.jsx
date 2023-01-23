import { useState } from "react";
import "./App.css";
import ChangeGenre from "./components/ChangeGenre";
import ChangeReting from "./components/ChangeReting";
import SearchItem from "./components/SearchItem";

const arr = [
  {
    id: 1,
    title: "The Matrix",
    rating: 7.5,
    category: "Action",
    starArr: [
      {
        id: 1,
        src: "/icons/Star-black.svg",
      },
      {
        id: 2,
        src: "/icons/Star-black.svg",
      },
      {
        id: 3,
        src: "/icons/Star-black.svg",
      },
      {
        id: 4,
        src: "/icons/Star-black.svg",
      },
      {
        id: 5,
        src: "/icons/Star-black.svg",
      },
      {
        id: 6,
        src: "/icons/Star-black.svg",
      },
      {
        id: 7,
        src: "/icons/Star-black.svg",
      },
      {
        id: 8,
        src: "/icons/star-50.svg",
      },
      {
        id: 9,
        src: "/icons/Star-white.svg",
      },
      {
        id: 10,
        src: "/icons/Star-white.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Focus",
    rating: 6.9,
    category: "Comedy",
    starArr: [
      {
        id: 1,
        src: "/icons/Star-black.svg",
      },
      {
        id: 2,
        src: "/icons/Star-black.svg",
      },
      {
        id: 3,
        src: "/icons/Star-black.svg",
      },
      {
        id: 4,
        src: "/icons/Star-black.svg",
      },
      {
        id: 5,
        src: "/icons/Star-black.svg",
      },
      {
        id: 6,
        src: "/icons/Star-black.svg",
      },
      {
        id: 7,
        src: "/icons/star-50.svg",
      },
      {
        id: 8,
        src: "/icons/Star-white.svg",
      },
      {
        id: 9,
        src: "/icons/Star-white.svg",
      },
      {
        id: 10,
        src: "/icons/Star-white.svg",
      },
    ],
  },
  {
    id: 3,
    title: "The Lazarus Effect",
    rating: 6.4,
    category: "Thriller",
    starArr: [
      {
        id: 1,
        src: "/icons/Star-black.svg",
      },
      {
        id: 2,
        src: "/icons/Star-black.svg",
      },
      {
        id: 3,
        src: "/icons/Star-black.svg",
      },
      {
        id: 4,
        src: "/icons/Star-black.svg",
      },
      {
        id: 5,
        src: "/icons/Star-black.svg",
      },
      {
        id: 6,
        src: "/icons/Star-black.svg",
      },
      {
        id: 7,
        src: "/icons/star-50.svg",
      },
      {
        id: 8,
        src: "/icons/Star-white.svg",
      },
      {
        id: 9,
        src: "/icons/Star-white.svg",
      },
      {
        id: 10,
        src: "/icons/Star-white.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Everly",
    rating: 5.0,
    category: "Action",
    starArr: [
      {
        id: 1,
        src: "/icons/Star-black.svg",
      },
      {
        id: 2,
        src: "/icons/Star-black.svg",
      },
      {
        id: 3,
        src: "/icons/Star-black.svg",
      },
      {
        id: 4,
        src: "/icons/Star-black.svg",
      },
      {
        id: 5,
        src: "/icons/Star-black.svg",
      },
      {
        id: 6,
        src: "/icons/Star-white.svg",
      },
      {
        id: 7,
        src: "/icons/Star-white.svg",
      },
      {
        id: 8,
        src: "/icons/Star-white.svg",
      },
      {
        id: 9,
        src: "/icons/Star-white.svg",
      },
      {
        id: 10,
        src: "/icons/Star-white.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Maps to the Stars",
    rating: 7.5,
    category: "Drama",
    starArr: [
      {
        id: 1,
        src: "/icons/Star-black.svg",
      },
      {
        id: 2,
        src: "/icons/Star-black.svg",
      },
      {
        id: 3,
        src: "/icons/Star-black.svg",
      },
      {
        id: 4,
        src: "/icons/Star-black.svg",
      },
      {
        id: 5,
        src: "/icons/Star-black.svg",
      },
      {
        id: 6,
        src: "/icons/Star-black.svg",
      },
      {
        id: 7,
        src: "/icons/Star-black.svg",
      },
      {
        id: 8,
        src: "/icons/star-50.svg",
      },
      {
        id: 9,
        src: "/icons/Star-white.svg",
      },
      {
        id: 10,
        src: "/icons/Star-white.svg",
      },
    ],
  },
];

function App() {
  const [searchInt, setSearchInpt] = useState(false);
  const [retingSel, setRetingSel] = useState(false);
  const [ganreSel, setGanreSel] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [retingInfo, setRetingInfo] = useState("");
  const [ganreInfo, setGanreInfo] = useState("");

  console.log(retingInfo);

  const searching = (e) => {
    setSearchText(e.target.value);
  };

  const searchArr = arr.filter((item) => {
    let name = item.title.toLocaleLowerCase().trim();
    if (
      name.includes(searchText.toLocaleLowerCase().trim()) && retingSel
        ? +retingInfo === 0
        : ganreInfo === "any"
    ) {
      return item;
    }
    if (
      name.includes(searchText.toLocaleLowerCase().trim()) && retingSel
        ? Math.round(item.rating) === +retingInfo
        : item.category.toLocaleLowerCase() === ganreInfo
    ) {
      return item;
    }
  });

  return (
    <div className="App p-5 pr-3 flex flex-col gap-1 w-full">
      <div className="w-[98%] flex items-center gap-[13px] fixed top-5 left-5">
        <div className="w-full flex flex-col gap-1 relative">
          <input
            type="text"
            placeholder="Enter movie name"
            className="px-4 py-3 border w-full"
            onFocus={() => setSearchInpt(true)}
            onChange={searching}
          />
        </div>
        <div
          onClick={() => {
            setRetingSel(!retingSel);
            setGanreSel(false);
          }}
          className="flex items-center justify-between border w-[20%] cursor-pointer p-3"
        >
          <p>Rating</p>
          <img
            src="/icons/chevron-down.svg"
            className={retingSel ? "rotate-180" : "rotate-0"}
            alt=""
          />
        </div>
        <div
          onClick={() => {
            setGanreSel(!ganreSel);
            setRetingSel(false);
          }}
          className="flex items-center justify-between border w-[20%] cursor-pointer p-3"
        >
          <p>Genre</p>
          <img
            src="/icons/chevron-down.svg"
            className={ganreSel ? "rotate-180" : "rotate-0"}
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex items-center gap-[13px] mt-[60px] relative">
        {searchInt && searchArr.length > 0 ? (
          <div className="w-[69%] border flex p-4 flex-col gap-1 absolute top-0 left-0">
            {searchArr.map((item) => (
              <SearchItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="w-[69%] border flex p-4 flex-col gap-1 absolute top-0 left-0">
            {arr.map((item) => (
              <SearchItem key={item.id} item={item} />
            ))}
          </div>
        )}
        {retingSel ? <ChangeReting setRetingInfo={setRetingInfo} /> : null}
        {ganreSel ? <ChangeGenre setGanreInfo={setGanreInfo} /> : null}
      </div>
    </div>
  );
}

export default App;
