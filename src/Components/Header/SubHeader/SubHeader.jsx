import { ArrowDown } from "../../../assets/ArrowDown";
import "./SubHeader.css";

export const SubHeader = () => {
  return (
    <div className="subHeader">
      <div className="allCategories">
        <span>ALL CATEGORIES</span>
        <div className="arrowContainer">
          <ArrowDown />
        </div>
      </div>
      <ul>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Mobile Phones</li>
        <li>For Sale: Houses & Apartments</li>
        <li>Scooters</li>
        <li>Commercial & Other Vehicles</li>
        <li>For Rent: Houses & Apartments</li>
      </ul>
    </div>
  );
};
