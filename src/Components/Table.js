import React from 'react';


class Table extends React.Component {
    render() {
      return (
        <table>
          <tbody>
          {Array.from({length:4}, _ =>
            <tr>{Array.from({length:4}, _ => <Cell />)}</tr>
          )}
          </tbody>
        </table>
      );
    }
  }
  
  class Cell extends React.Component {
      render() {
          return <td className="cell"></td>;
      }
  }
  
  

  export default Table;