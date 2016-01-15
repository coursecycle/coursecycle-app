import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router';

interface ISearchResult {
  body: string;
  key: string;
  title: string;
}

interface ISearchState {
  searchResults: ISearchResult[];
}

export class Search extends React.Component<ISearchState, {}> {
  public state: ISearchState = {
    searchResults: []
  };

  public render() {
    const searchResults = this.state.searchResults.map((searchResult) => {
      return (
        <SearchResult key={searchResult.key} title={searchResult.title} body={searchResult.body} />
      );
    });

    return (
      <div className="cc-search ui left inline vertical very wide sidebar menu">
        <div className="cc-search-input">
          <div className="ui transparent icon input">
            <i className="search icon"></i>
            <input type="text" placeholder="Search..." onChange={this.handleChange} />
          </div>
        </div>
        <div className="cc-search-results">
          {searchResults}
        </div>
      </div>
    );
  }

  private handleChange(e: React.FormEvent) {
    const inputElement = e.target as HTMLInputElement;
    const parentElement = inputElement.parentElement;
    const searchTerm = inputElement.value;

    if (searchTerm.length === 0) {
      parentElement.classList.remove("loading");
    } else {
      parentElement.classList.add("loading");
    }
  }
}

interface ISearchResultProps extends React.Props<SearchResult> {
  body: string;
  title: string;
}

class SearchResult extends React.Component<ISearchResultProps, {}> {
  public render() {
    return (
      <div className="cc-search-result" key={this.props.key}>
        <h4>{this.props.title}</h4>
        <p>{this.props.body}</p>
      </div>
    );
  }
}
