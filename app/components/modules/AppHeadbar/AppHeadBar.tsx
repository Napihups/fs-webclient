import { MessageIcon } from "@element/Icons/MessageIcon";
import { NotifIcon } from "@element/Icons/NotifIcon";
import { SearchIcon } from "@element/Icons/SearchIcon";
import { MessageDrawer } from "@module/MessageDrawer/MessageDrawer";
import { NotificationDrawer } from "@module/NotificationDrawer/NotificationDrawer";
import { UserMenu } from "@module/UserMenu/UserMenu";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { MessageDropdown } from "./MessageDropdown";
import { NotificationDropdown } from "./NotificationDropdown";
import { UserMenuDropdown } from "./UserMenuDropdown";

export const AppHeadbar: React.FC = ({}) => {
  const router = useRouter();

  /** Temporary Search Submit Handlers */
  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
  };

  const getPageTitle = useCallback(() => {
    switch (true) {
      case router.pathname === "/":
        return "HOME";
      case router.pathname.includes("/finance"):
        return "FINANCE";
      case router.pathname.includes("/calendar"):
        return "CALENDAR";
      case router.pathname.includes("/timelines"):
        return "TIMELINES";
      case router.pathname.includes("/diary"):
        return "DIARY";
      case router.pathname.includes("/settings"):
        return "SETTINGS";
      default:
        break;
    }
  }, [router.pathname]);

  return (
    <div className="appHeadbar">
      <p role="heading" aria-level={1} className="text-base-content uppercase font-bold mr-4">
        {getPageTitle()}
      </p>

      <div className="appHeadbar__right">
        {/* Search Form Module component -------------------- */}
        <form onSubmit={onSubmit} className="mr-4">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered min-w-[300px]"
              />
              <button type="submit" className="btn btn-squar">
                <SearchIcon />
              </button>
            </div>
          </div>
        </form>
        {/*  ------------------------------------------------ */}
        <MessageDropdown />
        <NotificationDropdown />
        <UserMenuDropdown />
      </div>
    </div>
  );
};
