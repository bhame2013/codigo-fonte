import { useEffect, useState } from "react";
import { NextRouter } from "next/router";

import { CategoriesList } from "src/services/shop/get";

import { Skeleton } from "../skeleton";

import * as S from "./styles";

interface FilterProps {
  listFilters?: CategoriesList[];
  router: NextRouter;
  routerBuild: any;
  isFetching?: boolean;
  setFilterMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FilterBy({
  listFilters,
  router,
  routerBuild,
  isFetching,
  setFilterMobile
}: FilterProps) {
  
  const [active, setActive] = useState({
    id: 0,
    active: false,
  });

  function SetParams(categorie: CategoriesList | null) {
    routerBuild.updateRouteParam("category", categorie ? categorie.url : "");
    routerBuild.updateRouteParam("page", 1);

    setActive({
      id: categorie ? categorie.id : 0,
      active: true,
    });

    setFilterMobile(false);
  }

  useEffect(() => {
    if (router.query && listFilters && router.query.category) {
      routerBuild.updateRouteParam("category", router.query.category);
      routerBuild.updateRouteParam("page", 1);

      const filterExist = listFilters.find(
        (filter) => filter.url === router.query.category
      );

      if (filterExist) {
        setActive({
          id: filterExist.id,
          active: true,
        });
      }
    }
  }, []);

  if (!listFilters) {
    return <div></div>;
  }

  return (
    <S.Filter>
      <h3 className="title-6-bold-graphie">Filter by</h3>

      <button
        className={`paragraph-2-regular-graphie ${active.id === 0 ? "active" : ""}`}
        type="button"
        onClick={() => SetParams(null)}
      >
        Show All ({listFilters.reduce((a, b) => a + b.productsCount, 0)})
      </button>

      {isFetching ? (
        <Skeleton element='<button type="button"></button>' show={4} />
      ) : (
        listFilters.map((filter) => {
          return (
            <button
              key={filter.id + filter.titulo}
              className={`paragraph-2-regular-graphie  ${active.id === filter.id ? "active" : ""}`}
              type="button"
              onClick={() => SetParams(filter)}
            >
              {filter.titulo} ({filter.productsCount})
            </button>
          );
        })
      )}
    </S.Filter>
  );
}
