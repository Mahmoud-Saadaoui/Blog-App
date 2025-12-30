import "./skeleton.css";

const CategorySkeleton = () => {
    return (
        <div className="skeleton-container">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div key={item} className="skeleton-loader"></div>
            ))}
        </div>
    );
};

export default CategorySkeleton;
