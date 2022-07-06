import {
  useEffect,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";

import { NotificationComponent } from "components/data/components";

import * as S from "./style";

interface Props {
  setSearch: Dispatch<
    SetStateAction<{
      filtered: never[];
      all: never[];
    }>
  >;
  searchItens: {
    filtered: never[];
    all: never[];
  };
  setQuery: Dispatch<SetStateAction<string>>
  query: string
}

export function SearchComponent({ searchItens, setSearch, query, setQuery }: Props) {
  const [notification, setNotification] = useState({
    title: "",
    message: "",
  });

  const minLenghtQuery = 2;

  function filter(array, text) {
    const getNodes = (result, object) => {
      console.log();
      if (object.title.toLowerCase().includes(text.toLowerCase())) {
        result.push(object);
        return result;
      }
      if (Array.isArray(object.children)) {
        const children = object.children.reduce(getNodes, []);
        if (children.length) result.push({ ...object, children });
      }
      return result;
    };

    return array.reduce(getNodes, []);
  }

  function onSubmitSearch() {
    if (query.length >= minLenghtQuery) {
      const filtered = filter(searchItens.all, query);

      setSearch((oldState) => ({
        ...oldState,
        filtered,
      }));
    } else {
      setNotification({
        title: "",
        message: "Por favor digite ao menos 2 caractéres.",
      });
    }
  }

  const QueryValidator = useCallback(() => {
    if (query.length > 0 && query.length < minLenghtQuery) {
      setNotification({
        title: "",
        message: `Por favor digite ao menos ${minLenghtQuery} caractéres.`,
      });
    } else {
      onSubmitSearch()
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
        className="search-button-action"
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
          placeholder="Pesquisar..."
          className="paragraph-3-regular"
          maxLength={25}
          value={query}
        />

        {searchItens.filtered.length > 0 && (
          <button
            className="reestart"
            type="button"
            onClick={() => {
              setQuery("")
              setSearch((oldState) => ({ ...oldState, filtered: [] }));
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
            </svg>
          </button>
        )}
      </NotificationComponent>
    </S.Search>
  );
}
