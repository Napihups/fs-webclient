import { MessageIcon } from "@element/Icons/MessageIcon";
import { NotifIcon } from "@element/Icons/NotifIcon";
import { SearchIcon } from "@element/Icons/SearchIcon";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

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
      <p role="heading" aria-level={1} className="text-base-content uppercase font-bold">
        {getPageTitle()}
      </p>

      <div className="appHeadbar__right">
        <form onSubmit={onSubmit} className="mr-4">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered min-w-[400px] "
              />
              <button type="submit" className="btn btn-squar">
                <SearchIcon />
              </button>
            </div>
          </div>
        </form>
        <button type="button" role="menuitem" className="btn btn-square btn-ghost mx-1">
          <MessageIcon />
        </button>
        <button type="button" role="menuitem" className="btn btn-square btn-ghost mx-1">
          <NotifIcon />
        </button>
        <button className="btn btn-square btn-ghost hover:bg-transparent">
          <div className="avatar">
            <div className="appHeadbar__avatarMenu">
              <Image
                width={"48px"}
                height={"48px"}
                alt="Avatar"
                user-meta=""
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
