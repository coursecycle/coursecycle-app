import * as React from 'react';
import { Link } from 'react-router';

export class Sidebar extends React.Component<{}, {}> {
  private searchSidebar: JQuery;

  public render() {
    return (
      <div className="cc-sidebar ui left fixed vertical labeled icon menu">
        <Link to="/" className="item">
          <i className="home icon"></i>
          Home
        </Link>
        <Link to="/planner" className="item">
          <i className="calendar icon"></i>
          Planner
        </Link>
        <a className="item cc-sidebar-search" onClick={this.openSearch}>
          <i className="search icon"></i>
          Search
        </a>
      </div>
    );
  }

  private openSearch() {
    $(".cc-search").sidebar({
      "context": $(".cc-body")
    }).sidebar("setting", "transition", "overlay")
    .sidebar("toggle");
  }
}
