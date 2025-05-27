import React from 'react';
import './styles.css'; // Импорт стилей
import { stocks } from './constants'; // Импорт данных

const StockTable = () => {
  return (
    <div className="stock-table-container">
      <h2>Stock Market Data</h2>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Company</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.stock_name}</td>
              <td>{stock.company_name}</td>
              <td className="price-cell">
                {stock.price.toFixed(2)} {stock.currency}
              </td>
              <td className={`change-cell ${stock.change.startsWith('+') ? 'positive' : 'negative'}`}>
                {stock.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;