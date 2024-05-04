import React from 'react';
import { useState } from 'react';

const Sidebar = ({ handleSearch, sortByComments, sortByDate, sortByName, removeSort }) => {


    const [inputValue, setInputValue] = useState('');

    const onSearchClick = () => {
        handleSearch(inputValue);  // Call the search handler with the current input value
    };

    return (
        <div className="col-lg-4">
            <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                <form action="#" onSubmit={handleSearch}>
                    <div className="form-group">
                        <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Search Keyword'
                            onFocus={(e) => e.target.placeholder = ''}
                            onBlur={(e) => e.target.placeholder = 'Search Keyword'}
                        />
                        </div>
                    </div>
                    <button
                        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                    >
                        Search
                    </button>
                    </form>
                </aside>

                <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Filter</h4>
                    <div className="radio-buttons">
                                <input type="radio" id="removeSort" name="sortOption" value="removeSort" onChange={removeSort} />
                                <label htmlFor="removeSort">Get Default</label>
                                <br/>
                                <input type="radio" id="sortByComments" name="sortOption" value="sortByComments" onChange={sortByComments} />
                                <label htmlFor="sortByComments">Most Commented</label>
                                <br/>
                                <input type="radio" id="sortByDate" name="sortOption" value="sortByDate" onChange={sortByDate} />
                                <label htmlFor="sortByDate">Oldest to Newest</label>
                                <br/>
                                <input type="radio" id="sortByName" name="sortOption" value="sortByName" onChange={sortByName} />
                                <label htmlFor="sortByName">A-Z Title Name</label>
                    </div>
                    {/* <ul className="list cat-list">
                        <li>
                            <input type="checkbox" id="sortByComments" onChange={sortByComments} />
                            <label htmlFor="sortByComments">Most Commented</label>
                        </li>
                        <li>
                            <input type="checkbox" id="sortByDate" onChange={sortByDate} />
                            <label htmlFor="sortByDate">Oldest to Newest</label>
                        </li>
                        <li>
                            <input type="checkbox" id="sortByName" onChange={sortByName} />
                            <label htmlFor="sortByName">A-Z Title Name</label>
                        </li>
                    </ul> */}
                </aside>
                

                {/* Other aside widgets */}
            </div>
        </div>
    );
};

export default Sidebar;


// import React, { useState } from 'react';

// const Sidebar = ({ handleSearch, sortByComments, sortByDate, sortByName, removeSort }) => {
//     const [inputValue, setInputValue] = useState('');

//     const onSearchClick = (e) => {
//         e.preventDefault();
//         handleSearch(inputValue);
//     };

//     return (
//         <div className="col-lg-4">
//             <div className="blog_right_sidebar">
//                 <aside className="single_sidebar_widget search_widget">
//                     <form onSubmit={onSearchClick}>
//                         <div className="form-group">
//                             <div className="input-group mb-3">
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder='Search Keyword'
//                                     onFocus={(e) => e.target.placeholder = ''}
//                                     onBlur={(e) => e.target.placeholder = 'Search Keyword'}
//                                     onChange={(e) => setInputValue(e.target.value)}
//                                     value={inputValue}
//                                 />
//                             </div>
//                         </div>
//                         <button
//                             className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
//                             type="submit"
//                         >
//                             Search
//                         </button>
//                     </form>
//                 </aside>

//                 <aside className="single_sidebar_widget post_category_widget">
//                     <h4 className="widget_title">Filter</h4>
//                     <div className="radio-buttons">
//                         <input type="radio" id="removeSort" name="sortOption" value="removeSort" onChange={removeSort} />
//                         <label htmlFor="removeSort">Get Default</label>
//                         <br />
//                         <input type="radio" id="sortByComments" name="sortOption" value="sortByComments" onChange={sortByComments} />
//                         <label htmlFor="sortByComments">Most Commented</label>
//                         <br />
//                         <input type="radio" id="sortByDate" name="sortOption" value="sortByDate" onChange={sortByDate} />
//                         <label htmlFor="sortByDate">Oldest to Newest</label>
//                         <br />
//                         <input type="radio" id="sortByName" name="sortOption" value="sortByName" onChange={sortByName} />
//                         <label htmlFor="sortByName">A-Z Title Name</label>
//                     </div>
//                 </aside>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;
