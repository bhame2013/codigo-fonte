import Link from "next/link";

import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";

import * as S from "styles/pages/layout";
import { useEffect, useState } from "react";
import { api } from "src/api";
import { SearchComponent } from "components/data/search";
import { Dropdown } from "./dropdown";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState({
    filtered: [],
    all: [],
  });

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/categories");

      setCategories({
        filtered: [],
        all: data,
      });
    })();
  }, []);

  function GenerateSideBar(itens) {
    return itens.map((categorie) => {
      if (categorie.children) {
        return (
          <li key={"categorie-" + categorie.id}>
            <Dropdown title={categorie.title}>
              {GenerateSideBar(categorie.children)}
            </Dropdown>
          </li>
        );
      }

      return (
        <li key={"categorie-" + categorie.id}>
          <Link href={categorie.url} passHref>
            <a href="replaced">{categorie.title}</a>
          </Link>
        </li>
      );
    });
  }

  return (
    <S.Layout>
      <HeaderComponent />

      {categories.all && (
        <div className="sidebar">
          <div className="search">
            <SearchComponent
              query={query}
              setQuery={setQuery}
              searchItens={categories}
              setSearch={setCategories}
            />
          </div>

          {query.length > 1 && categories.filtered.length === 0 ? (
            <p className="paragraph-2-regular default-value">
              {`No results for "${query}".`} <br />
              Try again with a different keyword.
            </p>
          ) : (
            <>
              <h3 className="paragraph-1-semibold">Documentation</h3>

              <ul className="categories">
                {GenerateSideBar(
                  categories.filtered.length > 0
                    ? categories.filtered
                    : categories.all
                )}
              </ul>
            </>
          )}
        </div>
      )}

      {children}

      <FooterComponent />
    </S.Layout>
  );
}
