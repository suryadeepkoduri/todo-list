import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-gray-50 text-center">
      <p className="mb-2">© {new Date().getFullYear()} Surya Deep Koduri</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/suryadeepkoduri"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <Github size={24} />
        </a>
        <a
          href="https://twitter.com/suryadeepkoduri"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <Twitter size={24} />
        </a>
      </div>
    </footer>
  );
}
