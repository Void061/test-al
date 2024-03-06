import { DetailedHTMLProps } from "react";
import { Key } from "readline";

interface DrinkProps {
    mdrinks: Cocktail[] | undefined;

}
const Drinks: React.FC<DrinkProps> = ({ mdrinks }) => {
    return (
      <div>
        {mdrinks?.map((drink : Cocktail, index : React.Key) => (
          <h3 key={index}>{drink?.strDrink}</h3>
        ))}
      </div>
    );
  }

  export default Drinks;