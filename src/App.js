import React from "react";
import Lists from "./components/Lists";

function App() {
  const footballPlayer = [
    {
      id: 1,
      name: "Ronaldo",
      job: "Nghề nghiệp: Cầu thủ",
      imgUrl:
        "https://i.pinimg.com/1200x/45/6d/29/456d29699d4b401044fdeefdcbf13272.jpg",
    },
    {
      id: 2,
      name: "Neymar",
      job: "Nghề nghiệp: Cầu thủ",
      imgUrl: "https://s.hs-data.com/bilder/spieler/gross/142105.jpg",
    },
    {
      id: 3,
      name: "Messi",
      job: "Nghề nghiệp: Cầu thủ",
      imgUrl:
        "https://img.a.transfermarkt.technology/portrait/big/28003-1710080339.jpg?lm=1",
    },
  ];

  const singers = [
    {
      id: 1,
      name: "MTP",
      job: "Nghề nghiệp: Ca sĩ",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png",
    },
    {
      id: 2,
      name: "Phan Manh Quynh",
      job: "Nghề nghiệp: Ca sĩ",
      imgUrl:
        "https://thanhnien.mediacdn.vn/Uploaded/thynhm/2022_09_28/phan-manh-quynh2-9648.jpg",
    },
    {
      id: 3,
      name: "Mr.Siro",
      job: "Nghề nghiệp: Ca sĩ",
      imgUrl:
        "https://yt3.googleusercontent.com/FzR9OHmncz0jxh6409kgAggDWpwvd56nYNcKEiDmT5kGQSfXg5xeUmWk6qsyoySP1CPFIK7SP2k=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <div className="App">
      <Lists title="Cầu thủ yêu thích" data={footballPlayer} />
      <Lists title="Ca sĩ yêu thích" data={singers} />
    </div>
  );
}

export default App;
