import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../../context/cartProvider";

export default function ProductList(): JSX.Element {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null>(null);
  const [page, setPage] = useState<number>(1); // Controle da paginação
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get("category");

  const displayedProducts = typeFilter
    ? products.filter((product) => product.category === typeFilter)
    : products;

  const fetchProducts = async (page:number): Promise<void> => {
    try {
      const response = await fetch(`/data/db.json?page=${page}`);
      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      setProducts((prev) => [...prev, ...data.products]); // Adiciona novos produtos
      setHasMore(data.products.length > 0); // Verifica se há mais produtos
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const loadMore = () => setPage((prev) => prev + 1);

  if (loading && products.length === 0) {
    return (
      <ul>
        {[...Array(8)].map((_, index) => (
          <li key={index}>
            <div className="shimmer" />
          </li>
        ))}
      </ul>
    );
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="filters">
        <Link to="?category=electronics">Electronics</Link>
        <Link to="?category=furniture">Furniture</Link>
        <Link to="?category=home_appliances">Home Appliances</Link>
        <Link to=".">All Categories</Link>
      </div>
      <main>
        {displayedProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))}
      </main>
      {hasMore && (
        <button className="button-load-more" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

type Props = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
};

function Product({ id, name, image, description, price }: Props): JSX.Element {
  // Acessa o dispatch do contexto do carrinho


  
  return (
    <article>
      <Link to={`${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">Price: ${price}</p>
      </Link>
    </article>
  );
}
