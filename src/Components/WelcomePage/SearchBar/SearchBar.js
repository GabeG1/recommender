import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  render()
  {
  return (
    <div className="SearchBar">
     <form>
        <input id="searchQuery" type="text" name="query" placeholder="search something..."/>
     </form>
    </div>
  );
}
}