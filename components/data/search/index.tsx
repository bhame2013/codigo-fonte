import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

import { NotificationComponent } from "components/data/components";

import * as S from "./style";

export function SearchComponent() {
  const [query, setQuery] = useState("");
  const [notification, setNotification] = useState({
    title: "",
    message: "",
  });

  const { push } = useRouter();

  const minLenghtQuery = 3;

  function onSubmitSearch() {
    if (query.length >= minLenghtQuery) {
      push({
        pathname: "/search/",
        query: { search: query },
      });
    } else {
      setNotification({
        title: "",
        message: "Por favor digite ao menos 3 caractéres.",
      });
    }
  }

  const QueryValidator = useCallback(() => {
    if (query.length > 0 && query.length < minLenghtQuery) {
      setNotification({
        title: "",
        message: "Por favor digite ao menos 3 caractéres.",
      });
    } else {
      setNotification({
        title: "",
        message: "",
      });
    }
  }, [query]);

  useEffect(() => {
    QueryValidator();
  }, [QueryValidator]);

  return (
    <S.Search onSubmit={onSubmitSearch}>
      <button
        disabled={!(query.length >= minLenghtQuery)}
        type="submit"
        aria-label="search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <g>
            <g>
              <g>
                <path d="M8.91 1.806c4.063.646 6.414 5.176 4.585 8.833-2.326 4.65-8.834 4.653-11.158.004C.112 6.19 3.958 1.02 8.91 1.806M7.068.058l-.39.056C1.843.808-1.235 6.036.478 10.642c1.844 4.953 7.944 6.793 12.123 3.657l.253-.19 2.884 2.873c1.84 1.833 2.935 2.897 3.026 2.938a.835.835 0 0 0 1.195-.712c.025-.436.13-.315-2.997-3.452l-2.875-2.883.095-.117c2.669-3.256 1.98-8.497-1.456-11.1C11.119.439 8.846-.204 7.068.058" />
              </g>
            </g>
          </g>
        </svg>
      </button>

      <NotificationComponent
        title={notification.title}
        message={notification.message}
        notificationPosition={{
          bottom: true,
          left: true,
          triangle: "top-left",
        }}
      >
        <input
          type="text"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search here"
          className="paragraph-1-bold-graphie"
          maxLength={25}
        />
      </NotificationComponent>
    </S.Search>
  );
}
