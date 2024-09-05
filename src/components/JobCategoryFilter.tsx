import React  from "react";

const JobCategoryFilter: React.FC = () => {
    return (
        <div className="p-4 bg-gray-100 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-4">求人カテゴリ</h3>
            <div className="space-y-2">
                <label className="flex items-center">
                    <input type="checkbox" value="sales" className="mr-2"/>
                    <span>営業</span>
                </label>
                <label>
                    <input type="checkbox" value="engineer" className="mr-2" />
                    <span>エンジニア</span>
                </label>
            </div>
            {/* 他のカテゴリも追加出来ます　*/}

        </div>
    );
};
export default JobCategoryFilter;