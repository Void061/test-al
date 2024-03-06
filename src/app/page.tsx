"use client";
import { useState } from "react";
import Loading from "./loading";

export default function Home({names}) {
  return (
    <div>
     {
      names.map((name, index) => {
        return(
          <h3 key={index}>{name}</h3>
        )
      })
     }
    </div>
  );
}



export async function getServerSideProps(){
  return {
    props: {
      names: ["Ivan", "Carlo", "Rosario", "Lugi"]
    }
  }
}