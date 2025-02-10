import { Link } from "react-router";
import { Button } from "../ui/button";
import { ThemeProvider } from "../darkmode/theme-provider";

function NotFound() {
    document.title = "404 - Not Found | Karma"
  return (
    <ThemeProvider>
      <section className="flex items-center h-screen p-16 justify-center">
        <div className="container flex flex-col items-center ">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <Button asChild>
              <Link to="/" className="px-8 py-4 text-xl font-semibold">
                Back to home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default NotFound;
