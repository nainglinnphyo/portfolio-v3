import Link from "next/link";
import { Fragment } from "react";
import { profile } from "@/utils/profile";

/**
 * The products, as prose: "FARY, Getbak and Room Social".
 *
 * Reads straight from `profile.products`, so adding or renaming one is a
 * single data edit. Before this the names were hand-written into two
 * separate sentences, which is why the FARY rename had to touch both.
 * Entries without an href render as plain text, not dead links.
 */
export default function ProductList() {
  const items = profile.products;

  return (
    <>
      {items.map((product, i) => {
        const separator =
          i === 0 ? "" : i === items.length - 1 ? " and " : ", ";

        return (
          <Fragment key={product.name}>
            {separator}
            {product.href ? (
              <Link href={product.href} className="link-accent">
                {product.name}
              </Link>
            ) : (
              <span className="font-semibold text-fg">{product.name}</span>
            )}
          </Fragment>
        );
      })}
    </>
  );
}
