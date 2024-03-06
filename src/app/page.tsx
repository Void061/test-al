"use client";
import { useState, Suspense, lazy } from "react";
import Loading from "./loading";
import useSWR from "swr";
import { mutate } from "swr";


export default function Home() {

  const API_URL2 = 'https://next-course-20979-default-rtdb.firebaseio.com/drinks.json';

  const fetchDrinks = async(url: string) =>{
    const response = await fetch(url);
    const data = await response.json();
    const drinks : Cocktail[] = Object.values(data);
    return drinks;
  }
  const [drink, setDrink] = useState('');
  const { data: drinks, error, mutate: mutateDrinks} = useSWR<Cocktail[]>(API_URL2, fetchDrinks);

  const addCocktail = async(DRINK : String) => {

    const response = await fetch(API_URL2, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        'strDrink' : DRINK
      })
    });

    mutateDrinks((prevDrinks: Cocktail[] | undefined) => {
      if (!prevDrinks) return []; // Se prevDrinks è undefined, restituisci un array vuoto
      return [...prevDrinks, { strDrink: DRINK }]; // Aggiungi il nuovo cocktail all'array esistente
    });

  }


  const Drinks = lazy(() => import('./Drinks'));

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Drinks mdrinks={drinks} />
      </Suspense>

      <h4>INSERT COCKTAIL</h4>
      <input className="bg-[aqua]" type="text" value={drink} onChange={(e) => setDrink(e.target.value)} />
      <button onClick={() => addCocktail(drink)} type="button">ADD COCKTAIL</button>
    </div>
  );
}
