import React, { useState, useEffect, ChangeEvent } from "react";
import search from "../assets/iconmonstr-magnifier-lined.svg";

const placeholders = [
  "Procure por camisetas...",
  "Encontre seus jeans favoritos...",
  "Descubra ofertas exclusivas!",
  "Tênis em promoção...",
  "Novidades para o verão!",
];

export default function SearchBar(): JSX.Element {
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [query, setQuery] = useState("");

  // Alterna os placeholders a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        setFade(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPlaceholder(placeholders[index]);
  }, [index]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value); // Atualiza o estado com o valor do input
  }

  return (
    <div className="search-bar">
      <form>
        <div className="placeholder-container">
          {!query && (
            <div className={`placeholder ${fade ? "fade-out" : ""}`}>
              {placeholder}
            </div>
          )}
          <input
            type="search"
            className="search-input"
            value={query}
            onChange={handleChange}
            onFocus={() => setFade(true)}
            onBlur={() => setFade(false)}
          />
        </div>
        <div className="icon">
          <img src={search} alt="Ícone de busca" />
        </div>
      </form>
    </div>
  );
}


/**
 * 
 * import { useEffect, useState } from "react";
import search from "../assets/iconmonstr-magnifier-2-240.png";


export default function SearchBar(): JSX.Element{

  const [placeholder, setPlaceholder] = useState<string>("Pesquisa por novidades...")

  useEffect(() => {

    const sugestions: string[] = [
        "Produtos Baratos",
        "Roupas de marcas",
        "Telefones Digitais",
        "Etc...",
    ]

    setPlaceholder(sugestions[Math.floor(Math.random() * sugestions.length)])

  }, [placeholder])
  return (
    <div>
      <div className="search-bar">
        <form>
          <input 
              type="search" 
              placeholder={placeholder} 
              
          />
          <button type="button">
            x
          </button>

          <div className="icon">
            <img src={search} alt="" />
            </div>
        </form>
      </div>
    </div>
  );
}

 */
