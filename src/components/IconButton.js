import React from "react";
import { navigate } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconLookup } from "../utilities/iconLookup";

export const IconButton = ({
  link,
  tag,
  children,
  color = "blue",
  isOutline,
  isRound,
  isExternal,
  isFullwidth,
  isLarge,
}) => {
  const setClass = `m-8 shadow-lg w-24 h-24 shadow-lg
		${isFullwidth && `lg:w-full`}
		${isLarge && `text-2xl`}
		${isRound && `rounded-md`}
		hover:shadow-2xl overflow-hidden`;

  return (
    <React.Fragment>
      {isExternal ? (
        <button className={setClass} tag={tag}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(link);
          }}
          className={setClass}
          tag={tag}
        >
          {children}
        </button>
      )}
    </React.Fragment>
  );
};
