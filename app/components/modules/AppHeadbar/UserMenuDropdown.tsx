import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { UserMenu } from "@module/UserMenu/UserMenu";
import ClickAwayListener from "@common/ClickAwayListener";

export const UserMenuDropdown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ClickAwayListener
      onClickAway={() => {
        setOpen(false);
      }}
    >
      <Menu as="div">
        <Menu.Button as={Fragment}>
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-square btn-ghost hover:bg-transparent"
          >
            <div className="avatar">
              <div className={`appHeadbar__avatarMenu ${open ? "active" : ""}`}>
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
        </Menu.Button>

        <Transition
          show={open}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items as="div" className="appHeadbar__userMenuDropdown">
            <UserMenu />
          </Menu.Items>
        </Transition>
      </Menu>
    </ClickAwayListener>
  );
};
