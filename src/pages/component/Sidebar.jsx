import React from 'react';

const Sidebar = ({ sortByComments, sortByDate, sortByName }) => {
    return (
        <div className="col-lg-4">
            <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Search Keyword'
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = 'Search Keyword'}
                                />
                                <div className="input-group-append">
                                    <button className="btns" type="button"><i className="ti-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <button
                            className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                            type="submit">Search</button>
                    </form>
                </aside>

                <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Filter</h4>
                    <ul className="list cat-list">
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
                        {/* Other list items */}
                    </ul>
                </aside>
                

                {/* Other aside widgets */}
            </div>
        </div>
    );
};

export default Sidebar;
