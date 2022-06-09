import { UserMeta } from "@fsTypes/common.types";
import { AppHeadbar } from "@module/AppHeadbar/AppHeadBar";
import { cleanup, render, screen } from "@testing-library/react";

const user: UserMeta = {
  name: "Hanafi",
  sessionToken: "",
  avatarUrl: "",
  userRole: "standard",
};

describe("AppHeadbar UI test", () => {
  let emit: any;

  beforeAll(() => {
    ({ emit } = window._virtualConsole);
  });

  beforeEach(() => {
    window._virtualConsole.emit = jest.fn();
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    window._virtualConsole.emit = emit;
  });

  it("Static: display Title should be display correctly based on title props", async () => {
    const title = "Finance";

    render(<AppHeadbar title={title} userMeta={user} />);
    expect(await screen.findByRole("heading", { name: title }));
  });

  it("Static: having a user props should rendered the avatar component with the user infomation metadat", async () => {
    const title = "Finance";

    render(<AppHeadbar title={title} userMeta={user} />);

    const targetAvatar = await screen.findByRole("img");
    const dataUser = targetAvatar.getAttribute("data-user");

    expect(dataUser).toBeDefined();
    expect(JSON.parse(dataUser as string)).toMatchObject<UserMeta>({ ...user });
  });
});
