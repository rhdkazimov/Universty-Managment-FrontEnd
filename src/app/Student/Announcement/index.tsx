import React from "react";
import { useQuery } from "react-query";
import { useService } from "../../../API/Services";
import { EQueryKeys } from "../../../enums";
import { IAnnounceInfo } from "../../../models";
import "./index.scss";
export const Announce = () => {
  const { userService } = useService();
  const { data: usersAnnounceData, isLoading }: any | undefined = useQuery(
    [EQueryKeys.getAllAnnounce],
    () => {
      return userService.getAllAnnounce().catch((err) => {
        console.log(err);
      });
    }
  );

  return (
    <div className="announceBox">
      <h2>Elanlar</h2>
      <div>
        {usersAnnounceData?.data.length ? (
          usersAnnounceData?.data.map(
            ({ headerInfo, mainInfo, date }: IAnnounceInfo) => {
              return (
                <div className="announceItem">
                  <i>{headerInfo}</i>
                  <p>{mainInfo}</p>
                  <span>{date}</span>
                </div>
              );
            }
          )
        ) : (
          <span className="noAnnounce">Elan Yoxdur !</span>
        )}
      </div>
    </div>
  );
};
