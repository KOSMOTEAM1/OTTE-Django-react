import React, { useState, useEffect} from 'react';
import Getboardtop from "./getboardTop";
import Posts from './getboardlist';
import Pagiation from './pagiation';
import axios from "axios";


const App = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() =>{
        const fetchPosts = async () =>{
            setLoading(true);
            const res = await axios.get('http://127.0.0.1:8000/board/');
            setPosts(res.data);
            setLoading(false);
            
        }
        fetchPosts();
    },[]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log(currentPosts)

    return (    
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div class="card">
                        <div class="product__page__title">
                            <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-8">
                                    <div class="section-title">
                                        <h4>조회수 상위 목록</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 여기까지 */}
                        <Getboardtop />
                        <div class="product__page__title">
                            <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-8">
                                    <div class="section-title">
                                        <h4>게시글 목록</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 여기까지 */}
                        <Posts posts={currentPosts} loading={loading}/>
                        <Pagiation postsPerPage={postsPerPage} totalPosts={posts.length} paginate = {paginate} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}
export default App;