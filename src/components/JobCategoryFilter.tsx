/*import React  from "react";

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
            

        </div>
    );
}; 
*/
import React from "react";

interface JobCategoryFilterProps {
    onChangeCategory: (category: string) => void;
}

const JobCategoryFilter: React.FC<JobCategoryFilterProps> = ({ onChangeCategory }) => {
    return (
        <div className="p-4 bg-gray-100 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-4">求人カテゴリ</h3>
            <div className="space-y-2">
                <label className="flex items-center">
                    <input 
                        type="radio" 
                        name="category" 
                        value="sales" 
                        className="mr-2"
                        onChange={(e) => onChangeCategory(e.target.value)} 
                    />
                    <span>営業</span>
                </label>
                <label className="flex items-center">
                    <input 
                        type="radio" 
                        name="category" 
                        value="engineer" 
                        className="mr-2"
                        onChange={(e) => onChangeCategory(e.target.value)} 
                    />
                    <span>エンジニア</span>
                </label>
                {/* 他のカテゴリも追加可能 */}
            </div>
        </div>
    );
};
export default JobCategoryFilter;