import axios from "axios";
import GitClient from "./GitClient";

// Mock axios
jest.mock("axios");

describe("Git Client Tests", () => {

  test("should return repository names for techiesyed", async () => {

    // ---------------- Mock Data ----------------
    const mockResponse = {
      data: [
        { name: "react-project" },
        { name: "node-api" },
        { name: "ml-project" }
      ]
    };

    // ---------------- Mock Implementation ----------------
    axios.get.mockResolvedValue(mockResponse);

    // ---------------- Call actual method ----------------
    const client = new GitClient();
    const result = await client.getRepositories("techiesyed");

    // ---------------- Expected Output ----------------
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/techiesyed/repos"
    );

    expect(result).toEqual(["react-project", "node-api", "ml-project"]);
  });

});
