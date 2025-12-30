import { Link } from "react-router-dom";
import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../redux/apiCalls/categoryApiCall";
import CategorySkeleton from "../skeleton/CategorySkeleton";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="sidebar">
        <h5 className="sidebar-title">CATEGORIES</h5>
        <CategorySkeleton />
      </div>
    );
  }

  if (categories?.length === 0) {
    return (
      <div className="sidebar">
        <h5 className="sidebar-title">CATEGORIES</h5>
        <div className="sidebar-no-categories">No categories found</div>
      </div>
    )
  }

  return (
    <div className="sidebar">
      <h5 className="sidebar-title">CATEGORIES</h5>
      <ul className="sidebar-links">
        {categories?.map((category) => (
          <Link
            className="sidebar-link"
            key={category._id}
            to={`/posts/categories/${category.title}`}
          >
            {category.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
