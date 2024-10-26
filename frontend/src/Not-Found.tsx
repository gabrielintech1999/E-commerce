import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="not-found">
      <h1>Page not found</h1>
      
      <p>We couldn’t find the page you were looking for, but you can still view the product you’re interested in.</p>
      <a href="">Visit Shop’s website</a>
    </div>
  );
}