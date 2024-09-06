import { describe, it, expect } from "vitest";
import * as siwa from "@projectlibertylabs/siwa";

describe("SIWA request test", () => {
  it("should return a valid redirect URL from the real SIWA server", async () => {
    const providerKeyUri: string = "//Alice";
    const callbackUri: string = "http://localhost:3000/callback"; // Ensure the mock server is running
    const permissions: number[] = [5, 7, 8, 9, 10];
    const credentials = [siwa.VerifiedEmailAddressCredential];
    const options = { endpoint: "http://localhost:3000" }; // This should point to your mock server

    try {
      const redirectUrl = await siwa.getRedirectUrl(providerKeyUri, callbackUri, permissions, credentials, options);
      expect(redirectUrl).toContain("http://localhost:3000/callback?authorizationCode=");
    } catch (error) {
      throw new Error("Error in generating redirect URL: " + error);
    }
  });
});
