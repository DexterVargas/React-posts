import LuffyImage from "./assets/images/luffy.png";
import ZoroImage from "./assets/images/zoro.png";
import SanjiImage from "./assets/images/sanji.png";

import "./assets/stylesheets/index.css"
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


export default function UserPostFunc() {
    let post = [];
    post.push(<div className='version'><h1>Function-based</h1></div>);
    for (let i = 0; i < posts.length; i++) {
        post.push(
            <div key = {i} className='post-container'>
                <img src={posts[i].img_url} alt={posts[i].name} className='posts-img'/>
                <div className='name-container'>
                    <h1>{posts[i].name} <span>{posts[i].created_at} </span></h1>
                    <h2>{posts[i].post}</h2>
                </div>
            </div>
        );
    }
    return post;
}
