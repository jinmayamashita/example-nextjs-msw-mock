export type Person = {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const db = [
  {
    id: "0",
    first_name: "Jiro",
    last_name: "Tachibana",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: "1",
    first_name: "Hisoka",
    last_name: "Yoshimura",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: "2",
    first_name: "Toshio",
    last_name: "Yoneda",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: "3",
    first_name: "Madoka",
    last_name: "Igarashi",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: "4",
    first_name: "Katsuo",
    last_name: "Matsui",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
  {
    id: "5",
    first_name: "Judy",
    last_name: "Nakamura",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
] as Person[];
