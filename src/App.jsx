// style
import "./App.css";
import { useState } from "react";
// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/UserList";
// import NewUserForm from "./components/newuser/NewUserForm";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      image:
        "https://bannerplus.ru/files/img/pics/shisui-uchikha/shisui-uchikha-7.webp",
      firstName: "Shisui",
      lastName: "Uchiha",
      age: 18,
      from: "KONOXA",
      job: "Kotoamatsukami",
      gender: "Male",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmc88PffAo0Dkm8ESzfQZDOlvOpD2NtzKow&s",
      firstName: "Itachi",
      lastName: "Uchiha",
      age: 21,
      from: "KONOXA",
      job: "Mangekyo Sharingan",
      gender: "Male",
    },
    {
      id: 3,
      image:
        "https://w0.peakpx.com/wallpaper/878/815/HD-wallpaper-sasuke-uchiha-sasuke-uchiha-naruto-anime.jpg",
      firstName: " Sasuke",
      lastName: "Uchiha",
      age: 16,
      from: "KONOXA",
      job: "Mangekyo Sharingan,Eternal Mangekyo Sharingan,Rinnegan",
      gender: "Male",
    },
    {
      id: 4,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/l5bd5zk0/poster/0/9/p/medium-butcutnw14545-uchiha-madara-matte-finish-poster-butcute-original-imaggyssc8j8zzsa.jpeg?q=90&crop=false",
      firstName: " Madara",
      lastName: "Uchiha",
      age: 30,
      from: "KONOXA",
      job: "Mangekyo Sharingan,Eternal Mangekyo Sharingan,Rinnegan,Ten-Tails Jinchuriki",
      gender: "Male",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J8FqLyCNCnvSz3IS6ig3xZ7IBYTTvqIbVQ&s",
      firstName: " Obito",
      lastName: "Uchiha",
      age: 18,
      from: "KONOXA",
      job: "Mangekyo Sharingan,Sharingan and Rinnegan",
      gender: "Male",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/550x/bd/ff/81/bdff81d0333055b852f001fd9dd18a2a.jpg",
      firstName: " Izumi",
      lastName: "Uchiha",
      age: 17,
      from: "KONOXA",
      job: "Sharingan",
      gender: "Famale",
    },
    {
      id: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuP9_4Gi0gemp89UV7g8OzW5prbumApf3fQ&s",
      firstName: "Izuna",
      lastName: "Uchiha",
      age: 21,
      from: "KONOXA",
      job: "Mangekyo Sharingan",
      gender: "Male",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPN0EjTDIceGXONRl743US2csTB2Z7a7fS-A&s",
      firstName: "Indra",
      lastName: "Otsutsuki",
      age: 23,
      from: "KONOXA",
      job: "Mangekyo Sharingan, Rennegan",
      gender: "Male",
    },
    {
      id: 9,
      image:
        "https://pbs.twimg.com/profile_images/1601186283/image_400x400.jpg",
      firstName: "Fugaku",
      lastName: "Uchiha",
      age: 40,
      from: "KONOXA",
      job: "Sharingan, Mangekyo Sharingan",
      gender: "Male",
    },
    {
      id: 10,
      image:
        "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/68d80647-79ce-4380-83c5-764597be5797/width=700,original=false/19622-1687990012-score_9,%20score_8_up,%20score_7_up,%20source_anime,anime%20screencap,anime%20coloring,%20intricate%20details,_uncensored,_mature%20female,__mik.jpeg",
      firstName: "Mikoto",
      lastName: "Uchiha",
      age: 37,
      from: "KONOXA",
      job: "Sharingan",
      gender: "Famale",
    },
    {
      id: 11,
      image:
        "https://static.wikia.nocookie.net/8092eb0d-c39a-47d1-8149-c225dfab13cf/scale-to-width/755",
      firstName: "Kiyomi",
      lastName: "Uchiha",
      age: 20,
      from: "KONOXA",
      job: "Sharingan",
      gender: "Famale",
    },
    {
      id: 12,
      image:
        "https://i.pinimg.com/originals/8e/86/db/8e86dbcfc96c8532448f07891e0de425.jpg",
      firstName: "Naori",
      lastName: "Uchiha",
      age: 20,
      from: "KONOXA",
      job: "Mangekyo Sharingan",
      gender: "Famale",
    },
  ]);

  // delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  return (
    <div className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
