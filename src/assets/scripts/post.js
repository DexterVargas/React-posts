
import LuffyImage from "../images/luffy.png";
import ZoroImage from "../images/zoro.png";
import SanjiImage from "../images/sanji.png";
import "../stylesheets/index.css"

const posts = [
                {
                    name: 'Monkey D. luffy',
                    post: 'React is amazing! gohan mada🍛? niku!🍖',
                    created_at: new Date().toLocaleString(),
                    img_url: LuffyImage
                },
                {
                    name: 'Roronoa Zoro',
                    post: 'This website is cool! I am too..& sake🍶',
                    created_at: new Date().toLocaleString(),
                    img_url: ZoroImage
                },
                {
                    name: 'Vinsmoke Sanji',
                    post: 'I love ReactJS! & gurls😍',
                    created_at: new Date().toLocaleString(),
                    img_url: SanjiImage
                }
                ];
export default posts