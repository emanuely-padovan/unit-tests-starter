import { defineConfig, devices } from "@playwright/test";

<<<<<<< HEAD
export default defineConfig ({
    testDir: "./e2e",
    workers: 1,
    reporter: "html",
    use: { 
        baseURL: "http://localhost:5173",
    },
    projects: [{name: "chromium", use: {...devices["Desktop Chrome"]}}],
    webServer: [
        {
            command: "npm run api:e2e",
            cwd: "..",
            url: "http://localhost:3000/produtos",
            reuseExistingServer: true,
        },
        {
            command: "npm run dev",
            url: "http://localhost:5173",
            reuseExistingServer: true,
        }
    ]
});
=======
export default defineConfig({
  testDir: "./e2e",
  workers: 1,
  reporter: "html",
  use: {
    baseURL: "http://localhost:5173",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: [
    {
      command: "npm run api:e2e",
      cwd: "..",
      url: "http://localhost:3000/produtos",
      reuseExistingServer: false,
    },
    {
      command: "npm run dev",
      url: "http://localhost:5173",
      reuseExistingServer: false,
    },
  ],
});
>>>>>>> 27540abde94a1cdfe9237c5ed2bb742276c23eab
