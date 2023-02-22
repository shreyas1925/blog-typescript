import { useState, useEffect } from "react";
import { Card, Footer, NavBar } from "../../Components";
import { GET_BLOG_DATA } from "../../constants/apiEndPoints";
import { BlogData } from "../../types";
import makeRequest from "../../utils/makeRequest";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

const Blog = (): JSX.Element => {
  const [data, setData] = useState<BlogData[]>();
  const navigate = useNavigate()
  useEffect(() => {
    makeRequest(GET_BLOG_DATA,{},navigate)
      .then((response) => {
        setData(response);
      })
      .catch((e) => {
        // setError(e.message);
      });
  }, []);

  console.log(data);

  return data ? (
    <div className="app--section">
      <div>
        <NavBar />
        <section>
          {
            <div className="app--blocks" data-testid="blog-card">
              {data.map((blogPost, index) => {
                return <Card key={index} blogData={blogPost} />;
              })}
            </div>
          }
        </section>
      </div>
      <Footer />
    </div>
  ) : (
    <h1>loading</h1>
  );
};

export default Blog;
