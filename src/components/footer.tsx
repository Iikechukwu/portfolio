import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        <span aria-hidden className="prompt">
          $
        </span>{" "}
        exit 0
      </p>
      <p>
        &copy; {new Date().getFullYear()} {site.name}.
      </p>
    </footer>
  );
}
