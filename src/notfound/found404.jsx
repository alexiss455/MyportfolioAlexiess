import { Link } from "react-router-dom"

export default function Custom404() {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The requested page could not be found.</p>
        <Link href="/">
          <a>Go back to home</a>
        </Link>
      </div>
    )
  }