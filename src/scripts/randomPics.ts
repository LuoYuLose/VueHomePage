const pics:string[] = [
    './assets/HeadPic/Hikari.jpg',
    './assets/HeadPic/Reisa.jpg',
];

let pic = pics[Math.floor(Math.random() * pics.length)];

export function picOutput() {
    return pic;
}
