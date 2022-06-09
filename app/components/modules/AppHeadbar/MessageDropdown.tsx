import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import ClickAwayListener from "@common/ClickAwayListener";
import { MessageIcon } from "@element/Icons/MessageIcon";
import { MessageDrawer } from "@module/MessageDrawer/MessageDrawer";

export const MessageDropdown: React.FC = () => {
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
            tabIndex={0}
            type="button"
            role="menuitem"
            onClick={() => setOpen(!open)}
            className={`appHeadbar__DropDownToggler ${open ? "active" : ""}`}
          >
            <MessageIcon />
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
          <Menu.Items as="div" className="appHeadbar__DropDown">
            <MessageDrawer />
          </Menu.Items>
        </Transition>
      </Menu>
    </ClickAwayListener>
  );
};
