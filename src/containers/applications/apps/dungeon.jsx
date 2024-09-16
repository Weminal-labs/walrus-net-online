import React from "react";
import { useSelector } from "react-redux";
import { ToolBar } from "../../../utils/general";
import "./assets/fileexpo.scss";

export const DungeonMove = () => {
  const wnapp = useSelector((state) => state.apps.dungeon);

  return (
    <div
      className="msfiles floatTab dpShad"
      data-size={wnapp.size}
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id={wnapp.icon + "App"}
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name={wnapp.name}
      />
      <iframe
        src="https://walrusgame.walrus.site/"
        title="Walrus Snake Game"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};
