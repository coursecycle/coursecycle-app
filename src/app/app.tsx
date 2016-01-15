import * as React from "react";

import { Sidebar } from "../components/sidebar";
import { Search } from "../views/search";

export class App extends React.Component<React.Props<App>, {}> {
  public render() {
    return (
      <div className="cc-app">
        <Sidebar />
        <div className="cc-wrapper">
          <div className="cc-body">
            <Search />
            <div className="cc-content pusher">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
